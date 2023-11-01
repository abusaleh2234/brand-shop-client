import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";
import PropTypes from 'prop-types';


export const AuthContext = createContext()
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    
    // const navigate = useNavigate()
    // const location = useLocation()
    const [User, setUser] = useState(null)
    const [Looding, setLooding] = useState(true)

    const creatUser = (email, password) => {
        setLooding(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    const userLogin = (email, password) => {
        setLooding(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    const googleLogin = () => {
        setLooding(true)
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLooding(false)
            // navigate(location?.state ? location?.state :  "/")
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
        setUser,
        Looding
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children:PropTypes.object.isRequired
}
export default AuthProvider;