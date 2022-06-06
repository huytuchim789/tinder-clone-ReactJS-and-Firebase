// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
require('firebase/firestore')
const firebaseConfig = {
  apiKey: 'AIzaSyDw9NKVZXRiGb1T2uWOOdf2lvedc64ZR_0',
  authDomain: 'tinder-d0e9d.firebaseapp.com',
  projectId: 'tinder-d0e9d',
  storageBucket: 'tinder-d0e9d.appspot.com',
  messagingSenderId: '31622771433',
  appId: '1:31622771433:web:89ca13ce0408390769b678',
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const database = firebaseApp.firestore()
export default database
