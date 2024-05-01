import React, { useContext, useState } from 'react';

export default function SearchAndUserBar() {
  return (
    <>
      <div className="searchAndUser-container">
        <div className="search-container">
          <button className="search-button"><i className="fa fa-search"></i></button>
          <input type="text" className="search-input" placeholder="Search here..."/>
        </div>
        <div className="userImg">
          <img src="https://th.bing.com/th/id/OIP.4G05enziAqYAOfK58iNxQgHaHa?w=212&h=212&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
        </div>
      </div>
    </>
  )
}