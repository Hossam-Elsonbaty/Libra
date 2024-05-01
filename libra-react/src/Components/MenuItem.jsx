import React, { useState } from 'react';

export default function MenuItem({ title,icon, submenuTitles }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sideBar-menu-item" onClick={toggleSubMenu}>
        <i className={`${icon}`}></i>
        <div className="sideBar-menu-item-right">
          <div className="sideBar-menu-item-name">
            <p>{title}</p>
          </div>
          <i className={`fa ${isOpen ? 'fa-angle-up' : 'fa-angle-down'}`}></i>
        </div>
      </div>
      <div
        className={`submenu-container ${isOpen ? 'open' : 'closed'}`}
        style={{
          maxHeight: isOpen ? `${submenuTitles.length * 40}px` : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease-in-out',
        }}
      >
        {submenuTitles.map((submenuTitle, index) => (
          <div className="sideBar-submenu-item" key={index}>
            <div className="sideBar-submenu-item-right">
              <div className="sideBar-submenu-item-name">
                <p>{submenuTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
