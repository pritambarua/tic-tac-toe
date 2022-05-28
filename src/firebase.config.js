import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCs9eMdJOFy8Q960SDTh-no00P48HVsTkw",
    authDomain: "preet-tac-toe.firebaseapp.com",
    projectId: "preet-tac-toe",
    storageBucket: "preet-tac-toe.appspot.com",
    messagingSenderId: "576351789254",
    appId: "1:576351789254:web:24596f6ff182cf7180b7c7",
    measurementId: "G-KEQ2D5HGBK"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);

  export default db;