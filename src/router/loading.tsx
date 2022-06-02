import * as React from 'react'
import * as Loadable from 'react-loadable';
import {Spin} from "antd";

const Lading = () => (
    <div>
        <Spin size={"large"} />
        loading
    </div>
)

export default (loader: any,loading = Lading)=>{
    return Loadable({
        loader: loader,
        loading: loading
    });
}
