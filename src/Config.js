
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIRBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_BUCKET_STORAGE,
    storageBucket: "avantika-vacations-2024.appspot.com"
  
  };

  const app = initializeApp(firebaseConfig)
   
  export  const  database = getFirestore(app)
  export const storage = getStorage(app)
  export const Auth = getAuth(app)