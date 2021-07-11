// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDedoN6sF_ijwqDc6WBU8C758JUwXyHVM4",
    authDomain: "docs-clone-196ea.firebaseapp.com",
    projectId: "docs-clone-196ea",
    storageBucket: "docs-clone-196ea.appspot.com",
    messagingSenderId: "350754504892",
    appId: "1:350754504892:web:462d658aafe0c2f55110b9",
    measurementId: "G-3Z5ZJ7LPZ0"
  };

  const app = !firebase.apps.length
   ? firebase.initializeApp(firebaseConfig) 
   : firebase.app();

  const db = app.firestore();
  
  export { db };