import React from 'react'

export default function Banner({label,children,showBtn}) {
  return (
    <div className="login-card">
      <div className="username">
        {children}
      </div>
      <button className={showBtn==='true'?'control':'hidden'} type="button" >
        {label}
      </button>
    </div>
  )
}
