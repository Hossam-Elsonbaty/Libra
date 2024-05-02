import React, { useContext, useState } from 'react';

export default function SearchAndUserBar() {
  return (
    <>
      <div className="searchAndUser-container">
        <div className="search-container">
          <button className="search-button"><i className="fa fa-search"></i></button>
          <input type="text" className="search-input" placeholder="Search here..."/>
        </div>
        <div className="userSection">
          <div><i className="fa fa-bell"></i><div className="bell-notification"></div></div>
          <div><i class="fa fa-comment"></i><div className="comment-notification"></div></div>
          <div className="userImg">
            <img src="https://th.bing.com/th/id/OIP.4G05enziAqYAOfK58iNxQgHaHa?w=212&h=212&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
            <div  className="admin-settings-div">
              <div className="admin-welcome-div">
                <p className="admin-welcome-div-first-p">Welcome Admin !</p>
                <p className="admin-welcome-div-second-p">Travor james</p>
              </div>
              <div className="admin-buttons-div">
                <span><p>My Profile</p><i className="fa fa-user"></i></span>
                <span><p>Settings</p><i className="fa fa-cog"></i></span>
                <span><p>Logout</p><i className="fa fa-sign-out"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}