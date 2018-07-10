import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
  // Initialize Firebase
  const devConfig = {
    apiKey: "AIzaSyAlnM3c8oM8nuGJ79NN229D6NnqZy3P7Kg",
    authDomain: "react-firebase-auth-9f55f.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-9f55f.firebaseio.com",
    projectId: "react-firebase-auth-9f55f",
    storageBucket: "react-firebase-auth-9f55f.appspot.com",
    messagingSenderId: "365818039922"
  };

  // Initialize Firebase
  const proConfig = {
    apiKey: "AIzaSyCivFKk8HbDoRnloAPZz0czASraezYEDmE",
    authDomain: "react-firebase-auth-pro.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-pro.firebaseio.com",
    projectId: "react-firebase-auth-pro",
    storageBucket: "react-firebase-auth-pro.appspot.com",
    messagingSenderId: "920240871595"
  };

  const config = process.env.NODE_ENV === 'production'
    ? proConfig
    : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
