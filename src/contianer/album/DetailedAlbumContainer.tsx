import * as React from 'react';

import './DetailedAlbumContainer.scss'
import {NavLink} from "react-router-dom";

function DetailedAlbumContainer(props) {
    return (
        <div className={'DetailedAlbumContainer'}>
            <div className={'background'} style={{background: 'url(' + props.albumCover + ') center center / cover no-repeat'}}>
            </div>
            <NavLink to={'/album/' + props.id} className={'albumWrapper'}>
                <div className={'albumTitle'}>
                    {props.albumName}
                </div>
                <div className={'albumDesc'}>
                    &nbsp;&nbsp;{props.albumDesc}
                </div>
            </NavLink>
        </div>
    );
}

export default DetailedAlbumContainer;