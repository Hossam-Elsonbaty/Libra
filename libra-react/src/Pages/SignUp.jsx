import React from 'react';
import  {PasswordStrength}  from '../Components/PasswordInput';
import logo from '../Images/logo.svg'
export default function SignUp() {
  const handleChange = (value) => console.log(value);
  return (
    <>
      <div className="page" style={{height:'100dvh'}}>
        <div className="login-card">
          <img src={logo} />
          <h2>Sign Up</h2>
          <form className="login-form">
            <div className="username">
              <input
                autoComplete="off"
                spellCheck="false"
                className="control"
                type="text"
                placeholder="Enter Your Name"
              />
              <input
                autoComplete="off"
                spellCheck="false"
                className="control"
                type="email"
                placeholder="Email"
              />
              <div id="spinner" className="spinner"></div>
            </div>
            <PasswordStrength placeholder="Password" onChange={handleChange} />
            <button className="control" type="button">
              Join Now
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
