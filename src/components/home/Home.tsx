import * as React from 'react';
import {useEffect, useState} from "react";
import './Home.scss'
import HomeBanner from "../../contianer/banner/HomeBanner";
import {connect} from "react-redux";

import 'antd/dist/antd.css'
import {getArticleInfo} from "../../action/ArticleAction";
import Single from "../../contianer/body/Single";
import {ObjectToArray} from "../../helper/Function";

function Home(props) {
    const [pageCover, setPageCover] = useState(null)

    useEffect(() => {
        props.blogInfo.pageList.forEach(item => {
            if (item.pageLabel === "home") {
                setPageCover(item.pageCover)
            }
        })
        props.getArticle()
    }, [])

    return (
        <div className={["Home"].join(' ')}>
            {/*主页大图, 不同于其他大图, 这个大图要全屏且有汉字*/}
            <HomeBanner pageCover={pageCover} websiteName={props.blogInfo.websiteConfig.websiteName}></HomeBanner>

            <Single>
                {
                    props.articleInfo.map(item => <div key={item.id}>
                        {item.articleTitle}
                    </div>)
                }
            </Single>
        </div>
    );
}

const mapStateToProps = (state:any) => {
    return {
        blogInfo: state.BlogInfo.blogInfo,
        articleInfo: ObjectToArray(state.ArticleInfo.articleInfo)
    }
}

const mapDispatchToProps = {
    getArticle() {
        return getArticleInfo()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);