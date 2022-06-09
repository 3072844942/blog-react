import * as React from 'react';

import './InfoContainer.scss'

/**
 * 对于主页左侧的小组件封装
 * @param props
 * @constructor
 */
function InfoContainer(props) {
    return (
        <div className={'InfoContainer'}>
            <div className={'title'}>{props.icon}&nbsp;&nbsp;{props.title}</div>
            <div className={'body'}>
                {props.children}
            </div>
        </div>
    );
}

export default InfoContainer;