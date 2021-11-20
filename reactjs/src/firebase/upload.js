import React from "react";
import {useState} from 'react';
import {storage} from "./config";
import firebase from "firebase/app";

function SendImageAndMp3(){
  const [image , setImage] = useState('');
  const [mp3, setMp3] = useState('');
  const upload = () => {
    if(image == null){
      console.log("Image is null");
      return;
    } else if (mp3 == null){
      console.log("(.mp3) file is null");
      return;
    }

  //console.log(storage.ref());
  var storageRef = storage.ref();
  var uploadTask = storageRef.child(`/Images/SongImages/${image.name}`).put(image);
      
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
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('Image available at', downloadURL);
      });
    });

    var uploadMp3 = storageRef.child(`/Songs/${mp3.name}`).put(mp3);
      
    uploadMp3.on('state_changed', 
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
        uploadMp3.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('Mp3 file available at', downloadURL);
        });
      });
    
  }

    // return (
    //   <div>
    //     <div>
    //       <center>
    //         <h5>Input new Song's image</h5>
    //         <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
    //         <br/><br/>
    //         <h5>Input new Song's .mp3 file</h5>
    //         <input type="file" onChange={(e)=>{setMp3(e.target.files[0])}}/>
    //         <br/>
    //         <button onClick={upload}>Upload</button>
    //       </center>
    //     </div>
    //   </div>
    // );
}

export default SendImageAndMp3;
