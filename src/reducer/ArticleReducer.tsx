const ArticleReducer = (preState, action) => {
    const newState = {...preState}
    switch (action.type) {
        case "getArticleInfo":
            // 这里有大问题

            // 这里是防止严格模式下的多次调用问题, 或者在其他情况下也会使用
            for (let i = 0; i < newState.articleInfo.length; i ++)
                if (newState.articleInfo[i].id === action.payload.articleInfo[0].id)
                    return {...newState}
            newState.articleInfo = [...newState.articleInfo, ...action.payload.articleInfo]
            // 下面这个很麻烦, 要利用文章数组的长度 向上取整, 获得下一次的标签
            newState.current = parseInt(String((newState.articleInfo.length + 9) / 10)) + 1
            return newState
        default:
            return {...preState}
    }
}

export default ArticleReducer