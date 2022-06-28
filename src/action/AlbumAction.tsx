import axios from "axios";

const getAlbums = () => {
    return (dispatch, getState) => {
        axios({
            url: "/api/photos/albums",
            method: "get"
        }).then(res => {
            dispatch({
                type: "getAlbums",
                payload: {
                    data: res.data.data
                }
            })
        }).then(err => {

        })
    }
}

export {getAlbums}