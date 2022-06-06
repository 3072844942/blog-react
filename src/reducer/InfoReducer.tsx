const infoReducer = (preState, action) => {
    const newState = {...preState}
    switch (action.type) {
        case "getBlogInfo":
            newState.isLoading = false
            newState.blogInfo = action.payload.blogInfo
            return newState
        case "showLogin":
            newState.showLogin = true
            return newState
        case "showSearch":
            newState.showSearch = true
            return newState
        case "getIntro":
            newState.intro = action.payload.hitokoto
            return newState
        default:
            return {...preState}
    }
}

export default infoReducer