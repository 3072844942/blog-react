import {configureStore} from "@reduxjs/toolkit";
import reactThunk from 'redux-thunk'
import reducer from '../reducer'
import logger from 'redux-logger'
import {persistStore} from "redux-persist";

const preloadedState = {
    BlogInfo: {
        blogInfo: {}, // 博客信息
        isLoading: true,
        showSearch: false,
        showLogin: false,
        intro: "", // 主页一言
        talks: []
    },
    ArticleInfo: {
        articleInfo: [], // 主页文章列表
        current: 1,
    },
    UserInfo: {
        userInfo: {}, // 用户信息
        username: "",
        password: "",
        isRemember: false,
    }
}

const Store = configureStore({
    reducer,
    middleware: [logger, reactThunk],
    preloadedState
})

const persistor = persistStore(Store)

export {Store, persistor}