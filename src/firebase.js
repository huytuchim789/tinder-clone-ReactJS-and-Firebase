// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
require("firebase/firestore");
const firebaseConfig = {
  apiKey: "AIzaSyD8McVdju2BNQguzGqBSUUBI824DPcR7yQ",
  authDomain: "tinder-clone-7c712.firebaseapp.com",
  projectId: "tinder-clone-7c712",
  storageBucket: "tinder-clone-7c712.appspot.com",
  messagingSenderId: "1010242782664",
  appId: "1:1010242782664:web:eb649df3cb8c427929ecfd",
  measurementId: "G-51V7YJGZN6",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();
export default database;
