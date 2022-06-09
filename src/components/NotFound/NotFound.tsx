import * as React from 'react';
import './NotFound.scss'
import JPG404 from '../../assets/img/404.jpg'
import {NavLink} from "react-router-dom";

/**
 * 404页面
 * @constructor
 */
function NotFound() {
    return (
        <div className={'NotFound'}>
            <div className={'NotFoundBody'}>
                <div className={'font'}>
                    <div className={'title'}>404 Error</div>
                    <div className={'sorry'}> Sorry, we can’t seem to find what you’re looking for.</div>
                    <div className={'listTitle'}>You've landed on a URL that doesn't seem to exist on CSS-Tricks. Here's some options:</div>
                    <div className={'listBody'}>
                        <ul>
                            <li>If you think this is an error on our part, please&nbsp;
                                <a href={'http://wpa.qq.com/msgrd?v=3&uin=3072844942&site=qq&menu=yes'} target={'_blank'} rel="noreferrer">
                                    email us.
                                </a>
                            </li>
                            <li>You could try a search up ↗️ there in the header, that should turn up whatever you were looking for.</li>
                            <li>If you'd like to just browse, head over to the <NavLink to={'/'}>articles page.</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className={'img'}>
                    <img src={JPG404} alt={""} style={{width: "100%"}}/>
                </div>
            </div>
        </div>
    );
}

export default NotFound;