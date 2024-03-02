import React, { useState, useContext } from 'react';
import 'primeicons/primeicons.css';
import { NavLink, Link, useLocation } from "react-router-dom";
import Banner from './Banner';
import { Auth } from '../Context/Auth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const auth =useContext(Auth);
  const {logout} = auth;
  const showUserData = ()=>{
    setIsOpen(!isOpen)
  }
  // const handleLogout = ()=> {
  //   logout(localStorage.getItem('libraToken'))
  // }
  return (
    <>
      <div className={isOpen ? 'user-data active' : 'user-data'}>
        <Banner label="Logout" showBtn="true" handleButton={()=>logout(localStorage.getItem('libraToken'))}>
          <input
            autoComplete="off"
            spellCheck="false"
            className="control"
            type="text"
            placeholder={localStorage.getItem('fullName')}
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
