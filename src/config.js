import firebase from 'firebase/app';
import 'firebase/database';


export const DB_CONFIG = {
  apiKey: "AIzaSyBfrtj2KoLLz_YDsg_W_VgOx2402zETg4w",
  authDomain: "cyanbluecreative.firebaseapp.com",
  databaseURL: "https://cyanbluecreative.firebaseio.com",
  projectId: "cyanbluecreative",
  storageBucket: "cyanbluecreative.appspot.com",
  messagingSenderId: "769914626190",
  appId: "1:769914626190:web:c0fc731da834a4d453a9df",
  measurementId: "G-5B6BLYR73S"
};

const Firebase = firebase.initializeApp(DB_CONFIG);
export default Firebase;