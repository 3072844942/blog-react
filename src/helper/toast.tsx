import {notification} from "antd";
import {SmileOutlined} from "@ant-design/icons";
import * as React from "react";
import {ReactNode} from "react";

import 'antd/dist/antd.css'

/**
 * 通知提醒框
 * @param message 标题
 * @param description 描述
 * @param icon 图标, 默认使笑脸
 */
const toast = (message: string = "Hi Here!", description: string = "For the brave souls who get this far: You are the chosen ones,\n" +
"the valiant knights of programming who toil away, without rest,\n" +
"fixing our most awful code. To you, true saviors, kings of men,\n" +
"I say this: never gonna give you up, never gonna let you down,\n" +
"never gonna run around and desert you. Never gonna make you cry,\n" +
"never gonna say goodbye. Never gonna tell a lie and hurt you", icon: ReactNode = <SmileOutlined
    style={{color: '#108ee9'}}/>) => {
    notification.open({
        message,
        description,
        icon,
        placement: "topLeft",
    })
}

export default toast