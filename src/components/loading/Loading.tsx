import * as React from 'react';
import {useEffect} from "react";
import Store from "../../redux/store";
import {clearInterval} from "timers";

function Loading(props) {
    useEffect(() => {
        Store.subscribe(() => {})
    })

    useEffect(() => {
        let timer = setInterval(() => {
            // console.log(Store.getState().isLoading)
            // if (Store.getState().isLoading === false)
            //     window.location.reload()
        }, 1000)
        return () => {
            timer = null
        }
    })

    return (
        <div>
            加载中
        </div>
    );
}

export default Loading;