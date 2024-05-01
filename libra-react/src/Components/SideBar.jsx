import React, { useContext, useState } from 'react';
import MenuItem from './MenuItem';

export default function SideBar() {
  return (
    <>
    <div className="sideBar">
      <div className="logo-container">
        <img src="https://demo.dashboardpack.com/finance-html/img/logo.png" alt=""/>
      </div>
      <div className="sideBar-menu">
        <MenuItem title="Dashboard" submenuTitles={["classic","minimal"]}/>
        <MenuItem title="Dashboard" submenuTitles={["classic","minimal"]}/>
        <MenuItem title="Dashboard" submenuTitles={["classic","minimal"]}/>
        <MenuItem title="Dashboard" submenuTitles={["classic","minimal"]}/>
        <MenuItem title="Dashboard" submenuTitles={["classic","minimal"]}/>
      </div>
    </div>
    </>
  )
}