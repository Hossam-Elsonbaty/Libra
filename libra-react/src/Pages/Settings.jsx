import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';

export default function Settings() {
  const portInt = (e)=> {
    const value = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = value;
  } 
  return (
    <>
      <Navbar/>
      <div className="page">
        <Banner label="Submit">
          <input
            autoComplete="off"
            spellCheck="false"
            className="control"
            type="text"
            placeholder="IP"
          />
          <input
            onChange={(e)=>portInt(e)}
            autoComplete="off"
            spellCheck="false"
            className="control"
            type="text"
            placeholder="Port"
            id="myNumber"
          />
        </Banner>
      </div>
    </>
  )
}
