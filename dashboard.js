import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"; 
import {db} from "./firebaseconfig.js"





const form = document.querySelector("#form")
const textareaText = document.querySelector("#textareaText")
const inputText = document.querySelector("#inputText")
let arr =[]

form.addEventListener("submit" , async (event)=>{

  event.preventDefault()
const uservalue ={
  title: textareaText.value,
  description: inputText.value
}

  try {
    const docRef = await addDoc(collection(db, "blog"), uservalue);
    arr.push(uservalue)
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  textareaText.value=""
  inputText.value=""
})

const div = document.querySelector("#contBox")

function renderData(){
    arr.forEach((item)=>{
    
    })
}