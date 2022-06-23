import * as React from 'react';
import {useEffect, useState} from "react";
import Banner from "../../contianer/banner/Banner";
import {connect} from "react-redux";
import Single from "../../contianer/body/Single";

function Albums(props) {
    const [pageCover, setPageCover] = useState(null)

    useEffect(() => {
        props.blogInfo.pageList.forEach(item => {
            if (item.pageLabel === "album") {
                setPageCover(item.pageCover)
            }
        })
    })


    return (
        <div>
            <Banner pageCover={pageCover} name={"相册"}></Banner>
            <Single></Single>
        </div>
    );
}

const mapStateToProps = (state:any) => {
    return {
        blogInfo: state.BlogInfo.blogInfo
    }
}

export default connect(mapStateToProps)(Albums);