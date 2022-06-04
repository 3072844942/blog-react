import {configureStore} from "@reduxjs/toolkit";
import reactThunk from 'redux-thunk'
import reducer from '../reducer'
import logger from 'redux-logger'
const preloadedState = {
    BlogInfo: {
        blogInfo: null, // 博客信息
        isLoading: true,
        userInfo: null, // 用户信息
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password"),
        isRemember: localStorage.getItem("isRemember")
    }
}

const store = configureStore({
    reducer,
    middleware: [logger, reactThunk],
    preloadedState
})

export default store