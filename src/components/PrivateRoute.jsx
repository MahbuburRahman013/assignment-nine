import { useContext } from "react";
import { Navigate , useLocation} from "react-router-dom";
import { ContextProvider } from "./AuthProvider";
import PropTypes from 'prop-types'


const PrivateRoute = ({children}) => {
     const {user} = useContext(ContextProvider)
     const location = useLocation();
     
      
     if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
     }


    return children;
};

PrivateRoute.propTypes={
    children:PropTypes.node,
}

export default PrivateRoute;