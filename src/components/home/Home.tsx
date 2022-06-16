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
import InfoContainer from "../../contianer/info/InfoContainer";
import {HomeOutlined} from "@ant-design/icons";
import Swiper from "../../contianer/swiper/Swiper";
import {getTalks} from "../../action/BlogInfoAction";

function Home(props) {
    const [pageCover, setPageCover] = useState(null)

    const [time, settime] = useState("")

    // 刚进入主页时, 获取主页信息和文章信息
    useEffect(() => {
        props.blogInfo.pageList.forEach(item => {
            if (item.pageLabel === "home") {
                setPageCover(item.pageCover)
            }
        })

        if (props.articleInfo.length <= 0) props.getArticle()

        props.getTalks()
    }, [])

    // 启动一个定时器, 每秒对当前运行时间进行修改
    useEffect(() => {
        const timeInterval = setInterval(() => {
            var timeold =
                new Date().getTime() -
                new Date(props.blogInfo.websiteConfig.websiteCreateTime).getTime();
            var msPerDay = 24 * 60 * 60 * 1000;
            var daysold = Math.floor(timeold / msPerDay);
            var str = "";
            var day = new Date();
            str += daysold + "天";
            str += day.getHours() + "时";
            str += day.getMinutes() + "分";
            str += day.getSeconds() + "秒";
            settime(str);
        }, 1000)
        return () => {
            clearInterval(timeInterval)
        }
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

                    <InfoContainer icon={<HomeOutlined/>} title={"公告"}>
                        {props.blogInfo.websiteConfig.websiteNotice}
                    </InfoContainer>

                    <InfoContainer icon={<HomeOutlined/>} title={"网站咨询"}>
                        <div style={{height: "30px"}}>
                            <span style={{float: "left"}}>运行时间:</span>
                            <span style={{float: "right"}}>{time}</span>
                        </div>
                        <div style={{height: "30px"}}>
                            <span style={{float: "left"}}>总访问量:</span>
                            <span style={{float: "right"}}>{props.blogInfo.viewsCount}</span>
                        </div>
                    </InfoContainer>
                </div>
                <div>
                    <Swiper talks={props.talks}></Swiper>
                    {/*右侧无限滚动, 放文章容器*/}
                    <InfiniteScroll
                        dataLength={props.articleInfo.length}
                        next={props.getArticle}
                        hasMore={props.articleInfo.length < props.blogInfo.articleCount}
                        loader={<Skeleton avatar paragraph={{rows: 1}} active/>}
                        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                        scrollableTarget="scrollableDiv"
                    >
                        <List
                            dataSource={props.articleInfo}
                            renderItem={(item: any, index) => (
                                <DetailedArticleContainer key={item.id} {...item} index={index}>
                                </DetailedArticleContainer>
                            )}
                        />
                    </InfiniteScroll>
                </div>
            </Double>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        blogInfo: state.BlogInfo.blogInfo,
        articleInfo: ObjectToArray(state.ArticleInfo.articleInfo),
        talks: state.BlogInfo.talks
    }
}

const mapDispatchToProps = {
    getArticle() {
        return getArticleInfo()
    },
    getTalks() {
        return getTalks()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);