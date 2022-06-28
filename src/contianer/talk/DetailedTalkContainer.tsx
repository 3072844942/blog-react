import * as React from 'react';
import {HeartOutlined} from '@ant-design/icons'
import 'antd/dist/antd.css'

import './DetailedTalkContainer.scss'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {likeTalk} from "../../action/TalkInfoAction";

function DetailedTalkContainer(props) {
    return (
        <NavLink to={'/talk/' + props.id}>
            <div className={'DetailedTalkContainer'}>
                <div className={'avatar'}>
                    <img src={props.avatar}></img>
                </div>
                <div className={'detailed'}>
                    <div className={'nickname'}>{props.nickname}</div>
                    <div className={'time'}>{props.createTime}</div>
                    <div className={'content'}>{props.content}</div>
                    <div className={'operation'}>
                        <div className={'likeOperation'}>
                            <HeartOutlined onClick={() => {
                                props.like(props.id)
                            }}/>
                            &nbsp;{props.likeCount === null ? 0 : props.likeCount}
                        </div>
                        <div className={'talkOperation'}>
                            <HeartOutlined />
                            &nbsp;{props.commentCount === null ? 0 : props.commentCount}
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

const mapDispatchToProps = {
    like(id) {
        return likeTalk(id);
    }
}

export default connect(null, mapDispatchToProps)(DetailedTalkContainer);