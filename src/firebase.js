import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAys6Ph6hSe7dT3BDrY3edgYbFrL8pOJaw",
  authDomain: "m-city-c122a.firebaseapp.com",
  databaseURL: "https://m-city-c122a.firebaseio.com",
  projectId: "m-city-c122a",
  storageBucket: "m-city-c122a.appspot.com",
  messagingSenderId: "741808754597",
  appId: "1:741808754597:web:4f676af17d830eff91624c",
  measurementId: "G-6E9P3CDXTH",
};

firebase.initializeApp(config);

const firebasedB = firebase.database();
const firebaseMatches = firebasedB.ref("matches");
const firebasePromotions = firebasedB.ref("promotions");

export { firebase, firebaseMatches, firebasePromotions };
