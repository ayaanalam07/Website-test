import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./firebaseconfig.js"



const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const profileImg = document.querySelector("#profile-img");

form.addEventListener("submit" , (event)=>{
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
      window.location = "login.html"
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });

})