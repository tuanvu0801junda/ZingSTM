function reducerMusicToolBar(state = 0, action) {
    switch (action.type) {
        case "UPDATE_PLAYLIST":
            state = action.data;
            return state;

        case "ADD_SONG":
            state = action.data;
            return state;

        default:
            return state;
    }
}

export default reducerMusicToolBar