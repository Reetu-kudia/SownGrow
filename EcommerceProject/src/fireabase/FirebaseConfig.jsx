// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDoJvalILWn6esetahpL9BGRT__B5azWvI",
//   authDomain: "myfirstapp-38751.firebaseapp.com",
//   projectId: "myfirstapp-38751",
//   storageBucket: "myfirstapp-38751.appspot.com",
//   messagingSenderId: "273202707457",
//   appId: "1:273202707457:web:5724f212508b5b82f31400"
// };
const firebaseConfig = {
  apiKey: "AIzaSyASmSS5PcrYkQpBXUeqijH3d_HDihNdxH0",
  authDomain: "ecommercet-4ac98.firebaseapp.com",
  projectId: "ecommercet-4ac98",
  storageBucket: "ecommercet-4ac98.appspot.com",
  messagingSenderId: "8261801798",
  appId: "1:8261801798:web:00153b6037634d0de77747",
  measurementId: "G-MKNK4MZM11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}