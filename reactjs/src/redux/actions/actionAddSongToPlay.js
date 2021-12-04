function actionAddSongToPlay(song) {
    const audioList = [
        song,
    ]
    return {
        type: "ADD_SONG",
        data: audioList,
    }
}

export default actionAddSongToPlay