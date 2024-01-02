import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"; 


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAzsEkDQnNDEo6TMMrImcjzJC6928vNvz8",
  authDomain: "react-app-3fb75.firebaseapp.com",
  databaseURL: "https://react-app-3fb75-default-rtdb.firebaseio.com",
  projectId: "react-app-3fb75",
  storageBucket: "react-app-3fb75.appspot.com",
  messagingSenderId: "726227332344",
  appId: "1:726227332344:web:bdf9c55ab91cf559325f0d",
});

export const auth = firebaseApp.auth();

export default firebaseApp