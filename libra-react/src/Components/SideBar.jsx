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
        <MenuItem title="الرئيسية" icon="fa fa-home" submenuTitles={[{title:"الرئيسية",navigate:"/"}]}/>
        <MenuItem title="الصفحات" icon="fa fa-file" submenuTitles={[{title:"بيانات العميل",navigate:"transaction"},{title:"بيانات جميع العملاء",navigate:""}]}/>
        {/* <MenuItem title="التطبيقات" icon="fa fa-th" submenuTitles={["Mailbox","Chat","FAQ"]}/> */}
        {/* <MenuItem title="UI Components" icon="fa fa-paint-brush" submenuTitles={["Elements","Components"]}/>
        <MenuItem title="Widgets" icon="fa fa-paint-brush" submenuTitles={["Chart boxes","Profile Box"]}/> */}
        <MenuItem title="التقارير" icon="fa fa-clipboard" submenuTitles={[{title:"التقارير",navigate:""}]}/>
        <MenuItem title="الاحصائيات" icon="fa fa-signal" submenuTitles={[{title:"الاحصائيات",navigate:""}]}/>
      </div>
    </div>
    </>
  )
}