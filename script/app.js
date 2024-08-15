import {  onAuthStateChanged , signOut  } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "../config.js";


const logout = document.querySelector('#Logout')






onAuthStateChanged ( auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
      const profileImgURL = showUrl(profileImg.files[0])

     
    } else {
     window.location="login.html"
    }
  });


  logout.addEventListener('click',()=>{
    signOut(auth).then(() => {
    window.location = 'login.html'
    }).catch((error) => {
      // An error happened.
    });
  })