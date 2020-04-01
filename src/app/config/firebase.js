import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBaYZkAWfwVVLlFVtlWD8CmnhpaTxpX_ZI",
  authDomain: "revents-nadjib.firebaseapp.com",
  databaseURL: "https://revents-nadjib.firebaseio.com",
  projectId: "revents-nadjib",
  storageBucket: "revents-nadjib.appspot.com",
  messagingSenderId: "855047052306",
  appId: "1:855047052306:web:8cc780b343c8d9575d8ccb"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
