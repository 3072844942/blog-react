import * as React from 'react';
import {
    QqCircleFilled, GithubFilled, DropboxOutlined
} from '@ant-design/icons';
import './AuthorInfo.scss'
import {NavLink} from "react-router-dom";
import toast from "../../helper/toast";
import {ArrayIndexOf} from "../../helper/Function";

/**
 * 作者信息, 主页左侧的
 * @param props
 * @constructor
 */
function AuthorInfo(props) {
    return (
        <div className={"AuthorInfo"}>
            {/*这里是头像, 名字和简介*/}
            <div className={'info'}>
                <div className={'avatar'}>
                    <img src={props.websiteConfig.websiteAvatar} alt={""}/>
                </div>
                <div className={'author'}>
                    {props.websiteConfig.websiteAuthor}
                </div>
                <div className={'intro'}>
                    {props.websiteConfig.websiteIntro}
                </div>
            </div>

            {/*文章数量统计*/}
            <div className={'count'}>
                <div className={'countData'}>
                    <NavLink to={'/archives'}>
                        <div className={'title'}>文章</div>
                        <div className={'number'}>{props.articleCount}</div>
                    </NavLink>
                </div>
                <div className={'countData'}>
                    <NavLink to={'/categories'}>
                        <div className={'title'}>分类</div>
                        <div className={'number'}>{props.categoryCount}</div>
                    </NavLink>
                </div>
                <div className={'countData'}>
                    <NavLink to={'/tags'}>
                        <div className={'title'}>标签</div>
                        <div className={'number'}>{props.tagCount}</div>
                    </NavLink>
                </div>
            </div>

            {/*这里有一个小按钮, 点击会推送消息*/}
            <div className={'clickButton'}>
                <button className={'button'} onClick={() => {
                    toast()
                }}>cancanneed
                </button>
            </div>

            {/*社交信息, qq, github, bilibili. 后端接口还是gitee  等之后再改*/}
            <div className={'social'}>
                {
                    ArrayIndexOf(props.websiteConfig.socialUrlList, 'qq') && <div className={'socialItem'}>
                        <a href={'http://wpa.qq.com/msgrd?v=3&uin=' + props.websiteConfig.qq + '&site=qq&menu=yes'} target={"_blank"} rel="noreferrer">
                            <QqCircleFilled style={{fontSize: "30px"}}/>
                        </a>
                    </div>
                }
                {
                    ArrayIndexOf(props.websiteConfig.socialUrlList, 'github') && <div className={'socialItem'}>
                        <a href={props.websiteConfig.github} target={"_blank"} rel="noreferrer">
                            <GithubFilled style={{fontSize: "30px"}}/>
                        </a>
                    </div>
                }
                {
                    ArrayIndexOf(props.websiteConfig.socialUrlList, 'gitee') && <div className={'socialItem'}>
                        <a href={props.websiteConfig.gitee} target={"_blank"} rel="noreferrer">
                            <DropboxOutlined style={{fontSize: "30px"}}/>
                        </a>
                    </div>
                }
            </div>
        </div>
    );
}

export default AuthorInfo;