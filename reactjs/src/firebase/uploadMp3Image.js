import { storage } from "./config";


async function uploadSongImage(image) {
    return new Promise(
        function (resolve, reject) {
            const storageRef = storage.ref();
            const uploadTask = storageRef.child(`/Images/SongImages/${image.name}`).put(image);

            uploadTask.on('state_changed',
                function (snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    console.log('Upload is ' + progress + '% done')
                },
                function error(err) {
                    console.log('error', err)
                    reject()
                },
                function complete() {
                    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        resolve(downloadURL)
                    })
                }
            )
        }
    )
}

async function uploadSongMp3(mp3) {
    return new Promise(
        function (resolve, reject) {
            const storageRef = storage.ref();
            const uploadTask = storageRef.child(`/Songs/${mp3.name}`).put(mp3);

            uploadTask.on('state_changed',
                function (snapshot) {
                    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    console.log('Upload is ' + progress + '% done')
                },
                function error(err) {
                    console.log('error', err)
                    reject()
                },
                function complete() {
                    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        resolve(downloadURL)
                    })
                }
            )
        }
    )
}

export default { uploadSongImage, uploadSongMp3 };
