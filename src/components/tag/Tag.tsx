import * as React from 'react';
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import Banner from "../../contianer/banner/Banner";
import Single from "../../contianer/body/Single";
import {getTags} from "../../action/ArticleAction";
import {NavLink} from "react-router-dom";
import styled from 'styled-components'

// 单独写一个css我也是没想到
import './Tag.scss'

function Tag(props) {
    const [pageCover, setPageCover] = useState(null)
    const [now, setindex] = useState(-1)

    useEffect(() => {
        props.blogInfo.pageList.forEach(item => {
            if (item.pageLabel === "tag") {
                setPageCover(item.pageCover)
            }
        })

        if (props.tagsCount <= 0) props.getTags()
    }, [])

    return (
        <div className={'Tag'}>
            <Banner pageCover={pageCover} name={"标签"}></Banner>
            <Single>
                <h1 style={{
                    textAlign: 'center',
                    fontSize: '2em'
                }}>标签 - {props.tagsCount}</h1>
                <div style={{
                    textAlign: 'center',
                    margin: '16px 100px 0 100px',
                }}>
                    {
                        props.tagsList.map((item, index) =>
                            <NavLink
                                key={item.id}
                                to={'/tags/' + item.id}
                                className={'tagNavLink'}
                            >
                                {item.tagName}
                            </NavLink>
                        )
                    }
                </div>
                {/*这里用来占位, 使得距离下边缘有点距离*/}
                <div style={{height: '60px'}}></div>
            </Single>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        blogInfo: state.BlogInfo.blogInfo,
        tagsList: state.ArticleInfo.tagsList,
        tagsCount: state.ArticleInfo.tagsCount
    }
}

const mapDispatchToProps = {
    getTags() {
        return getTags()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tag);