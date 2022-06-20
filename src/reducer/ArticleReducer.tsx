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
        case "getArchiveInfo":
            for (let i = 0; i < newState.archiveInfo.length; i ++)
                if (newState.archiveInfo[i].id === action.payload.archiveInfo[0].id)
                    return {...newState}
            newState.archiveInfo = [...newState.archiveInfo, ...action.payload.archiveInfo]
            newState.archiveCurrent = parseInt(String((newState.archiveInfo.length + 9) / 10)) + 1
            newState.articleCount = action.payload.articleCount
            return newState
        case "getCategories":
            newState.categoriesList = action.payload.recordList
            newState.categoriesCount = action.payload.count
            return newState
        case "getTags":
            newState.tagsList = action.payload.recordList
            newState.tagsCount = action.payload.count
            return newState
        default:
            return {...preState}
    }
}

export default ArticleReducer