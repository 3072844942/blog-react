import axios from "axios";

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

export {getArticleInfo}