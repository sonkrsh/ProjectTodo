import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB1arMiJt6zfDHUz99exCcp1vqfFQ6hAQA",
    authDomain: "todo-71628.firebaseapp.com",
    projectId: "todo-71628",
    storageBucket: "todo-71628.appspot.com",
    messagingSenderId: "184248830986",
    appId: "1:184248830986:web:217d7815d1e035486923f3"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export {db}