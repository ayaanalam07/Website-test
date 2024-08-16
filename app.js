import {  onAuthStateChanged , signOut  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 
import { auth } from "./firebaseconfig.js";


const logout = document.querySelector('#Logout')
const btnDiv = document.querySelector("#btnDiv");





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

