import * as React from 'react';
import './App.scss';
import TopNavBar from "./contianer/layout/TopNavBar";
import RouterView from "./router/RouterView";
import Footer from "./contianer/layout/Footer";
import Menu from "./contianer/menu/Menu";
import Music from "./contianer/music/Music"
import {useEffect, useState} from "react";
import Store from "./redux/store";

import {getBlogInfo, getUserInfo} from './action/BlogInfoAction'
import Loading from "./components/loading/Loading";
import {connect} from "react-redux";
import Login from "./contianer/login/Login";
import Search from "./contianer/search/Search";

function App(props) {

    // 这里在创建时获取信息
    useEffect(() => {
        props.getBlogInfo()
        if (Store.getState().BlogInfo.isRemember === true)
            props.login()
    }, [])

    return (
        <div>
            {
                props.isLoading === true ? <Loading></Loading> : <div>
                    {/*顶部导航栏*/}
                    <TopNavBar></TopNavBar>
                    {/*内容*/}
                    <RouterView></RouterView>
                    {props.showLogin && <Login></Login>}
                    {props.showSearch && <Search></Search>}
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

const mapStateToProps = (state: any) => {
    return {
        isLoading: state.BlogInfo.isLoading,
        showSearch: state.BlogInfo.showSearch,
        showLogin: state.BlogInfo.showLogin
    }
}

const mapDispatchProps = {
    login() {
        return getUserInfo(Store.getState().BlogInfo.username,
            Store.getState().BlogInfo.password
        )
    },

    getBlogInfo() {
        return getBlogInfo()
    }
}

export default connect(mapStateToProps, mapDispatchProps)(App)
