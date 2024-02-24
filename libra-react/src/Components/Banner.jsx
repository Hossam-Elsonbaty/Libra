import React from 'react'

export default function Banner({label,children}) {
  return (
    <div className="login-card">
      <div className="username">
        {children}
      </div>
      <button className="control" type="button" >
        {label}
      </button>
    </div>
  )
}
