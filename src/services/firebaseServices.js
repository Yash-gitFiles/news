import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG);

const firebaseConfig = {
  apiKey: "AIzaSyDvngaZ7BmAl5RvaBdsIGimMYVqRkuFG1U",
  authDomain: "yash-24e09.firebaseapp.com",
  projectId: "yash-24e09",
  storageBucket: "yash-24e09.appspot.com",
  messagingSenderId: "470638980547",
  appId: "1:470638980547:web:fb0bab632904044516a176",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export { auth };
