import * as React from 'react';
import {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

import './TopNavBar.scss'
import {connect} from "react-redux";
import {showLogin, showSearch} from "../../action/moduleAcion";

import {UserOutlined, HomeOutlined, ContainerOutlined, AppstoreOutlined,
    TagsOutlined,CameraOutlined, MessageOutlined, CommentOutlined,
    ShareAltOutlined, SendOutlined} from '@ant-design/icons';
import Camera from "../../assets/icon/Camera";

function BlogNavLink(props) {
    return (
        <div className={["menusItem"].join(' ')}>
            <NavLink className="menuBtn" to={props.link}>
                {props.icon}&nbsp;&nbsp;{props.name}
            </NavLink>
        </div>
    )
}

/**
 * 顶部导航栏
 * @param props
 * @constructor
 */
function TopNavBar(props) {
    const [navClass, setnavClass] = useState("navColorWhite") // black是主要主题, white用于不遮挡banner
    const [show, setshow] = useState("navBarShow")

    // 当页面向下滚动时, 将标题栏字体修改为黑色, 同时增加背景色
    useEffect(() => {
        let position = 0.0
        const timer2 = setInterval(() => {
            if (window.top.scrollY !== 0) setnavClass("navColorBlack")
            else setnavClass("navColorWhite")

            if (window.top.scrollY > position) setshow("navBarHide")
            else if (window.top.scrollY < position) setshow("navBarShow")

            position = window.top.scrollY
        }, 100)

        return () => {
            clearInterval(timer2)
        }
    }, [])

    return (
        <div className={["TopNavBar", navClass, show].join(' ')}>
            <div className={["container"].join(' ')}>

                {/*左侧博客名字*/}
                <div className={["floatLeft"].join(' ')}>
                    <NavLink to={"/"} className={["title"].join(' ')}>{props.blogInfo.websiteConfig.websiteAuthor}</NavLink>
                </div>

                {/*右侧主要信息*/}
                <div className={["floatRight", "topRouter"].join(' ')}>
                    <div className={["menusItem"].join(' ')}>
                        <a className="menuBtn" onClick={props.showSearch}>
                            <Camera size="14" fill="#333"/> &nbsp;&nbsp;搜索
                        </a>
                    </div>
                    <BlogNavLink link={"/"} icon={<HomeOutlined />} name={"主页"} />
                    <BlogNavLink link={"/archives"} icon={<ContainerOutlined />} name={"归档"}/>
                    <BlogNavLink link={"/categories"} icon={<AppstoreOutlined />} name={"分类"}/>
                    <BlogNavLink link={"/tags"} icon={<TagsOutlined />} name={"标签"}/>
                    <BlogNavLink link={"/albums"} icon={<CameraOutlined />} name={"相册"}/>
                    <BlogNavLink link={"/talks"} icon={<MessageOutlined />} name={"说说"}/>
                    <BlogNavLink link={"/links"} icon={<ShareAltOutlined />} name={"友链"}/>
                    <BlogNavLink link={"/about"} icon={<SendOutlined />} name={"关于"}/>
                    <BlogNavLink link={"/message"} icon={<CommentOutlined />} name={"留言"}/>

                    {/*登录之后显示为用户头像*/}
                    {
                        props.avater === undefined ? <div className={["menusItem"].join(' ')}>
                            <a className="menuBtn" onClick={props.showLogin}>
                                <UserOutlined />&nbsp;&nbsp;登录
                            </a>
                        </div> : <div className={["menusItem"].join(' ')}>
                            <img src={props.userInfo.avatar} alt={""} style={{width: "30px", borderRadius: "50%", margin: "0 10px 0 10px"}}/>
                        </div>

                    }
                </div>
            </div>

        </div>
    );
}

const mapStateToProps = (state:any) => {
    return {
        blogInfo: state.BlogInfo.blogInfo,
        userInfo: state.UserInfo.userInfo
    }
}

const mapDispatchToProps = {
    showSearch() {
        return showSearch()
    },
    showLogin() {
        return showLogin()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNavBar);