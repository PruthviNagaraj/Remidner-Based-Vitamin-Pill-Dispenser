import "firebase/database";
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
	// databaseURL: "DATABASE_URL",
  apiKey: "AIzaSyBEDPIbaUaWtrSDwlSHGDr0J1LsTs6TC7Y",
  authDomain: "interactivesystems-ba501.firebaseapp.com",
  projectId: "interactivesystems-ba501",
  storageBucket: "interactivesystems-ba501.appspot.com",
  messagingSenderId: "418442621862",
  appId: "1:418442621862:web:0e38ae65097063e0d49567"
}

const app  = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
