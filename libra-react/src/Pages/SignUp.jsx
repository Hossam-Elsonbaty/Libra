import React,{useContext, useState} from 'react';
import  {PasswordStrength}  from '../Components/PasswordInput';
import logo from '../Images/logo.svg';
import { Auth } from '../Context/Auth';
export default function SignUp() {
  const  [fullName, setFullName] = useState()
  const  [username, setUsername] = useState()
  const  [password, setPassword] = useState()
  const auth =useContext(Auth);
  const {signUp} = auth;
  const handleSubmit = (e)=> {
    e.preventDefault();
    signUp(fullName, username, password);
  }
  const handleChange = (value) => setPassword(value);
  return (
    <>
      <div className="page" style={{height:'100dvh'}}>
        <div className="login-card">
          <img src={logo} />
          <h2>Sign Up</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="username">
              <input
                autoComplete="off"
                spellCheck="false"
                className="control"
                type="text"
                placeholder="Enter Your Name"
                onChange={(e)=>setFullName(e.target.value)}
              />
              <input
                autoComplete="off"
                spellCheck="false"
                className="control"
                type="text"
                placeholder="Username"
                onChange={(e)=>setUsername(e.target.value)}
              />
              <div id="spinner" className="spinner"></div>
            </div>
            <PasswordStrength placeholder="Password" onChange={handleChange} />
            <button className="control" type="submit">
              Join Now
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
