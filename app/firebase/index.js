import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyDtOyKLG2xe9nLYkUuqD4U-_TeoP1cPVSc",
    authDomain: "rdl-todoapp.firebaseapp.com",
    databaseURL: "https://rdl-todoapp.firebaseio.com",
    storageBucket: "rdl-todoapp.appspot.com",
    messagingSenderId: "189851570873"
  };

  firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
