import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export default function MenuItem({ title,icon, submenuTitles }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  function navToPage(navigatePage){
    navigate(navigatePage)
  }

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
            {submenuTitles.map((submenuTitle, index) => {
                // Check if the current URL path matches the submenuTitle navigate value
                const isActive = location.pathname === "/"+  submenuTitle.navigate;
                console.log(isActive,location.pathname,submenuTitle.navigate)

                return (
                    <div
                        onClick={() => navToPage(submenuTitle.navigate)}
                        className={`sideBar-submenu-item`} // Apply the 'active' class if isActive is true
                        key={index}
                    >
                        <div className="sideBar-submenu-item-right">
                            <div className="sideBar-submenu-item-name">
                                <p className={isActive ? 'active-title' : ''}>{submenuTitle.title}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </>
);
}
