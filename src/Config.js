
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIRBASE_API_KEY,
    authDomain: "avantika-vacations-2024.firebaseapp.com",
    projectId: "avantika-vacations-2024",
    storageBucket: "avantika-vacations-2024.appspot.com",
   
  };

  console.log(process.env.REACT_APP_FIRBASE_API_KEY)

  const app = initializeApp(firebaseConfig)
   
  export  const  database = getFirestore(app)
  export const storage = getStorage(app)
  export const Auth = getAuth(app)