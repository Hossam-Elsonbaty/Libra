import React,{useState, useContext} from 'react';
import logo from '../Images/Mobile login-bro.svg';
import { Auth } from '../Context/Auth';

export default function Login() {
  const  [phoneNumber, setPhoneNumber] = useState()
  const  [password, setPassword] = useState()
  const auth =useContext(Auth);
  const {login} = auth;
  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log(phoneNumber, password);
  }
  return (
    <>
      <div className="page" style={{height:'100dvh'}}>
        <div className="login-card">
          <img src={logo} />
          <h2>Login</h2>
          <form className="login-form">
            <div className="username" onSubmit={handleSubmit}>
              <input
                autoComplete="off"
                spellCheck="false"
                className="control"
                type="text"
                placeholder="Phone number"
                onChange={(e)=>setPhoneNumber(e.target.value)}
              />
              <input
                autoComplete="off"
                spellCheck="false"
                className="control"
                type="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <button className="control" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
