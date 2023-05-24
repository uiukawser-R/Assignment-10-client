import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContex=createContext(null);
const auth =getAuth(app);
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null);

const createUser =(email, password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}

const googleProvider= new GoogleAuthProvider();
const githubProvider= new GithubAuthProvider();


const signIn = (email, password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}


const logOut=()=>{
    return signOut(auth);
}


useEffect(()=>{
   const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
        // console.log('Logged in user inside auth state observer',loggedUser);
        setUser(loggedUser);
    })
    return ()=>{
        unsubscribe();
    }

},[])


    const authInfo={

        user,
        createUser,
        signIn,
        logOut,
        googleProvider,
        githubProvider
        
    }

    return (
        <AuthContex.Provider value={authInfo}>
           {children} 
        </AuthContex.Provider>
    );
};

export default AuthProvider;
