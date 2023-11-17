import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../assets/AuthProvider/AuthProvider";

const PrivateRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext)

    const location =useLocation()
    if(loading){
        return <div>
            <span className="loading loading-spinner loading-lg text-center"></span>

        </div>
    }
    if(user){
        return children;
        
    }
    
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivateRoute;