import React,{createContext, useState} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'
export const Scan = createContext(null);

export function ScanProvider({children}) {
  const [scanNumber, setScanNumber] = useState();
  const IpPort =(Ip,port,libraToken) => {
    axios.post('http://127.0.0.1:8000/setup',{
      ip:Ip,
      port
    },{
      headers:{'Authorization': `Token ${libraToken}`,}
    })
    .then((response)=>{
      console.log(response.status);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const getScan =(libraToken) => {
    axios.post('http://127.0.0.1:8000/reed-scale',{
    },{
      headers:{'Authorization': `Token ${libraToken}`,}
    })
    .then((response)=>{
      console.log(response.data);
      setScanNumber(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const handleSubmit =(scale_read,car_model,agent_name,car_number,weight_kind,libraToken) => {
    axios.post('http://127.0.0.1:8000/reed-record',{
      scale_read,weight_kind,
      car_model,agent_name,car_number
    },{
      headers:{'Authorization': `Token ${libraToken}`,}
    })
    .then((response)=>{
      console.log(response);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <>
      <Scan.Provider value={{IpPort,getScan,handleSubmit,scanNumber}}>{children}</Scan.Provider>
    </>
  )
}
