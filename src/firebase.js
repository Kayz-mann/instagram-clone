import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAEFZ93zvu5VqUpcBYU60LyeOlv7hceajA",
  authDomain: "instagram-clone-react-79c9d.firebaseapp.com",
  databaseURL: "https://instagram-clone-react-79c9d.firebaseio.com",
  projectId: "instagram-clone-react-79c9d",
  storageBucket: "instagram-clone-react-79c9d.appspot.com",
  messagingSenderId: "117489555496",
  appId: "1:117489555496:web:10e72106959debbef2bd1d",
  measurementId: "G-VBY768ZKEK",
});

const db = firebaseApp.firestore(); //to access db
const auth = firebase.auth(); //to access authentication
const storage = firebase.storage(); //to manage multimedia uploads

export { db, auth, storage };
export default firebase;
