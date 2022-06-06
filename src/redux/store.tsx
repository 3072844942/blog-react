import {configureStore} from "@reduxjs/toolkit";
import reactThunk from 'redux-thunk'
import reducer from '../reducer'
import logger from 'redux-logger'
import {persistStore} from "redux-persist";

const preloadedState = {
    BlogInfo: {
        blogInfo: null, // 博客信息
        isLoading: true,
        userInfo: null, // 用户信息
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password"),
        isRemember: localStorage.getItem("isRemember"),
        showSearch: false,
        showLogin: false,
        intro: "" // 主页一言
    },
    // ArticleInfo: {
    //
    // },
    // UserInfo: {
    //
    // }
}

const Store = configureStore({
    reducer,
    middleware: [logger, reactThunk],
    preloadedState
})

const persistor = persistStore(Store)

export {Store, persistor}