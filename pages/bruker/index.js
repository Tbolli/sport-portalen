import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link' 
import styles from '../../styles/Feed.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default function index() {
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
const card =({type,title,info,location,time,when,hosts,coming})=>{
  return(
  <div className={styles.item}>
    <h1>{type?"Trening":"Kamp"} - {title}</h1>
    <p>{info}</p>
    <div>
      <span>{location}</span>
      <span>{time}</span>
    </div>

  </div>
  
  )
}
  console.log(qdata)
  return (
      <>
      {qdata.map(doc=>(
        card(doc)



      ))}
      </>

    )
}


function timeConvert(n) {
  var num = n;
  var hours = (num / 60);
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  return rhours + " t, " + rminutes + " min";
  }