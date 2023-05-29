// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvu_NRkxDePUR5vW8jiqbgX_ihtlb6OHQ",
  authDomain: "shop-ec4b4.firebaseapp.com",
  projectId: "shop-ec4b4",
  storageBucket: "shop-ec4b4.appspot.com",
  messagingSenderId: "876903752410",
  appId: "1:876903752410:web:8d6d8a7fe7044b5574fbe3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app