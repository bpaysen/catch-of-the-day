import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_Ggr0JN2Pg0SDetZ_cvzYdWoYkz9zaAc",
    authDomain: "catch-of-the-day-bpaysen.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-bpaysen.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export { firebaseApp };

//this is a default export
export default base;