const UserReducer = (preState, action) => {
    const newState = {...preState}
    switch (action.type) {
        case "getUserInfo":
            newState.userInfo = action.payload.userInfo
            return newState
        default:
            return {...preState}
    }
}

export default UserReducer