import * as React from 'react';
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import Banner from "../../contianer/banner/Banner";

function Message(props) {
    const [pageCover, setPageCover] = useState(null)

    useEffect(() => {
        props.blogInfo.pageList.forEach(item => {
            if (item.pageLabel === "message") {
                setPageCover(item.pageCover)
            }
        })
    })

    return (
        <div>
            <Banner pageCover={pageCover} name={"留言"}></Banner>
        </div>
    );
}

const mapStateToProps = (state:any) => {
    return {
        blogInfo: state.BlogInfo.blogInfo
    }
}

export default connect(mapStateToProps)(Message);