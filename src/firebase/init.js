import firebase from 'firebase'

import firestore from 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBHfLemjwQMbJwxZYweFiQ4YhDyRzjjhgE",
    authDomain: "simple-chat-1ecea.firebaseapp.com",
    databaseURL: "https://simple-chat-1ecea.firebaseio.com",
    projectId: "simple-chat-1ecea",
    storageBucket: "",
    messagingSenderId: "518032428373",
    appId: "1:518032428373:web:7308647c4644e18d"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  firebaseApp.firestore().settings({timestampsInSnapshots: true});

  export default firebaseApp.firestore()
