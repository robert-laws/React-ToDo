import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDtOyKLG2xe9nLYkUuqD4U-_TeoP1cPVSc",
    authDomain: "rdl-todoapp.firebaseapp.com",
    databaseURL: "https://rdl-todoapp.firebaseio.com",
    storageBucket: "rdl-todoapp.appspot.com",
    messagingSenderId: "189851570873"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebase.database().ref().set({ // set method wipes database and replaces it with new data
  app: {
    name: 'Todo App',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Kal',
    age: 22
  }
}).then(() => {
  console.log('Set Worked');
}, (e) => {
  console.log('Set Failed');
});

// firebaseRef.update({
//   isRunning: false,
//   'app/name': 'Todo Application'
// });

// firebaseRef.child('app').update({
//   name: 'New Todo App'
// }).then(() => {
//   console.log('Updated Worked');
// }, (e) => {
//   console.log('Updated Failed');
// });

firebaseRef.update({
  'app/name': 'Fun App',
  'user/name': 'Jim'
});

firebaseRef.child('app').update({
  version: '2.0.0'
});

firebaseRef.child('user').update({
  age: 63
})
