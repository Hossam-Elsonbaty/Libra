import React,{Children, createContext, useState} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
export const Auth = createContext(null);

export function AuthProvider({children}) {
  const [userToken, setUserToken] = useState();
  const storedToken = Cookies.get('token');
  const signUp =(fullName, userPhoneNumber, password) => {
    axios.post('',{
      fullName,
      userPhoneNumber,
      password
    })
    .then((response)=>{
      console.log(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const login =(phoneNumber, password)=> {
    axios.post('',{
      phoneNumber,
      password
    })
    .then((response)=>{
      console.log(response.data);
      // Cookies.set('userToken', response.data.token, { expires: 7 });
      Cookies.set('token', response.data.token, { expires: 7, secure: true, sameSite: 'strict', httpOnly: true });
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const logout =()=> {
    axios.post('',{
      userToken:storedToken
    })
    .then((response)=>{
      console.log(response.data);
      Cookies.remove('token');
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
