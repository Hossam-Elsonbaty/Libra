import React from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
export default function Transaction() {
  const portInt = (e)=> {
    const value = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = value;
  } 
  return (
    <>
      <Navbar/>
      <div className="page">
        <div className='transaction-container'>
          <Banner label="Logout" showBtn="truet">
            <p className='weight-number'>
              000000
            </p>
            <div className='control-container'>
              <div className="col">
                <input
                  autoComplete="off"
                  spellCheck="false"
                  className="control"
                  type="text"
                  placeholder="Car Model"
                  disabled
                />
                <input
                  autoComplete="off"
                  spellCheck="false"
                  className="control"
                  type="text"
                  placeholder="Car Number"
                  disabled
                />
              </div>
              <div className="col">
                <input
                  autoComplete="off"
                  spellCheck="false"
                  className="control"
                  type="text"
                  placeholder="Client Name"
                  disabled
                />
                <input
                  autoComplete="off"
                  spellCheck="false"
                  className="control"
                  type="text"
                  placeholder="Weight Kind"
                  disabled
                />
              </div>
            </div>
          </Banner>
          <div className="control-btn">
            <button>Recet</button>
            <button>Scan</button>
          </div>
        </div>
      </div>
    </>
  )
}
