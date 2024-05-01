import React, { useContext, useState } from 'react';

export default function Rictangle({title,number}) {
  return (
    <>
      <span className="rictangle">
              <h3>{title}</h3>
              <h1>$ {number}</h1>
      </span>
    </>
  )
}