import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCfqx_0SReL2trg4wjHfDBQAmGczGGih28",
  authDomain: "loginapp-d20a3.firebaseapp.com",
  projectId: "loginapp-d20a3",
  storageBucket: "loginapp-d20a3.firebasestorage.app",
  messagingSenderId: "1010305339000",
  appId: "1:1010305339000:web:a1bd0cb4bd279a52c1278d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);