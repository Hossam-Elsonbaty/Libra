import React, { useState } from 'react';
import 'primeicons/primeicons.css';
import { NavLink, Link, useLocation } from "react-router-dom";
import Banner from './Banner';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const showUserData = ()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className={isOpen ? 'user-data active' : 'user-data'}>
        <Banner label="Logout" showBtn="true">
          <input
            autoComplete="off"
            spellCheck="false"
            className="control"
            type="text"
            placeholder="Mohamed Ahmed"
            disabled
          />
        </Banner>
      </div>
      <nav className='navbar'>
        <Link to="/" className="logo">
          <i className='pi pi-sitemap' style={{ fontSize: '3rem', color:'#ffff' }}></i>
        </Link>
        <div className='nav-links'>
          <ul>
            <li className={location.pathname==='/'? 'active':''}>
              <Link to="/">Settings</Link>
            </li>
            <li className={location.pathname==='/transaction'? 'active':''}>
              <Link to="transaction">Transaction</Link>
            </li>
          </ul>
        </div>
        <div className='user-container' onClick={showUserData}>
          <i className='pi pi-user'style={{ fontSize: '1.3rem', color:'#ffff' }}></i>
        </div>
      </nav>
    </>
  )
}
