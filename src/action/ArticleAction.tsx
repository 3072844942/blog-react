import axios from "axios";

/**
 * 获取主页文章内容
 */
const getArticleInfo = () => {
    return (dispatch, getState) => {
        axios({
            url: "/api/articles?current=" + getState().ArticleInfo.current,
            method: "get"
        }).then(res => {
            dispatch({
                type: "getArticleInfo",
                payload: {
                    articleInfo: res.data.data,
                }
            })
        }).then(err => {

        })
    }
}

/**
 * 获取归档文章内容
 */
const getArchiveInfo = () => {
    return (dispatch, getState) => {
        axios({
            url: "/api/articles/archives?current=" + getState().ArticleInfo.archiveCurrent,
            method: "get"
        }).then(res => {
            dispatch({
                type: "getArchiveInfo",
                payload: {
                    archiveInfo: res.data.data.recordList,
                    articleCount: res.data.data.count,
                }
            })
        }).then(err => {

        })
    }
}

/**
 * 获取分类内容
 */
const getCategories = () => {
    return (dispatch, getState) => {
        axios({
            url: "/api/categories",
            method: "get"
        }).then(res => {
            dispatch({
                type: "getCategories",
                payload: {
                    recordList: res.data.data.recordList,
                    count: res.data.data.count,
                }
            })
        }).then(err => {

        })
    }
}

/**
 * 获取标签内容
 */
const getTags = () => {
    return (dispatch, getState) => {
        axios({
            url: "/api/tags",
            method: "get"
        }).then(res => {
            dispatch({
                type: "getTags",
                payload: {
                    recordList: res.data.data.recordList,
                    count: res.data.data.count,
                }
            })
        }).then(err => {

        })
    }
}

export {getArticleInfo, getArchiveInfo, getCategories, getTags}