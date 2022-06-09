import * as React from 'react';
import './App.scss';
import TopNavBar from "./contianer/layout/TopNavBar";
import RouterView from "./router/RouterView";
import Footer from "./contianer/layout/Footer";
import Menu from "./contianer/menu/Menu";
import Music from "./contianer/music/Music"
import {useEffect} from "react";
import {Store} from "./redux/store";

import {getBlogInfo} from './action/BlogInfoAction'
import {getUserInfo} from "./action/UserInfoAction";
import Loading from "./components/loading/Loading";
import {connect} from "react-redux";
import Login from "./contianer/login/Login";
import Search from "./contianer/search/Search";
import axios from "axios";

function App(props) {

    // 这里在创建时获取信息
    useEffect(() => {
        // 800ms后再运行, 加载一会loading界面
        setTimeout(() => {
            // 获取博客信息
            props.getBlogInfo()
            // 上传访客信息
            axios.post('/api/report')
            // 如果用户选择了下次自动登录
            if (Store.getState().BlogInfo.isRemember === true)
                props.login()
        }, 800)
    }, [])

    return (
        <div>
            {
                props.isLoading === true ? <Loading></Loading> : <div>
                    {/*顶部导航栏*/}
                    <TopNavBar></TopNavBar>
                    {/*内容*/}
                    <RouterView></RouterView>
                    {/*登录框*/}
                    {props.showLogin && <Login></Login>}
                    {/*搜索框*/}
                    {props.showSearch && <Search></Search>}
                    {/*底部菜单*/}
                    <Menu></Menu>
                    {/*音乐盒*/}
                    <Music></Music>
                    {/*底部*/}
                    <Footer></Footer>
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
