/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import LoodingComponent from "../Component/Looding/Looding";


const PrivateRoute = ({children}) => {
    const {User,Looding} = useContext(AuthContext)
    const location = useLocation()

    if(Looding){
        return <LoodingComponent></LoodingComponent>
    }

    if(User) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};
PrivateRoute.propTypes = {
    children:PropTypes.object.isRequired
}
export default PrivateRoute;