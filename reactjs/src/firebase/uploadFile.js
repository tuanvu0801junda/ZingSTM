import {storage} from "./config";
import firebase from "firebase/app";

function uploadAvatar(image) {
    var avatarURL;
    if(image == null){
      console.log("Image is null");
      return;
    }

    var storageRef = storage.ref();
    var uploadTask = storageRef.child(`/Images/AvatarImages/${image.name}`).put(image);

    uploadTask.on('state_changed',
        (snapshot) => {
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');

            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;

                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;

                default:
                    console.log('Default Situation: Unknown');
            }
        },

        (error) => {
            // Handle unsuccessful uploads
        },

        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                avatarURL = url;
                console.log(url);
                console.log(avatarURL);
              });
        }
    );

    return avatarURL;
}

export default uploadAvatar;
