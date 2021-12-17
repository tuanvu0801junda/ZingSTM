function reducerUpdateSidebar(state = 0, action) {
    switch (action.type) {
        case "SIDEBAR_LOGIN":
            state = action.data;
            return state;
        default:
            return state;
    }
}

export default reducerUpdateSidebar;