const TalkReducer = (preState, action) => {
    const newState = {...preState}
    switch (action.type) {
        case "getTalks":
            // 这里有大问题
            // 这里是防止严格模式下的多次调用问题, 或者在其他情况下也会使用
            for (let i = 0; i < newState.talkList.length; i ++)
                if (newState.talkList[i].id === action.payload.recordList[0].id)
                    return {...newState}
            newState.count += action.payload.count
            newState.talkList = [...action.payload.recordList, ...newState.talkList]
            newState.current = parseInt(String((newState.talkList.length + 9) / 10)) + 1
            return newState
        default:
            return {...preState}
    }
}

export default TalkReducer