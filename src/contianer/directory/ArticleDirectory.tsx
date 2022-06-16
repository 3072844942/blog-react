import * as React from 'react';
import {Divider, List, Skeleton} from "antd";
import {articleInfoInterFace} from "../../redux/store";
import InfiniteScroll from "react-infinite-scroll-component";
import {useEffect} from "react";
import {getArticleInfo} from "../../action/ArticleAction";
import {connect} from "react-redux";
import {Timeline} from 'antd';
import 'antd/dist/antd.css'
import {HomeOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";

function ArticleDirectory(props) {
    useEffect(() => {
        if (props.articleInfo.length <= 0) props.getArticle()
    }, [])

    return (
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
        articleInfo: state.ArticleInfo.articleInfo
    }
}

const mapDispatchToProps = {
    getArticle() {
        return getArticleInfo()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDirectory);