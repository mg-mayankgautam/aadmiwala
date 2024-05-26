import { useContext } from "react";
// import AuthContext from "../context/Authprovider";
import  AuthContext from "../context/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;