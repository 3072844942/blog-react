import * as React from 'react';
import {useEffect, useState} from "react";
import Banner from "../../contianer/banner/Banner";
import {connect} from "react-redux";

function Archives(props) {
    const [pageCover, setPageCover] = useState(null)

    useEffect(() => {
        props.blogInfo.pageList.forEach(item => {
            if (item.pageLabel === "archive") {
                setPageCover(item.pageCover)
            }
        })
    })


    return (
        <div>
            <Banner pageCover={pageCover} name={"归档"}></Banner>
        </div>
    );
}

const mapStateToProps = (state:any) => {
    return {
        blogInfo: state.BlogInfo.blogInfo
    }
}

export default connect(mapStateToProps)(Archives);