import * as React from 'react';
import {useEffect, useState} from "react";
import './Home.scss'
import store from "../../redux/store";
import Store from "../../redux/store";
import HomeBanner from "../../contianer/banner/HomeBanner";

function Home() {

    const [pageCover, setPageCover] = useState(null)

    useEffect(() => {
        const usSubscribe = store.subscribe(() => {
            Store.getState().BlogInfo.blogInfo.pageList.forEach(item => {
                if (item.pageLabel === "home") {
                    setPageCover(item.pageCover)
                    console.log("===", item.pageCover)
                }
            })
        })

        return () => {
            usSubscribe()
        }
    }, [])

    return (
        <div className={["Home"].join(' ')}>
            <HomeBanner pageCover={pageCover}></HomeBanner>
            主页
        </div>
    );
}

export default Home;