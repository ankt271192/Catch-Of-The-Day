import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCcDmVxsgC4Zaofs_i6wcgeeHa61SLlE10",
  authDomain: "catch-of-the-day-c74ef.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-c74ef.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
