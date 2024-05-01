import React, { useContext, useState } from 'react';

export default function SideBar() {
  return (
    <>
    <div className="sideBar">
      <div className="logo-container">
        <img src="https://demo.dashboardpack.com/finance-html/img/logo.png" alt=""/>
      </div>
      <div className="sideBar-menu">
        <div className="sideBar-menu-item">
          <i className="fa fa-home"></i>
          <div className="sideBar-menu-item-right">
            <div className="sideBar-menu-item-name">
              Dashborad
            </div>
            <i className="fa fa-angle-down"></i>
          </div>
        </div>
        <div className="sideBar-menu-item">
          <i className="fa fa-home"></i>
          <div className="sideBar-menu-item-right">
            <div className="sideBar-menu-item-name">
              Dashborad
            </div>
            <i className="fa fa-angle-down"></i>
          </div>
        </div>
        <div className="sideBar-menu-item">
          <i className="fa fa-home"></i>
          <div className="sideBar-menu-item-right">
            <div className="sideBar-menu-item-name">
              Dashborad
            </div>
            <i className="fa fa-angle-down"></i>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}