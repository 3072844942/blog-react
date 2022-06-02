import axios from "axios";
//获取歌词
export const getWords = (id, cookie) => {
    return axios.post(`https://app1231.acapp.acwing.com.cn/api/lyric?id=${id}&cookie=${cookie}`);
    // return axios({
    //   url: 'https://app1231.acapp.acwing.com.cn/api/lyric',
    //   method: "post",
    //   data: {
    //     id: {id},
    //     cookie: {cookie}
    //   }
    // })
};
//获取歌曲详情
export const getMusicInfo = (id, cookie) => {
    return axios.post(`https://app1231.acapp.acwing.com.cn/api/song/detail?ids=${id}&cookie=${cookie}`);
    // return axios({
    //   url: 'https://app1231.acapp.acwing.com.cn/api/song/detail',
    //   method: "post",
    //   data: {
    //     id: {id},
    //     cookie: {cookie}
    //   }
    // })
};
//获取歌曲url
export const getMusicUrl = (id, cookie) => {
    return axios.post(`https://app1231.acapp.acwing.com.cn/api/song/url?id=${id}&cookie=${cookie}`);
    // return axios({
    //   url: 'https://app1231.acapp.acwing.com.cn/api/song/url',
    //   method: "post",
    //   data: {
    //     id: {id},
    //     cookie: {cookie}
    //   }
    // })
};
//获取热门歌曲
export const getHotMusic = (id, cookie) => {
    return axios.post(`https://app1231.acapp.acwing.com.cn/api/playlist/detail?id=${id}&cookie=${cookie}`);
    // return axios({
    //   url: 'https://app1231.acapp.acwing.com.cn/api/playlist/detail',
    //   method: "post",
    //   data: {
    //     id: {id},
    //     cookie: {cookie}
    //   }
    // })
};
//获取搜索建议
export const getSearchSuggest = (key, cookie) => {
    return axios.post(`https://app1231.acapp.acwing.com.cn/api/search/suggest?keywords=${key}&cookie=${cookie}`);
    // return axios({
    //   url: 'https://app1231.acapp.acwing.com.cn/api/search/suggest',
    //   method: "post",
    //   data: {
    //     keywords: {key},
    //     cookie: {cookie}
    //   }
    // })
};
//获取歌曲热门评论
export const getHotTalk = (id, cookie) => {
    return axios.post(`https://app1231.acapp.acwing.com.cn/api/comment/music?id=${id}&limit=3&cookie=${cookie}`);
    // return axios({
    //   url: 'https://app1231.acapp.acwing.com.cn/api/comment/music',
    //   method: "post",
    //   data: {
    //     id: {id},
    //     cookie: {cookie},
    //     limit: 3
    //   }
    // })
};
