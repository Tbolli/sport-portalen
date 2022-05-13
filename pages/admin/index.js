import React from 'react'
import app from '../../firebase/initFirebase'
import { useState } from 'react'
import { sha256, sha224 } from 'js-sha256';
import firebase from 'firebase/app'
import 'firebase/firestore'
import { collectionGroup, getFirestore,collection, addDoc, getDocs, query, where   } from "firebase/firestore";
import styles from '../../styles/Login.module.css'
import Link from 'next/dist/client/link'

function index() {
    const db = getFirestore(app)

    let Name=""
    let Username=""
    let DateofBirth=""
    let Password=""
    let Sports=""
    let Type=""

    async function sendData(){
        try {
            const docRef = await addDoc(collection(db, "Users"), {
              Name: Name,
              Username: Username,
              DateofBirth: DateofBirth,
              Password: sha256(Password),
              Sports: Sports.split(","),
              Type: Type
            });
            alert("Success")
            window.location.reload()
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          
    }


  return (
    <>
    <div className={styles.input_fields}>
      <input onChange={e=>Name = e.target.value} type="text" placeholder="Name:" />
      <input onChange={e=>Username = e.target.value} type="text" placeholder="Username:"/>
      <input onChange={e=>DateofBirth = e.target.value} type="date" placeholder="DateofBirth:" />
      <input onChange={e=>Password = e.target.value} type="text" placeholder="Password:"/>
      <input onChange={e=>Type = e.target.value} type="text" placeholder="Type: admin, bruker, trener"/>
      <input onChange={e=>Sports = e.target.value} type="text" placeholder="Sports: Fotball,Handball"/>

      <button onClick={sendData} className={styles.link_anchor}>Registrer bruker</button>
    </div>
    </>
  )
}

export default index