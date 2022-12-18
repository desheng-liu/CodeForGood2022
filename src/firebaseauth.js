import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBxqc6bVovSAvvVscxmajtyqqAvQdZqmK8",
    authDomain: "team16auth.firebaseapp.com",
    projectId: "team16auth",
    storageBucket: "team16auth.appspot.com",
    messagingSenderId: "632174782857",
    appId: "1:632174782857:web:77efaf6f5604af7ce89958",
    measurementId: "G-4F5DN2LMM0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);