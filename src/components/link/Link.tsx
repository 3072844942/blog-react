import * as React from 'react';
import Banner from '../../contianer/banner/Banner';
import {useEffect, useState} from "react";
import {connect} from "react-redux";

function Link(props) {
    const [pageCover, setPageCover] = useState(null)

    useEffect(() => {
        props.blogInfo.pageList.forEach(item => {
            if (item.pageLabel === "link") {
                setPageCover(item.pageCover)
            }
        })
    })


    return (
        <div>
            <Banner pageCover={pageCover} name={"友联"}></Banner>
        </div>
    );
}

const mapStateToProps = (state:any) => {
    return {
        blogInfo: state.BlogInfo.blogInfo
    }
}

export default connect(mapStateToProps)(Link);