import firebase from 'firebase';

// initialize database

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAapb7rHWiFnCOS7O6p6-mxnm0RR4Pgybs",
    authDomain: "covid19-bharat.firebaseapp.com",
    databaseURL: "https://covid19-bharat.firebaseio.com",
    projectId: "covid19-bharat",
    storageBucket: "covid19-bharat.appspot.com",
    messagingSenderId: "436951244912",
    appId: "1:436951244912:web:63660d7b2cccf2ea0a14b5",
    measurementId: "G-7E4F2P37CY"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;