import * as React from 'react';
import {Divider, List, Skeleton} from "antd";
import {articleInfoInterFace} from "../../redux/store";
import InfiniteScroll from "react-infinite-scroll-component";
import {useEffect} from "react";
import {getArchiveInfo, getArticleInfo} from "../../action/ArticleAction";
import {connect} from "react-redux";
import {Timeline} from 'antd';
import 'antd/dist/antd.css'
import {NavLink} from "react-router-dom";

function ArticleDirectory(props) {
    useEffect(() => {
        if (props.archiveInfo.length <= 0) props.getArticle()
    }, [])

    return (
        <InfiniteScroll
            dataLength={props.archiveInfo.length}
            next={props.getArticle}
            hasMore={props.archiveInfo.length < props.blogInfo.articleCount}
            loader={<Skeleton avatar paragraph={{rows: 1}} active/>}
            endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
            scrollableTarget="scrollableDiv"
        >
            <h1 style={{
                fontSize: "2.5em",
            }}>目前共计{props.articleCount}篇文章，继续加油</h1>
            <List
                dataSource={props.archiveInfo}
                renderItem={(item: articleInfoInterFace, index) => (
                    <Timeline mode={index % 2=== 0 ? 'left' : 'right'}>
                        <Timeline.Item label={item.createTime}>
                            <NavLink to={'/articles/' + item.id} style={{fontSize: "20px"}}>{item.articleTitle}</NavLink>
                        </Timeline.Item>
                    </Timeline>
                )}
            />
        </InfiniteScroll>
    );
}

const mapStateToProps = (state: any) => {
    return {
        blogInfo: state.BlogInfo.blogInfo,
        archiveInfo: state.ArticleInfo.archiveInfo,
        articleCount: state.ArticleInfo.articleCount
    }
}

const mapDispatchToProps = {
    getArticle() {
        return getArchiveInfo()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDirectory);