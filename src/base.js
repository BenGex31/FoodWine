import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAPM1TUnCRgwcrEBCwZYYl_c4uPz9iCIs4",
    authDomain: "foodwine-aeba8.firebaseapp.com",
    databaseURL: "https://foodwine-aeba8-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "foodwine-aeba8",
    storageBucket: "foodwine-aeba8.appspot.com",
    messagingSenderId: "211883774194",
    appId: "1:211883774194:web:d51eef3e60332bf0da406b",
    measurementId: "G-CLGDK5LMNK"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base