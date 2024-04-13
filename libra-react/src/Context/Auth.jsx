import React,{Children, createContext, useState, useRef, useEffect} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';
export const Auth = createContext(null);
export function AuthProvider({children}) {
  const [fullName, setFullName] = useState();
  const [isToast, setISToast] = useState(false);
  const [user, setUser] = useState(false);
  useEffect(() => {
    setISToast(false)
  },[])
  
  const navigate = useNavigate()
  const toast = useRef(null);
  const signUp =(fullName, username, password) => {
    axios.post('http://127.0.0.1:8000/user-registration',{
      first_name:fullName,
      username,
      password
    })
    .then((response)=>{
      localStorage.setItem("fullName",fullName )
      setFullName(response.data.first_name);
      console.log(response.data);
      navigate('/login',{replace : true})
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const login =(username, password)=> {
    axios.post('http://127.0.0.1:8000/user-login',{
      username,
      password
    })
    .then((response)=>{
      console.log(response.data);
      setFullName(response.data.user.username);
      localStorage.setItem("libraToken",response.data.token);
      navigate('/',{replace : true})
      setISToast(false);
      setUser(true)
    })
    .catch((err)=>{
      let isToast = true
      console.log(err);
      setISToast(isToast)
    })
  }
  const logout =(libraToken)=> {
    axios.post(`http://127.0.0.1:8000/user-logout`,{
    },{
      headers:{'Authorization': `Token ${libraToken}`,}
    })
    .then((response)=>{
      console.log(response.data);
      navigate('/login',{replace : true})
      localStorage.removeItem('libraToken');
      setFullName()
      setUser(false)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <>
      <Auth.Provider value={{login,logout,signUp,isToast,fullName,user}}>{children}</Auth.Provider>
    </>
  )
}
