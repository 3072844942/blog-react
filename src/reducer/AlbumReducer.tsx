const AlbumReducer = (preState, action) => {
    const newState = {...preState}
    switch (action.type) {
        case 'getAlbums':
            newState.albumList = action.payload.data
            return newState
        default:
            return {...preState}
    }
}

export default AlbumReducer