const infoReducer = (preState, action) => {
    // const newState = {...preState}
    const newState = Object.assign({}, preState)
    switch (action.type) {
        case "getBlogInfo":
            newState.isLoading = false
            newState.blogInfo = action.payload
            return newState

        case "getUserInfo":
            newState.userInfo = action.payload
            return newState
        case "showLogin":
            newState.showLogin = true
            return newState
        case "showSearch":
            newState.showSearch = true
            return newState
        case "getIntro":
            newState.intro = action.payload
            return newState
        default:
            return {...preState}
    }
}

export default infoReducer