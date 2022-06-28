import {configureStore} from "@reduxjs/toolkit";
import reactThunk from 'redux-thunk'
import reducer from '../reducer'
import logger from 'redux-logger'
import {persistStore} from "redux-persist";

interface blogInfoInterface {
    articleCount: number,
    categoryCount: number,
    tagCount: number,
    viewsCount: string,
    websiteConfig: {
        websiteAvatar: string,
        websiteName: string,
        websiteAuthor: string,
        websiteIntro: string,
        websiteNotice: string,
        websiteCreateTime: string,
        websiteRecordNo: string,
        socialLoginList: [string],
        qq: string,
        github: string,
        gitee: string, // 这里想用bilibili, 修改了后端之后再改
        touristAvatar: string,
        userAvatar: string,
        isCommentReview: boolean,
        isMessageReview: boolean,
        isEmailNotice: boolean,
        isReward: boolean,
        wexinQRCode: string,
        alipayQRCode: string,
        isChatRoom: boolean,
        websocketUrl: string,
        isMusicPlayer: boolean
    },
    pageList: [{
        pageCover: string,
        id: number,
        pageName: string,
        pageLabel: string
    }]
}

interface articleInfoInterFace {
    id: number,
    articleCover: string,
    articleTitle: string,
    articleContent: string,
    createTime: string,
    isTop: boolean,
    type: number,
    categoryId: number,
    categoryName: string
    tagDTOList: [{
        id: number,
        tagName: string
    }]
}

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
        archiveInfo: [], // 归档文章列表
        archiveCurrent: 1,
        articleCount: 0, // 文章数量
        categoriesList: [], // 分类列表
        categoriesCount: 0,
        tagsList: [], // 标签列表
        tagsCount: 0,
    },
    UserInfo: {
        userInfo: {}, // 用户信息
        username: "",
        password: "",
        isRemember: false,
    },
    TalkInfo: {
        current: 1,
        count: 0,
        talkList: [] // 说说列表
    },
    AlbumInfo: {
        albumList: [] // 相册列表
    }
}

const Store = configureStore({
    reducer,
    middleware: [logger, reactThunk],
    preloadedState
})

const persistor = persistStore(Store)

export {Store, persistor, blogInfoInterface, articleInfoInterFace}