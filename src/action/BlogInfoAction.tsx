import axios from "axios";

const getBlogInfo = () => {
    return (dispatch) => {
        axios({
            url: "/api",
            method: "get"
        }).then(res => {
            dispatch({
                type: "getBlogInfo",
                payload: res.data.data
            })
        })
    }
}

const getUserInfo = (username, password) => {
    return (dispatch) => {
        axios({
            url: "/api/login",
            method: "post",
            params: {
                username: username,
                password: password
            }
        }).then(res => {
            dispatch({
                type: "getUserInfo",
                payload: res.data.data
            })
        })
    }
}

const getIntro = () => {
    return (dispatch) => {
        fetch("https://v1.hitokoto.cn/")
            .then(res => {
                return res.json();
            })
            .then(( hitokoto:any ) => {
                dispatch({
                    type: "getIntro",
                    payload: hitokoto
                })
            });
    }
}

export {getBlogInfo, getUserInfo, getIntro}
