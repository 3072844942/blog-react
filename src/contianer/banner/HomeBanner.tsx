import * as React from 'react';

import './HomeBanner.scss'
import {connect} from "react-redux";
import {useEffect} from "react";
import {getIntro} from "../../action/BlogInfoAction";
import Typewriter from "../../helper/Typewriter";
import {DownOutlined} from '@ant-design/icons';

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
                    <DownOutlined style={{color: "white", fontSize: "50px"}}/>

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