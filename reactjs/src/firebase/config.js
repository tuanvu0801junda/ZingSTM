import firebase from 'firebase/app';
import 'firebase/storage'; //new line

const firebaseConfig = {
    apiKey: "AIzaSyC3ptomFhTMs99pIQPh5k_lDfTy0FW2n_4",
    authDomain: "zingstm-645aa.firebaseapp.com",
    projectId: "zingstm-645aa",
    storageBucket: "zingstm-645aa.appspot.com",
    messagingSenderId: "44398366938",
    appId: "1:44398366938:web:cd8fc11897305da82515e3",
    measurementId: "G-DT8VP4X3GE"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export {storage, firebase as default};