import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD8dbfexZ3AfI6f5anWd1Nweba0XrjWKrU",
    authDomain: "disasterready-37c4c.firebaseapp.com",
    projectId: "disasterready-37c4c",
    storageBucket: "disasterready-37c4c.appspot.com",
    messagingSenderId: "364300842997",
    appId: "1:364300842997:web:d53754564e746fd14a92bc",
    measurementId: "G-S4D62828RS"
  };

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();

export { db };
