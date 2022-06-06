import * as React from 'react';

import './HomeBanner.scss'
import {connect} from "react-redux";
import {useEffect} from "react";
import {getIntro} from "../../action/BlogInfoAction";
import Typewriter from "../../helper/Typewriter";
import '../../assets/css/iconFont.css'

/**
 * 主页大图
 * @param props
 * @constructor
 */
function HomeBanner(props) {
    useEffect(() => {
        props.getIntro()
    }, [])

    return (
        <div className={["HomeBanner"].join(' ')} style={{background: 'url(' + props.pageCover + ') center center / cover no-repeat',}}>  {/*背景图片*/}
            <div className={"homeDiv"}>
                {/*标题*/}
                <div className={["homeTitle"].join(' ')}>
                    {props.websiteName}
                </div>
                {/*一言, 利用打字机效果*/}
                <div className={["homeIntro"].join(' ')}>
                    <Typewriter srcString={props.intro.hitokoto + "  -  " + props.intro.creator}></Typewriter>
                </div>

                {/*不断运动的向下箭头, 点击后滚动一屏*/}
                <div className="scrollDown" onClick={() => {
                    window.scrollTo({
                        behavior: "smooth",
                        top: document.documentElement.clientHeight
                    });
                }}>
                    <svg className="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" >
                        <path
                            d="M512 729.86624c-13.70112 0-27.40224-5.23264-37.84704-15.6672l-328.69376-328.704c-20.91008-20.91008-20.91008-54.80448 0-75.70432 20.89984-20.89984 54.79424-20.89984 75.70432 0L512 600.63744l290.83648-290.83648c20.91008-20.89984 54.80448-20.89984 75.70432 0 20.91008 20.89984 20.91008 54.79424 0 75.70432l-328.69376 328.704C539.40224 724.64384 525.70112 729.86624 512 729.86624z"
                            fill="#ffffff"></path>
                    </svg>
                    <div style={{visibility: "hidden"}}>
                        scrollDown {/*这里存在才能使箭头显现, 不明白为什么, glyph不太会*/}
                    </div>

                    {/*<i className="iconfont iconpaint" style={{color: "white"}}/> 向下*/}
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state:any) => {
    return {
        intro: state.BlogInfo.intro
    }
}

const mapDispatchToProps = {
    getIntro() {
        return getIntro();
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeBanner);