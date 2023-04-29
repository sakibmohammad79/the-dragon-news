import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const registerUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logInUser = (email, password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut= () =>{
        setLoader(true);
        signOut(auth);
    }

    useEffect(()=>{
        const unsubscibe = onAuthStateChanged(auth, currentUser=>{
            console.log('on state chnage observer', currentUser);
            setUser(currentUser);
            setLoader(false);
        })
        return ()=>{
            return unsubscibe();
        }
    },[])

    const AuthInfo = {
        user,
        registerUser,
        logInUser,
        logOut,
        loader,
    };
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;