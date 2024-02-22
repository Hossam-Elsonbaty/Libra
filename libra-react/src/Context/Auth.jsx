import React,{createContext} from 'react';

export const Auth = createContext(null);
export default function Auth() {

  const login =()=> {
  }
  const logout =()=> {
  }
  const signUp =()=> {
  }
  return (
    <>
      <Auth.Provider value={{login,logout,signUp}}></Auth.Provider>
    </>
  )
}
