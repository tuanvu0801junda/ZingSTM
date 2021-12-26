export async function getDurationSong(mp3Url) {
    return new Promise(
        function (resolve, reject) {
            const au = document.createElement('audio');
            au.src = mp3Url;
            au.addEventListener('loadedmetadata',
                function complete() {
                    const duration = Math.ceil(au.duration)
                    const duration_minute = Math.floor(duration / 60)
                    const duration_second = duration - duration_minute * 60
                    let duration_Convert
                    if ((parseInt(duration_second, 10) + 1) >= 0 && (parseInt(duration_second, 10) + 1) < 10) {
                        duration_Convert = duration_minute + ":0" + duration_second
                    } else duration_Convert = duration_minute + ":" + duration_second
                    resolve(duration_Convert)
                },
                function error(err) {
                    console.log('error', err)
                    reject()
                }
            )
        }
    )
}