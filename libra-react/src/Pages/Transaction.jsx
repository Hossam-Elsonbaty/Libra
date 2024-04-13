import React, {useEffect, useState, useContext} from 'react';
import Navbar from '../Components/Navbar';
import Banner from '../Components/Banner';
import { Dropdown } from 'primereact/dropdown';
import axios from 'axios';
import { Scan } from '../Context/Scan';

export default function Transaction() {
  const [carNumber, setCarNumber] = useState(null);
  const [agentName, setAgentName] = useState(null);
  const [carModel, setCarModel] = useState(null);
  const [weightKind, setWeightKind] = useState(null);
  const [isScanned, setIsScanned ] = useState(false);
  const [agentData, setAgentData] = useState(null);
  const [detailData, setDetailData] = useState(null);
  const libraToken= localStorage.getItem( "libraToken");
  const scan =useContext(Scan);
  const {getScan,scanNumber,handleSubmit} = scan;
  useEffect(()=>{
    getAgentData();
  },[])
  const getAgentData = ()=> {
    axios.get('http://127.0.0.1:8000/data-test',{headers:{
      'Authorization': `Token ${libraToken}`
      }})
    .then((response)=>{
      setAgentData(response.data)
      console.log(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const getDetailData = (BRAN_CODE,PO_NO,PO_NO_DATE,POS_FIRM_CODE)=> {
    axios.get(`http://127.0.0.1:8000/data-detail`,{headers:{
      'Authorization': `Token ${libraToken}`,
      'master_pk': {BRAN_CODE,PO_NO,PO_NO_DATE,POS_FIRM_CODE}
    }})
    .then((response)=>{
      setDetailData(response.data);
      console.log(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const handleScan = (id)=> {
    axios.get(`http://127.0.0.1:8000/data-scale-read1/${id}`,{headers:{'Authorization': `Token ${libraToken}`}})
    .then((response)=>{
      setDetailData(response.data)
      console.log(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const handleScan2 = (id)=> {
    axios.get(`http://127.0.0.1:8000/data-scale-read2/${id}`,{headers:{'Authorization': `Token ${libraToken}`}})
    .then((response)=>{
      setDetailData(response.data)
      console.log(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const portInt = (e)=> {
    const value = e.target.value.replace(/[^0-9]/g, "");
    e.target.value = value;
  } 
  return (
    <>
      <Navbar/>
      <div className="transaction-container">
        <div className='tables-container'>
          <div className="outer-table">
            <table>
              <thead>
                <tr>
                  <th>رقم امر البيع</th>
                  <th>تاريخ الكارت</th>
                  <th>كود العميل</th>
                  <th>أسم العميل</th>
                  <th>كود</th>
                  <th>نوع امر البيع</th>
                  <th>المندوب</th>
                  <th>رقم السياره</th>
                  <th>أسم السائق</th>
                  <th>ساعة الدخول</th>
                </tr>
              </thead>
              <tbody>
                {agentData&&agentData.map((key,index)=>{
                  return(
                    <tr key={index} onClick={()=>getDetailData(key.BRAN_CODE,key.PO_NO,key.PO_NO_DATE,key.POS_FIRM_CODE)}>
                      <td>{key.Sales_Order_Number}</td>
                      <td>{key.Date_of_Card}</td>
                      <td>{key.Customer_Code}</td>
                      <td>{key.Customer_Name}</td>
                      <td>{key.Code}</td>
                      <td>{key.Sales_Order_Type}</td>
                      <td>{key.Customer_Name}</td>
                      <td>{key.Car_Number}</td>
                      <td>{key.Driver_Name}</td>
                      <td>{key.Entry_Time}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="outer-table">
            <table>
              <thead>
                <tr>
                  <th>كود الصنف</th>
                  <th>أسم الصنف</th>
                  <th>الوحده</th>
                  <th>الحد الأقصي للتحميل</th>
                  <th>الوزنه الأولي</th>
                  <th>وقت الوزنه الأولي</th>
                  <th>الوزنه الثانيه</th>
                  <th>وقت الوزنه الثانيه</th>
                  <th>صافي كمية الميزان</th>
                  <th>كمية الوزن</th>
                </tr>
              </thead>
              <tbody>
                {detailData&&detailData.map((key,index)=>{
                  return(
                    <tr key={index}>
                      <td>{key.Item_Code}</td>
                      <td>{key.Item_Name}</td>
                      <td>{key.Unit}</td>
                      <td>{key.Maximum_Load_Limit}</td>
                      <td>
                        {key.firstWeight?
                          <p>{key.firstWeight}</p>
                          :
                          <button className='scan' onClick={handleScan}>إوزن</button>
                        }
                      </td>
                      <td>{key.firstWeight}</td>
                      <td>
                        {key.secondWeight?
                          <p>{key.secondWeight}</p>
                          :
                          <button className='scan' onClick={handleScan2}>إوزن</button>
                        }
                      </td>
                      <td>{key.secondWeightTime}</td>
                      <td>{key.firstWeight-key.secondWeight} KG</td>
                      <td>{key.Item_Code}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
          {/* <Banner label="Logout" showBtn="truet">
            <p className='weight-number'>
              {scanNumber}
            </p>
            <div className='control-container'>
              <div className="col">
                <Dropdown value={agentName} onChange={(e) => setAgentName(e.value)} options={agentData&&agentData.agent_name} optionLabel="name" 
                  editable placeholder="Client Name" className="w-full md:w-14rem" />
                <Dropdown value={carModel} onChange={(e) => setCarModel(e.value)} options={agentData&&agentData.car_model} optionLabel="name" 
                  editable placeholder="Car Model" className="w-full md:w-14rem" />
              </div>
              <div className="col">
                <Dropdown value={weightKind} onChange={(e) => setWeightKind(e.value)} options={agentData&&agentData.weight_kind} optionLabel="name" 
                  editable placeholder="Wight kind" className="w-full md:w-14rem" />
                <Dropdown value={carNumber} onChange={(e) => setCarNumber(e.value)} options={agentData&&agentData.car_number} optionLabel="name" 
                  editable placeholder="Car Number" className="w-full md:w-14rem" />
              </div>
            </div>
          </Banner>
          <div className="control-btn">
            <button onClick={()=>handleSubmit(scanNumber,weightKind.name,carModel.name,agentName.name,carNumber.name,libraToken)}>Save</button>
            <button onClick={()=>getScan(libraToken)}>Scan</button>
          </div> */}
