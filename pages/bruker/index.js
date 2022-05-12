import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link' 
import styles from '../../styles/Login.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { sha256, sha224 } from 'js-sha256';
import firebase from 'firebase/app'
import 'firebase/firestore'
import { collectionGroup, getFirestore,collection, addDoc, getDocs, query, where   } from "firebase/firestore";

import app from '../../firebase/initFirebase'

export default function index() {
  const db = getFirestore(app)
  const router = useRouter();
  const usrNameQuery = router.query.username
  const [qdata, setQData] = useState([])

  useEffect(()=>{
    fetchQueryResult()
  },[])


  async function fetchQueryResult(){
    const responseObj = await fetch(`http://localhost:3000/api/feed`)
    const jsonData = await responseObj.json()
    setQData(jsonData)
  }


  

    console.log(qdata)
  return (
      <>
      <h1>{usrNameQuery}</h1>
      
      <button onClick={fetchQueryResult}>asdd</button>
      </>

    )
}
