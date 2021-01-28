import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCRZFpQX5cKd7GLgsEoZCd2xeQnpLVGdPc",
    authDomain: "booksanta-e9c2c.firebaseapp.com",
    projectId: "booksanta-e9c2c",
    storageBucket: "booksanta-e9c2c.appspot.com",
    messagingSenderId: "622405511788",
    appId: "1:622405511788:web:b0086267b9e8cbdae10649"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();