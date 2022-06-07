import * as React from 'react';

import './DetailedArticleContainer.scss'
import {NavLink} from "react-router-dom";

/**
 * 详情文章信息, 也就是主页图片和介绍并列的样式
 * @param props
 * @constructor
 */
function DetailedArticleContainer(props) {
    return (
        <div className={['DetailedArticleContainer'].join(' ')}>
            {/*文章图片, 奇数时在左, 偶数时在右*/}
            <div className={[props.index % 2 === 0 ? 'left' : 'right'].join(' ')}>
                <div className={'articleImg'} style={{
                    background: 'url(' + props.articleCover + ') center center / cover no-repeat'
                }}>
                </div>
            </div>
            <div className={[props.index % 2 === 1 ? 'left' : 'right', 'article'].join(' ')}>
                {/*文章标题*/}
                <div className={'articleTitle'}>
                    <NavLink to={'/articles/' + props.id }>{props.articleTitle}</NavLink>
                </div>
                {/*小字, 文章属性*/}
                <div className={'articleInfo'}>
                    {/*是否置顶和他的分割号*/}
                    {props.isTop === 1 && <span style={{color: '#ff7242'}}>
                      <i className="iconfont iconzhiding"/> 置顶
                    </span>}
                    {props.isTop === 1 && <span className="separator">|</span>}
                    {/*创建时间和他的分隔符*/}
                    <span className={"createTime"}>{props.createTime}</span>
                    <span className="separator">|</span>
                    {/*文章分类和他的分隔符*/}
                    <span><NavLink to={'/categories/' + props.categoryId}>{props.categoryName}</NavLink></span>
                    <span className="separator">|</span>
                    {/*文章标签*/}
                    {
                        props.tagDTOList.map(item => <span style={{marginRight: "8px"}}>
                            <NavLink to={'/tags/' + item.id}>{item.tagName}</NavLink>
                        </span>)
                    }
                </div>
                {/*文章预览*/}
                <div className={'articleDetail'}>
                    {
                        props.articleContent
                    }
                </div>
            </div>
        </div>
    );
}

export default DetailedArticleContainer;