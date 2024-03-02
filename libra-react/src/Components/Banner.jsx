import React from 'react'

export default function Banner({label,children,showBtn,handleButton}) {
  return (
    <div className="login-card">
      <div className="username">
        {children}
      </div>
      <button onClick={handleButton} className={showBtn==='true'?'control':'hidden'} type="button" >
        {label}
      </button>
    </div>
  )
}
