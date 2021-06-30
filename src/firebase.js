import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA7MnHoSFZP-uk8Te-SUS9sxjPV8VgStw4",
    authDomain: "firechat-572e1.firebaseapp.com",
    projectId: "firechat-572e1",
    storageBucket: "firechat-572e1.appspot.com",
    messagingSenderId: "438416558815",
    appId: "1:438416558815:web:971880915c8be7e687376a",
    measurementId: "G-Y768XP9X97"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db,auth }