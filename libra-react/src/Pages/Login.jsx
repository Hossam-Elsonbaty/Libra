import React from 'react';
import logo from '../Images/Mobile login-bro.svg';

export default function Login() {
  const handleChange = (value) => console.log(value);
  return (
    <>
      <div className="page" style={{height:'100dvh'}}>
        <div className="login-card">
          <img src={logo} />
          <h2>Login</h2>
          <form className="login-form">
            <div className="username">
              <input
                autoComplete="off"
                spellCheck="false"
                className="control"
                type="text"
                placeholder="Username"
              />
              <input
                autoComplete="off"
                spellCheck="false"
                className="control"
                type="password"
                placeholder="Password"
              />
            </div>
            <button className="control" type="button">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
