import * as React from 'react';

function HomeBanner(props) {
    return (
        <div  style={{width: "100vw", height: "100vh", overflow: "hidden"}}>
            <img src={props.pageCover} style={{width: "100%"}}/>
        </div>
    );
}

export default HomeBanner;