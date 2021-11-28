function actionUpdatePlaylist(audioList) {
    console.log(audioList);
    return {
        type: "UPDATE_PLAYLIST",
        data: audioList,
    }
}

export default actionUpdatePlaylist