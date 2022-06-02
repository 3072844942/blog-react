import * as React from 'react';
import {Route, Routes} from "react-router-dom";
import loading from "./loading";
import NotFound from "../views/NotFound/NotFound";

const RouterList: any[] = [
    {
        path: '/',
        component: loading(() => import('../views/home/Home')),
        meta: {
            title: '主页'
        }
    },
    {
        path: "/articles/:articleId",
        component: loading(() => import('../views/article/Article')),
        meta: {
            title: '文章详情'
        }
    },
    {
        path: "/archive",
        component: loading(() => import('../views/archive/Archive')),
        meta: {
            title: "归档"
        }
    },
    {
        path: "/album",
        component: loading(() => import('../views/album/Album')),
        meta: {
            title: "相册"
        }
    },
    {
        path: "/talk",
        component: loading(() => import('../views/talk/Talk')),
        meta: {
            title: "说说"
        }
    },
    {
        path: "/talk/:talkId",
        component: loading(() => import('../views/talk/TalkInfo')),
        meta: {
            title: "说说详情"
        }
    },
    {
        path: "/album/:albumId",
        component: loading(() => import('../views/album/Photo')),
        meta: {
            title: '相册详情'
        }
    },
    {
        path: "/tags",
        component: loading(() => import('../views/tag/Tag')),
        meta: {
            title: "标签"
        }
    },
    {
        path: "/categories",
        component: loading(() => import('../views/category/Category')),
        meta: {
            title: "分类"
        }
    },
    {
        path: "/categories/:categoryId",
        component: loading(() => import('../views/article/ArticleList'))
    },
    {
        path: "/tags/:tagId",
        component: loading(() => import('../views/article/ArticleList'))
    },
    {
        path: "/links",
        component: loading(() => import('../views/link/Link')),
        meta: {
            title: "友链列表"
        }
    },
    {
        path: "/about",
        component: loading(() => import('../views/about/About')),
        meta: {
            title: "关于我"
        }
    },
    {
        path: "/message",
        component: loading(() => import('../views/message/Message')),
        meta: {
            title: "留言板"
        }
    },
    {
        path: "/user",
        component: loading(() => import('../views/user/User')),
        meta: {
            title: "个人中心"
        }
    },
    {
        path: "/oauth/login/qq",
        component: loading(() => import('../components/login/OauthLogin'))
    },
    {
        path: "/oauth/login/weibo",
        component: loading(() => import('../components/login/OauthLogin'))
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