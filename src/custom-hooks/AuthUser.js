import { useState , useEffect } from "react"; 
import firebaseApp  from "../firebase"; 
import { auth } from "../firebase"; 


const AuthUser =()=>{
        const [currentUser,setCurrentUser] = useState();
        useEffect(()=>{
            firebaseApp.onAuthStateChanged(auth,(user)=>{
                    if (user) {
                        setCurrentUser(user);
                    }else {

                        setCurrentUser(null);
                    }
 
            })

        })
    return { currentUser,}
}

export default AuthUser ;