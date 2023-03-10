import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyBVM8wxoBjQE3hLjACvLSQdGfRqrI-3jZg",
    authDomain: "agenda-contactos-fer.firebaseapp.com",
    projectId: "agenda-contactos-fer",
    storageBucket: "agenda-contactos-fer.appspot.com",
    messagingSenderId: "75735759546",
    appId: "1:75735759546:web:2b3c92ee4f24602b862083",
    measurementId: "G-QXYHBJ2KD6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = firebase.firestore()
  export {db}