import * as React from 'react';
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import Banner from "../../contianer/banner/Banner";
import Single from "../../contianer/body/Single";
import {getCategories} from "../../action/ArticleAction";
import {Timeline} from 'antd';
import 'antd/dist/antd.css'
import {HomeOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";

function Category(props) {
    const [pageCover, setPageCover] = useState(null)

    useEffect(() => {
        props.blogInfo.pageList.forEach(item => {
            if (item.pageLabel === "category") {
                setPageCover(item.pageCover)
            }
        })

        if (props.categoriesCount <= 0) props.getCategories()
    })

    return (
        <div>
            <Banner pageCover={pageCover} name={"分类"}></Banner>
            <Single>
                <h1 style={{
                    textAlign: 'center',
                    fontSize: '2em'
                }}>分类 - {props.categoriesCount}</h1>
                <Timeline
                    pending={true}
                    pendingDot={<HomeOutlined />}
                >
                    {
                        props.categoriesList.map(item => <Timeline.Item>
                            <NavLink to={'/categories/' + item.id} style={{color: '#000', fontSize:'1.6em'}} key={item.id}>
                                {item.categoryName} - {item.articleCount}
                            </NavLink>
                        </Timeline.Item>)
                    }
                </Timeline>
            </Single>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        blogInfo: state.BlogInfo.blogInfo,
        categoriesList: state.ArticleInfo.categoriesList,
        categoriesCount: state.ArticleInfo.categoriesCount,
    }
}

const mapDispatchToProps = {
    getCategories() {
        return getCategories()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);