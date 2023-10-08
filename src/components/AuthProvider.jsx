import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import auth from "../firebase-data/firebase.config";


export const ContextProvider = createContext(null); 
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user,setUser] = useState([])

const createUser = (email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password)
}
const googleUser = ()=>{
   return signInWithPopup(auth,googleProvider);
}

const singInUser = (email,password)=>{
   return signInWithEmailAndPassword(auth,email,password)
}

const logOutUser = () =>{
   return signOut(auth)
}



useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth,currentUser=>{
          setUser(currentUser)
    })
    return()=>{
        unSubscribe()
    }
},[])


const authInfo = {
      createUser,
      googleUser,
      singInUser,
      user,
      logOutUser
}


    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

AuthProvider.propTypes ={
    children:PropTypes.node.isRequired,
}

export default AuthProvider;