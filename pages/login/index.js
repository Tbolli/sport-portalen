import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link' 
import styles from '../../styles/Login.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { sha256, sha224 } from 'js-sha256';
import firebase from 'firebase/app'
import 'firebase/firestore'
import { collectionGroup, getFirestore,collection, addDoc, getDocs, query, where   } from "firebase/firestore";

import app from '../../firebase/initFirebase'

export default function Home() {
  const db = getFirestore(app)
  const router = useRouter();

  const [username, setUsername] = useState("")
  const [usrPassword, setUsrPassword] = useState("")
    async function readData(){
        try {
          // refereance to collection
          const UsersRef = collection(db,"Users")
          // query 
          const q = query(UsersRef, where("Username","==", username))

          const querySnapshot = await getDocs(q)
          let passwodUSR =""
          let type =""
          querySnapshot.forEach(doc=>{
            passwodUSR= doc.data().Password
            type = doc.data().Type

          })
          if(valitadion(passwodUSR)==true) router.push(`/${type}?username=${username}`)

          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    
    
  const valitadion =(doc)=>{
    if (sha256(usrPassword)===doc) return true
    return false
  }
  return (
    <div className={styles.div_encaps}>

    <svg className={styles.svg_logo} xmlns="http://www.w3.org/2000/svg" width="153.733" height="153.732" viewBox="0 0 153.733 153.732">
      <g id="Out_line" data-name="Out line" transform="translate(-15.996 -16)" opacity="0.8">
        <path id="Path_2479" data-name="Path 2479" d="M287.438,90.857c-.013-.058-.022-.112-.039-.167l.035.016Z" transform="translate(-184.48 -50.769)" fill="#fff"/>
        <ellipse id="Ellipse_6" data-name="Ellipse 6" cx="2.5" cy="2" rx="2.5" ry="2" transform="translate(69.996 39)" fill="#fff"/>
        <ellipse id="Ellipse_7" data-name="Ellipse 7" cx="3" cy="2" rx="3" ry="2" transform="translate(76.996 39)" fill="#fff"/>
        <path id="Path_2480" data-name="Path 2480" d="M166.184,138.156l-20.347-29.6a10.143,10.143,0,0,0,3.395-7.629A40.875,40.875,0,0,0,143.4,79.875l-9.714-16.187-2.469-9.877a2.567,2.567,0,0,0-1.339-1.672l-5.124-2.562a2.589,2.589,0,0,0-1.147-.269h-2.562V44.184a2.559,2.559,0,0,0-1.5-2.332l-13.894-6.316A20.485,20.485,0,0,0,72.426,20.461a12.813,12.813,0,0,0-16.561,7.472A71.17,71.17,0,0,0,51.4,49.859l-1.822,41.9v.013a39.789,39.789,0,0,0-.269,4.628,40.516,40.516,0,0,0,2.447,13.89l7.639,21H33.449a17.453,17.453,0,0,0-5.518,34.01A86.119,86.119,0,0,0,55.2,169.732h94.375a20.158,20.158,0,0,0,16.613-31.576ZM120.067,54.433H123l3.529,1.765,2.277,9.105a2.511,2.511,0,0,0,.288.7l9.909,16.51a35.758,35.758,0,0,1,5.1,18.416,5.086,5.086,0,0,1-1.227,3.334l-1.624-2.364L132.2,79.267a6.856,6.856,0,0,0-2.879-3.372l-3.241-11.885a2.557,2.557,0,0,0-1.851-1.813l-7.148-1.787Zm-27.2,5.98,4.1-5.467a10.255,10.255,0,0,0,7.552,1.954l7.033,7.033h0a2.59,2.59,0,0,0,1.188.673l8.791,2.2,2.3,8.42a6.852,6.852,0,0,0-3.084,1.915l-8.029-9.032a2.542,2.542,0,0,0-1.412-.81L98.58,64.752l-.09-.019a2.393,2.393,0,0,0-.5-.051H92.863ZM120.275,97.3l-13.455-6.726a2.579,2.579,0,0,0-1.957-.138l-5.489,1.829a26.8,26.8,0,0,1-.9-17.4L99.8,70.219l9.65,1.931,9.509,10.694v0ZM99.4,97.66l6.082-2.027,16.84,8.417v0a14.952,14.952,0,0,0,6.864,6.114l8.177,28.613L99.534,118.968A15.553,15.553,0,0,1,99.4,97.66Zm34.362,9.874a2.556,2.556,0,0,0-1.653-1.726,9.819,9.819,0,0,1-6.678-8.433l-1.4-15.383a1.776,1.776,0,0,1,3.417-.823l9.157,22.9a2.5,2.5,0,0,0,.269.5l4.887,7.107-5.967,2.982Zm-20.4-60.788a10.233,10.233,0,0,0-.234-2.184l2.8,1.271v5.429l-3.264,6.53L109.569,54.7a10.242,10.242,0,0,0,3.792-7.956Zm-10.406-6.809,0,.151c-.013-.058-.022-.112-.038-.167Zm.157,6.809v-.32a20.274,20.274,0,0,0,1.822-4.468,5.124,5.124,0,0,1-1.822,9.913,5.06,5.06,0,0,1-1.714-.295A7.629,7.629,0,0,0,103.112,46.746ZM85.176,21.124a15.388,15.388,0,0,1,15.36,14.761,7.673,7.673,0,0,0-9.724-.41,10.251,10.251,0,0,0-8.2-4.1H70.681A15.4,15.4,0,0,1,85.176,21.124ZM69.8,36.5H82.614a5.131,5.131,0,0,1,5.124,5.124,2.562,2.562,0,0,0,5.124,0,2.562,2.562,0,1,1,5.124,0v5.124a2.566,2.566,0,0,1-2.562,2.562H92.863V46.746H87.739V66.389l-2.562,3.417A12.871,12.871,0,0,1,74.928,74.93a2.566,2.566,0,0,1-2.562-2.562v-3.8a9.959,9.959,0,0,0,4.868-6.447c.086,0,.17,0,.256,0h5.124V56.995H77.49A7.7,7.7,0,0,1,69.8,49.308Zm0,23.053a12.8,12.8,0,0,0,2.431,1.441A4.81,4.81,0,0,1,69.8,64.124ZM56.515,50.083a66.15,66.15,0,0,1,4.148-20.35,7.708,7.708,0,0,1,7.725-4.977A20.36,20.36,0,0,0,64.679,36.5V64.681a2.561,2.561,0,0,0-1.97.922l-3.981,4.782a40.484,40.484,0,0,0-3.3,4.57Zm.054,58.46a35.512,35.512,0,0,1,6.095-34.878l3.216-3.859h1.361v2.562a7.7,7.7,0,0,0,7.687,7.687,18.019,18.019,0,0,0,14.348-7.174l2.306-3.075h3.007l-1.041,3.651a31.933,31.933,0,0,0,1.4,21.5,20.707,20.707,0,0,0-1.957,23.806,33.822,33.822,0,0,1-23.976,9.97h-5.1Zm61.31,56.064H82.614V153.753l1.89.516a2.567,2.567,0,0,0,2.485-.66,7.482,7.482,0,0,1,8.647-1.406l22.515,11.258a.606.606,0,0,1-.272,1.147Zm31.691,0H123.577a5.407,5.407,0,0,0,.032-.605,5.7,5.7,0,0,0-3.168-5.124L97.93,147.62a12.6,12.6,0,0,0-13.41,1.342l-16.693-4.554a55.552,55.552,0,0,0-21.6-1.534l-10.047,1.255.634,5.086,10.05-1.255a50.429,50.429,0,0,1,19.617,1.393l11.011,3v12.251H55.2a80.947,80.947,0,0,1-25.644-4.16,12.328,12.328,0,0,1,3.9-24.024H62.117a2.562,2.562,0,0,0,2.562-2.562h4.333a38.959,38.959,0,0,0,27.14-11.021l.022.023a2.659,2.659,0,0,0,.625.458L150.605,151.5l2.376-4.541-9.358-4.9-6.4-22.394,7.466-3.731,17.269,25.119a15.033,15.033,0,0,1-12.388,23.55Z" transform="translate(0 0)" fill="#fff"/>
      </g>
    </svg>

    <span className={styles.span_info}>
    Logg inn på idrettportalen for å ta nytte av våre tjenester
    </span>

    <div className={styles.input_fields}>
      <input onChange={e => setUsername(e.target.value)} type="text" placeholder="Brukernavn:" />
      <input onChange={e => setUsrPassword(e.target.value)} type="password" placeholder="Passord:"/>
    </div>
   


    <button onClick={readData} className={styles.link_anchor}>Logg inn</button>
    
    </div>
  )
}
