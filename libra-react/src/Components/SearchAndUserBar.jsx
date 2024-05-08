import React, { useContext, useState } from 'react';

export default function SearchAndUserBar() {
  return (
    <>
      <div className="searchAndUser-container">
        <div className="search-container">
          {/* <button className="search-button"><i className="fa fa-search"></i></button>
          <input type="text" className="search-input" placeholder="Search here..."/> */}
          <div className="companyTitle">المنظومة الالكترونية لموازين شركة النصر للكيماويات</div>
        </div>
        <div className="userSection">
          <div><i className="pi pi-bell"></i><div className="bell-notification"></div></div>
          <div><i class="pi pi-comment"></i><div className="comment-notification"></div></div>
          <div className="userImg">
            <img src="https://th.bing.com/th/id/OIP.4G05enziAqYAOfK58iNxQgHaHa?w=212&h=212&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/>
            <div  className="admin-settings-div">
              <div className="admin-welcome-div">
                <p className="admin-welcome-div-first-p">مرحبا ادمن!</p>
                <p className="admin-welcome-div-second-p">محمد علي</p>
              </div>
              <div className="admin-buttons-div">
                <span><p>حسابي</p><i className="fa fa-user"></i></span>
                <span><p>الاعدادات</p><i className="fa fa-cog"></i></span>
                <span><p>تسجيل خروج</p><i className="fa fa-sign-out"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}