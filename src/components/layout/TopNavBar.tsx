import * as React from 'react';
import {NavLink} from "react-router-dom";

function TopNavBar() {
    return (
        <div>
            顶部
            <ul>
                    <li><NavLink to={"/talk"}>说说</NavLink></li>
                    <li><NavLink to={"/"}>主页</NavLink></li>
                    <li><NavLink to={"/archive"}>归档</NavLink></li>
                    <li><NavLink to={"/album"}>相册</NavLink></li>
            </ul>
        </div>
    );
}

export default TopNavBar;