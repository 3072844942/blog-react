import * as React from 'react';

import './Banner.scss'

interface Banner {
    pageCover: string,
    name: string
}

/**
 * 每个页面的小图
 * @param props
 * @constructor
 */
function Banner(props:Banner) {
    return (
        <div className={["Banner"].join(' ')} style={{background: 'url(' + props.pageCover + ') center center / cover no-repeat'}}>
            <h1 className={"BannerTitle"}>
                {props.name}
            </h1>
        </div>
    );
}

export default Banner;