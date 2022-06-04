import * as React from 'react';
import Style from './NotFound.module.scss'
import JPG404 from '../../assets/img/404.jpg'

function NotFound() {
    return (
        <div className={Style.box}>
            <img src={JPG404} alt={"asd"}/>
        </div>
    );
}

export default NotFound;