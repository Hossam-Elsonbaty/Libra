import React,{Children, createContext, useState} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
export const Auth = createContext(null);

export function AuthProvider({children}) {
  const [fullName, setFullName] = useState();
  const storedToken = Cookies.get('token');
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
      localStorage.setItem("libraToken",response.data.token )
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const logout =(libraToken)=> {
    axios.post(`http://127.0.0.1:8000/user-logout`,{
    },{
      headers:{'Authorization': `Token ${libraToken}`,}
    })
    .then((response)=>{
      console.log(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <>
      <Auth.Provider value={{login,logout,signUp}}>{children}</Auth.Provider>
    </>
  )
}
