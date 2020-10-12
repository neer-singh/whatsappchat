// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyAhvHJgEz3fyaWoaWCuBMuWRuAiaj6k82A',
  authDomain: 'whatsapp-9e7ec.firebaseapp.com',
  databaseURL: 'https://whatsapp-9e7ec.firebaseio.com',
  projectId: 'whatsapp-9e7ec',
  storageBucket: 'whatsapp-9e7ec.appspot.com',
  messagingSenderId: '775847229916',
  appId: '1:775847229916:web:21bb3f488485ff801af719',
  measurementId: 'G-KEN50SQ4R7',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
