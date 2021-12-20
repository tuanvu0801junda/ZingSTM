export async function getDurationSong(mp3Url) {
    return new Promise(
        function (resolve, reject) {
            const au = document.createElement('audio');
            au.src = mp3Url;
            au.addEventListener('loadedmetadata',
                function () {
                    console.log("connect")
                    //Handle duration
                    // const duration = Math.ceil(au.duration);
                    // const duration_minute = Math.floor(duration / 60);
                    // const duration_second = duration - duration_minute * 60;
                    // const duration_Convert = duration_minute + ":" + duration_second;
                    // console.log("The duration of the song : " + duration_Convert);
                },
                function error(err) {
                    console.log('error', err)
                    reject()
                },
                function complete() {
                    const duration = Math.ceil(au.duration)
                    const duration_minute = Math.floor(duration / 60)
                    const duration_second = duration - duration_minute * 60
                    const duration_Convert = duration_minute + ":" + duration_second
                    console.log("The duration of the song : " + duration_Convert)
                    resolve(duration_Convert)
                }
            )
        }
    )
}