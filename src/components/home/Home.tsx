import * as React from 'react';
import {useEffect, useState} from "react";
import './Home.scss'
import HomeBanner from "../../contianer/banner/HomeBanner";
import {connect} from "react-redux";

function Home(props) {
    const [pageCover, setPageCover] = useState(null)

    useEffect(() => {
        props.blogInfo.pageList.forEach(item => {
            if (item.pageLabel === "home") {
                setPageCover(item.pageCover)
            }
        })
    })

    return (
        <div className={["Home"].join(' ')}>
            <HomeBanner pageCover={pageCover} websiteName={props.blogInfo.websiteConfig.websiteName}></HomeBanner>
        </div>
    );
}

const mapStateToProps = (state:any) => {
    return {
        blogInfo: state.BlogInfo.blogInfo
    }
}

export default connect(mapStateToProps)(Home);