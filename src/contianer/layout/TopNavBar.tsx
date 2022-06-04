import * as React from 'react';
import {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import Store from "../../redux/store";

import './TopNavBar.scss'

function TopNavBar() {
    const [blogTitle, setblogTitle] = useState(null)
    const [navClass, setnavClass] = useState("navColorWhite") // black是主要主题, white用于不遮挡banner
    const [show, setshow] = useState("navBarShow")

    // 从store中读取网站标题
    useEffect(() => {
        const unSubscribe = Store.subscribe(() => {
            setblogTitle(Store.getState().BlogInfo.blogInfo.websiteConfig.websiteAuthor)
        })

        return () => {
            unSubscribe()
        }
    }, [])

    // 当页面向下滚动时, 将标题栏字体修改为黑色, 同时增加背景色
    useEffect(() => {
        let position = 0.0
        const timer2 = setInterval(() => {
            if (window.top.scrollY !== 0) setnavClass("navColorBlack")
            else setnavClass("navColorWhite")

            console.log(window.top.scrollY, position)
            if (window.top.scrollY > position) setshow("navBarHide")
            else if (window.top.scrollY < position) setshow("navBarShow")

            position = window.top.scrollY
        }, 100)

        return () => {
            // clearInterval(timer2)
        }
    }, [])

    return (
        <div className={["TopNavBar", navClass, show].join(' ')}>
            <div className={["container"].join(' ')}>
                <div className={["floatLeft"].join(' ')}>
                    <NavLink to={"/"} className={["title"].join(' ')}>{blogTitle}</NavLink>
                </div>
                <div className={["floatRight"].join(' ')}>
                    <NavLink to={"/"} className={"title"}>{blogTitle}</NavLink>
                </div>
            </div>

        </div>
    );
}

export default TopNavBar;