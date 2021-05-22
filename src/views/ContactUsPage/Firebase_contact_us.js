import firebase from 'firebase'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyD_0IbCEIJWeoj2ehDszOfHU16Ry_7ztYU",
    authDomain: "contact-b5ce5.firebaseapp.com",
    projectId: "contact-b5ce5",
    storageBucket: "contact-b5ce5.appspot.com",
    messagingSenderId: "608479711682",
    appId: "1:608479711682:web:f02c82cec3b786f04d465b",
    measurementId: "G-6B6BZNFP31"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

var db =firebaseConfig.firestore();

export { db };