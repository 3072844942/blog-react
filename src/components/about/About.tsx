import * as React from 'react';
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import Banner from "../../contianer/banner/Banner";

function About(props) {
    const [pageCover, setPageCover] = useState(null)

    useEffect(() => {
        props.blogInfo.pageList.forEach(item => {
            if (item.pageLabel === "about") {
                setPageCover(item.pageCover)
            }
        })
    })


    return (
        <div>
            <Banner pageCover={pageCover} name={"关于我"}></Banner>
        </div>
    );
}

const mapStateToProps = (state:any) => {
    return {
        blogInfo: state.BlogInfo.blogInfo
    }
}

export default connect(mapStateToProps)(About);