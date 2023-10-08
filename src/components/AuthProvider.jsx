import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import auth from "../firebase-data/firebase.config";


export const ContextProvider = createContext(null); 
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const [user,setUser] = useState([])
    const [isTrue , setIsTrue] = useState(true)

const createUser = (email,password)=>{
    setIsTrue(true)
   return createUserWithEmailAndPassword(auth,email,password)
}
const googleUser = ()=>{
    setIsTrue(true)
   return signInWithPopup(auth,googleProvider);
}

const singInUser = (email,password)=>{
    setIsTrue(true)
   return signInWithEmailAndPassword(auth,email,password)
}

const logOutUser = () =>{
    setIsTrue(true)
   return signOut(auth)
}



useEffect(()=>{
   const unSubscribe = onAuthStateChanged(auth,currentUser=>{
          setUser(currentUser)
          setIsTrue(false)
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
      logOutUser,
      isTrue
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