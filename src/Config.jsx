
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCDI189CJ-H4zLZjm1c1AAObSyNj_uAeGw",
    authDomain: "avantika-vacations-2024.firebaseapp.com",
    projectId: "avantika-vacations-2024",
    storageBucket: "avantika-vacations-2024.appspot.com",
    messagingSenderId: "347200780834",
    appId: "1:347200780834:web:57b1ce77d03ceadb11687b",
    measurementId: "G-Z654VZTPGK"
  };

  const app = initializeApp(firebaseConfig)
   
  export  const  database = getFirestore(app)
  export const storage = getStorage(app)