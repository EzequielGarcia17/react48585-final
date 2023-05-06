import firebase from "firebase/app";
import "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoILSBfHU07Kni1mW8EQ8y9okcdkTFbco",
  authDomain: "freshi-coder-48585.firebaseapp.com",
  projectId: "freshi-coder-48585",
  storageBucket: "freshi-coder-48585.appspot.com",
  messagingSenderId: "3082447239",
  appId: "1:3082447239:web:71d4b29978e63d0d278b22"
};

// Initialize APP
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () =>{
    return firebase.firestore(app)
}