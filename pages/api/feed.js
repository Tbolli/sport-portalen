import app from '../../firebase/initFirebase'
import 'firebase/firestore'
import { useRouter } from 'next/router'
import { collectionGroup, getFirestore,collection, addDoc, getDocs, query, where   } from "firebase/firestore";

export default function handler(req, res) {
        const db = getFirestore(app)
        const docList =[]
        async function queryData(){
            try {
              const UsersRef = collection(db,"Feed")
              const q = query(UsersRef, where("invited","array-contains", "Bruker"))
            
              const querySnapshot = await getDocs(q)
              querySnapshot.forEach(doc=>{
                const sub =doc.data()
                const obj ={
                  title: sub.title,
                  infor: sub.info,
                  location: sub.location,
                  time: sub.time,
                  type: sub.type,
                  when: sub.when,
                  hosts: sub.hosts,
                  coming: sub.coming,
                }
                docList.push(obj)
              })
              } catch (e) {
                console.error("Error!: ", e);
              }
          }
            queryData()
            console.log(docList)
            res.status(200).json(docList)
  }
  