import * as React from 'react';
import './App.scss';
import TopNavBar from "./contianer/layout/TopNavBar";
import RouterView from "./router/RouterView";
import Footer from "./contianer/layout/Footer";
import Menu from "./contianer/menu/Menu";
import Music from "./contianer/music/Music"
import {useEffect, useState} from "react";
import Store from "./redux/store";

import {getBlogInfo, getUserInfo} from './action/InfoAction'
import Loading from "./components/loading/Loading";
import axios from "axios";

function App() {
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        const usSubscribe = Store.subscribe(() => {
            setisLoading(Store.getState().BlogInfo.isLoading)
        })
        return () => {
            usSubscribe()
        }
    })

    // 这里在创建时获取信息, 显红不是有Bug
    useEffect(() => {
        Store.dispatch(getBlogInfo()) // 创建时即获取博客基础信息
        if (Store.getState().BlogInfo.isRemember === true) { // 如果存储中发现用户选择了记住密码
            Store.dispatch(
                getUserInfo(Store.getState().BlogInfo.username,
                    Store.getState().BlogInfo.password
                ))
        }
    })

    return (
        <div>
            {
                isLoading === true ? <Loading></Loading> : <div>
                    {/*顶部导航栏*/}
                    <TopNavBar></TopNavBar>
                    {/*内容*/}
                    <RouterView></RouterView>
                    {/*底部*/}
                    <Footer></Footer>
                    {/*底部菜单*/}
                    <Menu></Menu>
                    {/*音乐盒*/}
                    <Music></Music>
                </div>
            }
        </div>
    );
}

export default App;
