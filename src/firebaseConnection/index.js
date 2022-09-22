import firebase from "firebase/app"
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCotzL3eZm7wQY80UNXU2Q0HJNK-4sjYTo",
  authDomain: "aula-firebase-96291.firebaseapp.com",
  databaseURL: "https://aula-firebase-96291-default-rtdb.firebaseio.com",
  projectId: "aula-firebase-96291",
  storageBucket: "aula-firebase-96291.appspot.com",
  messagingSenderId: "193016874806",
  appId: "1:193016874806:web:58043de754eff4f0759597",
  measurementId: "G-V1G1C24BB5"
  };

  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export default firebase;