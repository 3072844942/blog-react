import * as React from 'react';

/**
 * 页面的主要部分, 通过single和double来确定是否有侧边栏
 * @param props 额外传入一个属性main = 'right' | 'left' 来确定左右宽度
 * @constructor
 */
function Double(props) {
    return (
        <div>
            <div className={[props.main === 'left'? 'main' : 'side'].join(' ')}>

            </div>
            <div className={[props.main === 'right'? 'main' : 'side'].join(' ')}>

            </div>
        </div>
    );
}

export default Double;