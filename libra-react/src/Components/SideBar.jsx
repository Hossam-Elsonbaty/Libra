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
        <MenuItem title="Dashboard" icon="fa fa-home" submenuTitles={["classic","minimal"]}/>
        <MenuItem title="Pages" icon="fa fa-file" submenuTitles={["Login","Register","Forgot password"]}/>
        <MenuItem title="Applications" icon="fa fa-th" submenuTitles={["Mailbox","Chat","FAQ"]}/>
        <MenuItem title="UI Components" icon="fa fa-paint-brush" submenuTitles={["Elements","Components"]}/>
        <MenuItem title="Widgets" icon="fa fa-paint-brush" submenuTitles={["Chart boxes","Profile Box"]}/>
        <MenuItem title="Forms" icon="fa fa-clipboard" submenuTitles={["Elements","Widgets"]}/>
        <MenuItem title="Charts" icon="fa fa-signal" submenuTitles={["Charts"]}/>
      </div>
    </div>
    </>
  )
}