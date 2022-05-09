import React from 'react'
import Write from '../firebase/components/cloudFirestore/write'
import initFirebase from '../firebase/components/cloudFirestore/write'

initFirebase()

function index() {

  return (
    <Write/>
  )
}

export default index