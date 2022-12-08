// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCe0ksyUAm2cq9Ccfse0-THEovouLnFwfE",
  authDomain: "chat-room-3e215.firebaseapp.com",
  projectId: "chat-room-3e215",
  storageBucket: "chat-room-3e215.appspot.com",
  messagingSenderId: "1026431726369",
  appId: "1:1026431726369:web:224990c47a0dbfda824460",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

//MAKE SURE YOU CREATE .ENV FILE BEFORE DEPLOYING!!!!!!!!!!!!
