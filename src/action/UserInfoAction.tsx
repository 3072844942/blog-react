import axios from "axios";

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
                payload: {
                    userInfo: res.data.data
                }
            })
        })
    }
}

export {getUserInfo}