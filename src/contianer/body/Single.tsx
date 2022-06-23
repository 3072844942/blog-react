import * as React from 'react';

import './Single.scss'

/**
 * 页面的主要部分, 通过single和double来确定是否有侧边栏
 * @param props
 * @constructor
 */
function Single(props) {
    return (
        <div className={'Single'} style={{
            minHeight: '40px'
        }}>
            {props.children}
        </div>
    );
}

export default Single;