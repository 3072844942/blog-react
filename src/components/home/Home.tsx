import * as React from 'react';
import {useEffect, useState} from "react";
import {getArticleInfo} from "../../action/ArticleAction";
import {ObjectToArray} from "../../helper/Function";
import {Divider, List, Skeleton} from "antd";
import InfiniteScroll from 'react-infinite-scroll-component';

import HomeBanner from "../../contianer/banner/HomeBanner";
import {connect} from "react-redux";

import 'antd/dist/antd.css'
import Double from "../../contianer/body/Double";
import DetailedArticleContainer from "../../contianer/article/DetailedArticleContainer";
import AuthorInfo from "../../contianer/info/AuthorInfo";

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

            {/*主内容是双栏内容, 随后不保证会单双栏切换*/}
            <Double main={'right'}>
                {/*左侧放博客信息等*/}
                <div>
                    <AuthorInfo {...props.blogInfo}></AuthorInfo>
                </div>
                {/*右侧无限滚动, 放文章容器*/}
                <InfiniteScroll
                    dataLength={props.articleInfo.length}
                    next={props.getArticle}
                    hasMore={props.articleInfo.length < props.blogInfo.articleCount}
                    loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                    endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                    scrollableTarget="scrollableDiv"
                >
                    <List
                        dataSource={props.articleInfo}
                        renderItem={(item:any, index) => (
                            <DetailedArticleContainer key={item.id} {...item} index={index}>
                            </DetailedArticleContainer>
                        )}
                    />
                </InfiniteScroll>
            </Double>
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