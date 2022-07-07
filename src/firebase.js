import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDh8hzTLa0j0vgiXCZtOVndnG1T9XLKK_o",
  authDomain: "mtechzilla.firebaseapp.com",
  projectId: "mtechzilla",
  storageBucket: "mtechzilla.appspot.com",
  messagingSenderId: "119763786457",
  appId: "1:119763786457:web:d8ec4f863151811cca7cc8",
  measurementId: "G-31EW5S9691"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();