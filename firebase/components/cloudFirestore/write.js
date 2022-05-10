import firebase from 'firebase/app'
import 'firebase/firestore'
import { getFirestore } from "firebase/firestore";
import { collection, addDoc, getDocs  } from "firebase/firestore";
import { sha256, sha224 } from 'js-sha256';

import app from '../../initFirebase'


const WriteToCloudFirestore = () => {
    const db = getFirestore(app)
    async function sendData(){
        try {
            const docRef = await addDoc(collection(db, "users"), {
              first: "Ada",
              last: "Lovelace",
              born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    async function readData(){
        try {
            const querySnapshot = await getDocs(collection(db, "users"));
            querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data()}`);
            });
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    
    let asd = sha256('Message to hash');

    return (
        <>
        <button onClick={sendData}>Send Data To Cloud Firestore</button>
        <button onClick={readData}>Read Data To Cloud Firestore</button>
        </>
    )
}

export default WriteToCloudFirestore



