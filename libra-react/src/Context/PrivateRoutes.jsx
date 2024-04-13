import { Outlet, Navigate, useLocation } from "react-router-dom";
import { Auth } from "./Auth";
import React, { useContext } from "react";

const PrivateRoutes = ()=>{
  const {user} = useContext(Auth);
  console.log(user);
  const location = useLocation();
  return(
    user ? <Outlet/> : <Navigate to= "/login" replace state={{path: location.pathname}}/>
  )
}
export default PrivateRoutes;