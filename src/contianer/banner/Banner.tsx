import * as React from 'react';

import './Banner.scss'

function Banner(props) {
    return (
        <div className={["Banner"].join(' ')} style={{background: 'url(' + props.pageCover + ') center center / cover no-repeat'}}>
            <h1 className={"BannerTitle"}>
                {props.name}
            </h1>
        </div>
    );
}

export default Banner;