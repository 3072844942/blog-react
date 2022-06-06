import * as React from 'react';

/**
 * 页面的主要部分, 通过single和double来确定是否有侧边栏
 * @param props
 * @constructor
 */
function Single(props) {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default Single;