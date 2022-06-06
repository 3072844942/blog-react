import * as React from 'react';
import {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";

import './TopNavBar.scss'
import '../../assets/css/iconFont.css'
import {connect} from "react-redux";
import {showLogin, showSearch} from "../../action/moduleAcion";

function BlogNavLink(props) {
    return (
        <div className={["menusItem"].join(' ')}>
            <NavLink className="menuBtn" to={props.link}>
                <i className={["iconfont", props.icon].join(' ')} /> {props.name}
            </NavLink>
        </div>
    )
}

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
                <div className={["floatLeft"].join(' ')}>
                    <NavLink to={"/"} className={["title"].join(' ')}>{props.blogInfo.websiteConfig.websiteAuthor}</NavLink>
                </div>
                <div className={["floatRight", "topRouter"].join(' ')}>
                    <div className={["menusItem"].join(' ')}>
                        <a className="menuBtn" onClick={props.showSearch}>
                            <i className="iconfont iconsousuo" /> 搜索
                        </a>
                    </div>
                    <BlogNavLink link={"/"} icon={"iconzhuye"} name={"主页"} />
                    <BlogNavLink link={"/archives"} icon={"iconguidang"} name={"归档"}/>
                    <BlogNavLink link={"/categories"} icon={"iconfenlei"} name={"分类"}/>
                    <BlogNavLink link={"/tags"} icon={"iconbiaoqian"} name={"标签"}/>
                    <BlogNavLink link={"/albums"} icon={"iconxiangce1"} name={"相册"}/>
                    <BlogNavLink link={"/talks"} icon={"iconpinglun"} name={"说说"}/>
                    <BlogNavLink link={"/links"} icon={"iconlianjie"} name={"友链"}/>
                    <BlogNavLink link={"/about"} icon={"iconzhifeiji"} name={"关于"}/>
                    <BlogNavLink link={"/message"} icon={"iconpinglunzu"} name={"留言"}/>

                    {
                        props.avater === undefined ? <div className={["menusItem"].join(' ')}>
                            <a className="menuBtn" onClick={props.showLogin}>
                                <i className="iconfont icondenglu" /> 登录
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