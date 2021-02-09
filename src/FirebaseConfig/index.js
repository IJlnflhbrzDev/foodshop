import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
var firebaseConfig = {
     apiKey: "AIzaSyDV1bxoSFk0B5t60g2J8oISm8l1lNaERow",
     authDomain: "foodshop-f7214.firebaseapp.com",
     projectId: "foodshop-f7214",
     storageBucket: "foodshop-f7214.appspot.com",
     messagingSenderId: "1072859706404",
     appId: "1:1072859706404:web:0060a8f4ee1156a23994b1",
     measurementId: "G-0L3DMRSY6D"
   };
firebase.initializeApp(firebaseConfig);


export default firebase