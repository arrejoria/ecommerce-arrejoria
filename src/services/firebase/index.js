import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCz9pdKRRonhhSRenkpGW4ZhEbGS1fzEMo",
  authDomain: "qbr-ecommerce.firebaseapp.com",
  projectId: "qbr-ecommerce",
  storageBucket: "qbr-ecommerce.appspot.com",
  messagingSenderId: "534982847899",
  appId: "1:534982847899:web:dc3ad92484e663ee55053e"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);