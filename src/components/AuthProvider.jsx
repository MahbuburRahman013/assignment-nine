import { createContext } from "react";
import PropTypes from 'prop-types'
import {createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import auth from "../firebase-data/firebase.config";


export const ContextProvider = createContext(null); 
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

const createUser = (email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password)
}
const googleUser = ()=>{
   return signInWithPopup(auth,googleProvider);
}

const singInUser = (email,password)=>{
   return signInWithEmailAndPassword(auth,email,password)
}

const authInfo = {
      createUser,
      googleUser,
      singInUser,
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