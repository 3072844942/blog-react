import * as React from 'react';

import './Swiper.scss'
import {HomeOutlined} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import {Carousel} from 'antd';

import 'swiper/css';

/**
 * 说说轮播
 * @param props
 * @constructor
 */
function TalksSwiper(props) {
    return (
        <NavLink to={'/talks'}>
            <div className={'Swiper'}>
                <HomeOutlined/>
                <span className={'center'}>
                    <Carousel autoplay effect="fade">
                        {
                            props.talks.map(item=>(
                                // <Typewriter srcString={item}></Typewriter>
                                <span key={item}>{item}</span>
                            ))
                        }
                    </Carousel>
                </span>
                <HomeOutlined/>
            </div>
        </NavLink>
    );
}

export default TalksSwiper;