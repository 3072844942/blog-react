import axios from "axios";

const getTalks = () => {
    return (dispatch, getState) => {
        axios({
            url: "/api/talks",
            method: "get",
            params: {
                current: getState().TalkInfo.current,
                size: 10
            }
        }).then(res => {
            dispatch({
                type: "getTalks",
                payload: {
                    count: res.data.data.count,
                    recordList: res.data.data.recordList
                }
            })
        })
    }
}

const likeTalk = (id) => {
    return (dispatch, getState) => {
        axios({
            url: "/api/talks/" + id + '/like',
            method: "post",
        }).then(res => {
            dispatch({
                type: "likeTalk"
            })
        })
    }
}

export {getTalks, likeTalk}