function actionUpdatePlaylist(audioList) {
    return {
        type: "UPDATE_PLAYLIST",
        data: audioList,
    }
}

export default actionUpdatePlaylist