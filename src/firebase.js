import * as firebase from "firebase";

firebase.initializeApp({
    apiKey: "AIzaSyABr6OCs7qhg1z6KdBOpAThbuNcl3sXD7Q",
    authDomain: "auth-e5866.firebaseapp.com",
    projectId: "auth-e5866",
    storageBucket: "auth-e5866.appspot.com",
    messagingSenderId: "554460553632",
    appId: "1:554460553632:web:1899eb62107bca6607c4c5",
    measurementId: "G-KPBW9K7NYC",
});
const settings = { timestampsInSnapshots: true };

firebase.firestore().settings(settings);

export default firebase;


  