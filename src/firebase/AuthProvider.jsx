import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";


export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [User, setUser] = useState(null)

    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)

    }
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)

    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            // setLooding(false)
          });
        return () => {
            unsubscribe()
        }
    },[])
    const logOut = () => {
        return signOut(auth)
    }

    const userInfo = {
        creatUser,
        userLogin,
        googleLogin,
        logOut,
        User,
        setUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;