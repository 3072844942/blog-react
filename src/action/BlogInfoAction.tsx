import axios from "axios";

const getBlogInfo = () => {
    return (dispatch) => {
        axios({
            url: "/api",
            method: "get"
        }).then(res => {
            dispatch({
                type: "getBlogInfo",
                payload: {
                    blogInfo: res.data.data
                }
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
                    payload: {
                        hitokoto: hitokoto
                    }
                })
            });
    }
}

export {getBlogInfo, getIntro}
