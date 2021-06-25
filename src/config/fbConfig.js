import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


// marioplan
// const firebaseConfig = {
//   apiKey: "AIzaSyDWQsXj9887oWwU_phAluiiECRB_gZpvGo",
//   authDomain: "zeeson-marioplan.firebaseapp.com",
//   projectId: "zeeson-marioplan",
//   storageBucket: "zeeson-marioplan.appspot.com",
//   messagingSenderId: "488930228980",
//   appId: "1:488930228980:web:56a0a82be0fabe361fbca1",
//   measurementId: "G-33V54CXVW0"
// };


// talk2hear
const firebaseConfig = {
  apiKey: "AIzaSyA8Z--tkEjjbYEkBhYKu7EXSlSbXuaQzYU",
  authDomain: "talk2hear.firebaseapp.com",
  projectId: "talk2hear",
  storageBucket: "talk2hear.appspot.com",
  messagingSenderId: "719330214199",
  appId: "1:719330214199:web:e68a2da61702a79d965ab2",
  measurementId: "G-NKQ20TQNZE"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshorts: true});

export default firebase;
