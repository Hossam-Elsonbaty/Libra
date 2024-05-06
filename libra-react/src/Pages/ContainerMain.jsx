import React, { useContext, useState, useEffect, useRef } from 'react';
import SearchAndUserBar from './../Components/SearchAndUserBar';
import Rictangle from '../Components/Rictangle';
import SideBar from '../Components/SideBar';
import OneChart from '../Components/OneChart';
import TwoChart from '../Components/TwoChart';
export default function ContainerMain() {
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </head>
      <div className="main-page-container">
        <SideBar/>
        <main>
          <SearchAndUserBar/>
          <div className="dashboard-page">
            <div className="dashboard-page-container">
              <div className="rictangles-container">
                <Rictangle title="Total income" number={598000}/>
                <Rictangle title="Average income" number={100000}/>
                <Rictangle title="Sum income" number={70000}/>
                <Rictangle title="Derived income" number={360000}/>
              </div>
              <div className='charts-container'>
                <OneChart/>
                <TwoChart/>
              </div>
              {/*put here any component you want . routing must happen here*/}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}