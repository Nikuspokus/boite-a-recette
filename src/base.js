import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDFnZ-RJkPh18J2zT0-5qnKCGRoL-9_SHg",
  authDomain: "recettes-app-9a795.firebaseapp.com",
  databaseURL: "https://recettes-app-9a795-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
