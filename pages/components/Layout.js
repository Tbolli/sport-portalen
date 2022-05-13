import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useState } from 'react'
import React from 'react'
import Link from 'next/dist/client/link'
import styles from '../../styles/layout.module.css'
import ss from '../../styles/Login.module.css'


function Layout({children}) {
  const router = useRouter()
  try{
    if(router.pathname.split("/")[1] == "bruker") return brukerLayout(children, router.pathname)
    if(router.pathname.split("/")[1] == "trener") return trenerLayout(children)
    if(router.pathname.split("/")[1] == "admin") return adminLayout(children)
    if(router.pathname.split("/")[1] == "login") return <main>{children}</main>
  }catch(e){
    return <h1>404</h1>
  }
}

export default Layout
const adminLayout =(children)=>{
  return(
    <>
    <Link href={"/login"}>
        <p className={ss.tilbake}>⬅️Tilbake</p>
    </Link>
    <main>{children}</main>
    </>
    )
}

const brukerLayout =(children, path_name)=>{
  useEffect(()=>{
    const optionSwaps= ["feed","newsletter"]
    colorSwap(optionSwaps)
  })  
  const colorSwap =(optionSwaps)=>{
    document.getElementById(path_name.split("/")[2]).className =styles.footer_option_activated
    optionSwaps.splice(optionSwaps.indexOf(path_name.split("/")[2]),1)
    optionSwaps.forEach(opt=>{
      document.getElementById(opt).className =styles.footer_option
    })
  }
    return(
        <>
        <Link href={"/login"}>
          <p className={ss.tilbake}>⬅️Tilbake</p>
        </Link>
        <main>{children}</main>
        <div  className={styles.footer}>
            <div  id="feed"className={styles.footer_option}>
              <Link   href={"/bruker/feed"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="28.17" height="26" viewBox="0 0 26 24">
                  <path id="iconmonstr-home-7" d="M21.667,7.647V2.091h-3.25V4.374ZM26,14.091,13,1,0,14.091H3.25V25h7.583V19.545h4.333V25H22.75V14.091Zm-5.417,8.727h-3.25V17.364H8.667v5.455H5.417V11.625L13,4.085l7.583,7.625Z" transform="translate(0 -1)" fill="#5A616F" opacity="1"/>
                </svg>
              </Link>
            </div>

            <div  id="newsletter" className={styles.footer_option}>
            <Link href={"/bruker/newsletter"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30.33" height="26" viewBox="0 0 28 24">
                    <path id="iconmonstr-newspaper-13" d="M8.167,18.8H23.333V20H8.167Zm15.167-3.6H8.167v1.2H23.333Zm0-7.2H17.5V9.2h5.833Zm0,3.6H17.5v1.2h5.833ZM3.5,2V22.639a.592.592,0,1,1-1.167,0V4.4H0V23.576A2.392,2.392,0,0,0,2.357,26H25.641A2.392,2.392,0,0,0,28,23.576V2ZM25.667,22.4H5.833V4.4H25.667ZM15.167,8h-7v4.8h7Z" transform="translate(0 -2)" fill="#5A616F" opacity="1"/>
                </svg>
            </Link>
            </div>

        </div>
        </>
    )

}

