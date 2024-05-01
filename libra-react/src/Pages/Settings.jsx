// import React, { useContext, useState } from 'react';
// import Navbar from '../Components/Navbar';
// import Banner from '../Components/Banner';
// import { Scan } from '../Context/Scan';

// export default function Settings() {
//   const [Ip, setIp] = useState()
//   const [port, setPort] = useState()
//   const scan =useContext(Scan);
//   const {IpPort} = scan;
//   const portInt = (e)=> {
//     const value = e.target.value.replace(/[^0-9]/g, "");
//     e.target.value = value;
//     setPort(value)
//   } 
//   return (
//     <>
//       <Navbar/>
//       <div className="page">
//         <Banner label="Submit" showBtn="true" handleButton={()=>IpPort(Ip,port,localStorage.getItem("libraToken"))}>
//           <input
//             onChange={(e)=>setIp(e.target.value)}
//             autoComplete="off"
//             spellCheck="false"
//             className="control"
//             type="text"
//             placeholder="IP"
//           />
//           <input
//             onChange={(e)=>portInt(e)}
//             autoComplete="off"
//             spellCheck="false"
//             className="control"
//             type="text"
//             placeholder="Port"
//             id="myNumber"
//           />
//         </Banner>
//       </div>
//     </>
//   )
// }
import React, { useContext, useState } from 'react';
import ContainerMain from './ContainerMain';

export default function Settings() {
  return (
    <>
    <ContainerMain/>
    </>
  )
}
