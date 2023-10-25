// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDajvJTjbHwJM_rMBHwfvF1LedkJdq-tno",
  authDomain: "gig-trakr-1dff6.firebaseapp.com",
  projectId: "gig-trakr-1dff6",
  storageBucket: "gig-trakr-1dff6.appspot.com",
  messagingSenderId: "13714296019",
  appId: "1:13714296019:web:3543cfa81b091f3318d826"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export default app 