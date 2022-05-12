
import styles from '../../../styles/Feed.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import 'firebase/firestore'

export default function index() {
  const router = useRouter();
  const [qdata, setQData] = useState([])

  useEffect(()=>{
    fetchQueryResult()
  },[])


  async function fetchQueryResult(){
    const responseObj = await fetch(`http://localhost:3000/api/feed`)
    const jsonData = await responseObj.json()
    setQData(jsonData)

  }
  const btn_den =()=>{
    painter(false)
  }
  const btn_acc =()=>{
    painter(true)
  }
  const painter =(btn_type)=>{
    if(btn_type){
      document.getElementById("accept").style.backgroundColor= "#10342E"
      document.getElementById("deny").style.backgroundColor= "#2A3445"
      return
    }
    document.getElementById("deny").style.backgroundColor= "#2A1A2B"
    document.getElementById("accept").style.backgroundColor= "#2A3445"
    
  }
const card =({type,title,info,location,time,when,hosts,coming})=>{
  return(
  <div className={styles.item}>
    <span>{String(toDateTime(when.seconds)).split("GMT")[0].slice(0,String(toDateTime(when.seconds)).split("GMT")[0].length -4)}</span>
    <h1>{type?"Trening":"Kamp"} - {title}</h1>
    <p>{info}</p>

    <div className={styles.lane_bottom}>
      <span>{location}</span>
      
      <svg style={{marginRight:"4px"}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 9 9">
        <path id="iconmonstr-time-4" d="M9,4.5a4.5,4.5,0,0,1-9,0,4.551,4.551,0,0,1,.088-.885H.866A3.664,3.664,0,0,0,.75,4.5,3.75,3.75,0,1,0,4.5.75,3.717,3.717,0,0,0,2.266,1.5l.768.768-2.63.508L.913.142l.819.819A4.492,4.492,0,0,1,9,4.5ZM4.125,2.25v3H6.75V4.5H4.875V2.25Z" transform="translate(0 0)" fill="#fff" opacity="0.4"/>
      </svg>

      <span>{timeConvert(time)}</span>
    </div>
    <div className={styles.btn_row}>
      <button onClick={btn_acc} id="accept">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 21.492 15.119">
          <path id="iconmonstr-check-mark-2" d="M8.059,18.084,0,10.857l2.5-2.4L8.012,13.37,18.946,2.965l2.546,2.357Z" transform="translate(0 -2.965)" fill="#fff"/>
        </svg>
      </button>

      <button onClick={btn_den} id="deny">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15.119 15.119">
        <path id="iconmonstr-x-mark-9" d="M16.119,14.173,10.494,8.547l5.625-5.618L14.173,1,8.55,6.621,2.931,1,1,2.931,6.626,8.564,1,14.188l1.931,1.931,5.637-5.63,5.622,5.63Z" transform="translate(-1 -1)" fill="#fff"/>
      </svg>
      </button>
    </div>

  </div>
  )

    

}
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
  return (rminutes >0)?(rhours + "t, " + rminutes + "min"):rhours + "t"
  }

  function toDateTime(secs) {
    var t = new Date(1970, 0, 1); // Epoch
    t.setSeconds(secs);
    return t;
}