import * as React from 'react';
import {useEffect, useState} from "react";
import Banner from "../../contianer/banner/Banner";
import {connect} from "react-redux";
import Single from "../../contianer/body/Single";
import ArticleDirectory from "../../contianer/directory/ArticleDirectory";

function Archives(props) {
    const [pageCover, setPageCover] = useState(null)

    useEffect(() => {
        props.blogInfo.pageList.forEach(item => {
            if (item.pageLabel === "archive") {
                setPageCover(item.pageCover)
            }
        })
    }, [])

    return (
        <div>
            <Banner pageCover={pageCover} name={"归档"}></Banner>
            <Single>
                <ArticleDirectory></ArticleDirectory>
            </Single>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        blogInfo: state.BlogInfo.blogInfo,
    }
}

export default connect(mapStateToProps)(Archives);