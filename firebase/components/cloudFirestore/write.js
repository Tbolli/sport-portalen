import firebase from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";

import app from '../../initFirebase'


const WriteToCloudFirestore = () => {
    const db = getFirestore(app)

    

    return (
        <button onClick={sendData}>Send Data To Cloud Firestore</button>
    )
}

export default WriteToCloudFirestore



//https://firebase.google.com/docs/firestore/quickstart