import * as React from 'react';
import {Route, Routes} from "react-router-dom";
import loading from "./loading";
import NotFound from "../components/NotFound/NotFound";

const RouterList: any[] = [
    {
        path: '/',
        component: loading(() => import('../components/home/Home')),
        meta: {
            title: '主页'
        }
    },
    {
        path: "/articles/:articleId",
        component: loading(() => import('../components/article/Article')),
        meta: {
            title: '文章详情'
        }
    },
    {
        path: "/archives",
        component: loading(() => import('../components/archive/Archive')),
        meta: {
            title: "归档"
        }
    },
    {
        path: "/albums",
        component: loading(() => import('../components/album/Album')),
        meta: {
            title: "相册"
        }
    },
    {
        path: "/talks",
        component: loading(() => import('../components/talk/Talk')),
        meta: {
            title: "说说"
        }
    },
    {
        path: "/talk/:talkId",
        component: loading(() => import('../components/talk/TalkInfo')),
        meta: {
            title: "说说详情"
        }
    },
    {
        path: "/album/:albumId",
        component: loading(() => import('../components/album/Photo')),
        meta: {
            title: '相册详情'
        }
    },
    {
        path: "/tags",
        component: loading(() => import('../components/tag/Tag')),
        meta: {
            title: "标签"
        }
    },
    {
        path: "/categories",
        component: loading(() => import('../components/category/Category')),
        meta: {
            title: "分类"
        }
    },
    {
        path: "/categories/:categoryId",
        component: loading(() => import('../components/article/ArticleList'))
    },
    {
        path: "/tags/:tagId",
        component: loading(() => import('../components/article/ArticleList'))
    },
    {
        path: "/links",
        component: loading(() => import('../components/link/Link')),
        meta: {
            title: "友链列表"
        }
    },
    {
        path: "/about",
        component: loading(() => import('../components/about/About')),
        meta: {
            title: "关于我"
        }
    },
    {
        path: "/message",
        component: loading(() => import('../components/message/Message')),
        meta: {
            title: "留言板"
        }
    },
    {
        path: "/user",
        component: loading(() => import('../components/user/User')),
        meta: {
            title: "个人中心"
        }
    },
    {
        path: "/oauth/login/qq",
        component: loading(() => import('../contianer/login/OauthLogin'))
    },
    {
        path: "/oauth/login/weibo",
        component: loading(() => import('../contianer/login/OauthLogin'))
    }
]

function RouterView() {
    return (
            <Routes>
                {
                    RouterList.map(item => (
                        <Route
                            key={item.path}
                            path={item.path}
                            element={<item.component/>}
                        ></Route>
                    ))
                }
                <Route path={"*"} element={<NotFound />}></Route>
            </Routes>

    );
}

export default RouterView;