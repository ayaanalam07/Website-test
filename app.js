import {  onAuthStateChanged , signOut  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./firebaseconfig.js";


const logout = document.querySelector('#Logout')
const btnDiv = document.querySelector("#btnDiv");




const onAuth = 
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);
   
  } else {
   
   btnDiv.innerHTML = `
  <a class="link link-primary" href="./login.html">Login</a>

   `
  }
});
logout.addEventListener('click',()=>{
  signOut(auth).then(() => {
  window.location = 'login.html'
  }).catch((error) => {
    console.log(error);
  });
})

import { collection, addDoc } from "firebase/firestore"; 

try {
  const docRef = await addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}