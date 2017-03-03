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

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('child added', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
  console.log('child changed', snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
  console.log('child removed', snapshot.key, snapshot.val());
});

var newTodoRef = todosRef.push({
  text: 'Go some places'
});

var newTodoRef = todosRef.push({
  text: 'Eat some lunch'
});

// var notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('child added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('child changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('child removed', snapshot.key, snapshot.val());
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Go some places'
// });
//
// var newNoteRef = notesRef.push({
//   text: 'Find the items'
// });

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

// firebaseRef.update({ // multipath update => key value pairs
//   'app/name': 'Fun App',
//   'user/name': 'Jim',
//   isRunning: true
// });
//
// firebaseRef.child('app').update({
//   version: '3.0.0'
// });
//
// firebaseRef.child('user').update({
//   age: 14
// });

// firebaseRef.remove(); // wipes database completely
// firebaseRef.child('app/name').remove();
// firebaseRef.child('app').update({
//   version: '4.0.0',
//   name: null // also removes value
// });

// firebaseRef.child('user/age').remove();
// firebaseRef.update({
//   isRunning: null
// });

// firebaseRef.child('app').update({ // will add new data fields with update if they don't exist already
//   place: 'New York',
//   date: 'March 2'
// });

// firebaseRef.push({
//   'app/place': 'New York',
//   'app/date': 'March 2'
// });

// firebaseRef.once('value').then((snapshot) => { // get entire database
//   console.log('Got entire database', snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });
//
// firebaseRef.child('app').once('value').then((snapshot) => { // get child data from database
//   console.log('Got app child from database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value', e);
// });

// firebaseRef.on('value', (snapshot) => {
//   console.log('Got value', snapshot.val());
// });
//
// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('User ref changed', snapshot.val());
// })
//
// firebaseRef.update({
//   isRunning: true,
//   'user/name': 'Bill'
// });
//
// firebaseRef.update({
//   'app/name': 'New App'
// });

// firebaseRef.off(); // removes listeners
