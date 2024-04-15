import React, {useEffect, useState, useContext} from 'react';
import Navbar from '../Components/Navbar';
import axios from 'axios';
import { Scan } from '../Context/Scan';

export default function Transaction() {
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
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const getDetailData = (BRAN_CODE, customer_id, sales_order_number, date_card) => {
    axios.get(`http://127.0.0.1:8000/data-detail`, {
      headers: {
        'Authorization': `Token ${libraToken}`,
      },
      params: {
        BRAN_CODE,
        customer_id,
        sales_order_number,
        date_card
      }
    })
    .then((response) => {
      setDetailData(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }
  const handleScan = (item_code,BRAN_CODE, customer_id, sales_order_number, date_card)=> {
    axios.get(`http://127.0.0.1:8000/data-scale-read1`,{
      headers:{'Authorization': `Token ${libraToken}`},
      params:{
        item_code,
        BRAN_CODE,
        customer_id,
        sales_order_number,
        date_card
      }
    })
    .then((response)=>{
      setDetailData(detailData=>
        detailData.map((item)=>
        item_code === item.item_code ? 
          {...item,
            frist_wight:response.data.firstWeight,
            frist_time:response.data.firstWeighingTime
          } :item
        )
      )
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  const handleScan2 = (item_code,BRAN_CODE, customer_id, sales_order_number, date_card)=> {
    axios.get(`http://127.0.0.1:8000/data-scale-read2`,{
      headers:{'Authorization': `Token ${libraToken}`},
      params:{
        item_code,
        BRAN_CODE,
        customer_id,
        sales_order_number,
        date_card
      }
    })
    .then((response)=>{
      setDetailData(detailData=>
        detailData.map((item)=>
        item_code === item.item_code ? 
          {...item,
            SECOUND_WIGHT:response.data.secondWeight,
            SECOUND_time:response.data.secondWeighingTime
          } :item
        )
      )
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
                    <tr key={index} onClick={()=>getDetailData(key.BRAN_CODE,key.cusomer_id,key.sales_order_number,key.date_card)}>
                      <td>{key.sales_order_number}</td>
                      <td>{key.date_card}</td>
                      <td>{key.cusomer_id}</td>
                      <td>{key.cusomer_name}</td>
                      <td>{key.order_code}</td>
                      <td>{key.order_type}</td>
                      <td>{key.salse_man}</td>
                      <td>{key.car_number}</td>
                      <td>{key.DRIVER_NAME}</td>
                      <td>{key.hour_in}</td>
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
                      <td>{key.item_code}</td>
                      <td>{key.item_NAME}</td>
                      <td>{key.unite}</td>
                      <td>{key.max}</td>
                      <td>
                        <p>{key.frist_wight}KG</p>
                        <button className='scan' onClick={()=>handleScan(key.item_code,key.BRAN_CODE,key.customer_id,key.sales_order_number,key.date_card)}>إوزن</button>
                      </td>
                      <td>{key.frist_time}</td>
                      <td>
                        <p>{key.SECOUND_WIGHT}KG</p>
                        <button className='scan' onClick={()=>handleScan2(key.item_code,key.BRAN_CODE,key.customer_id,key.sales_order_number,key.date_card)}>إوزن</button>
                      </td>
                      <td>{key.SECOUND_time}</td>
                      <td>{key.frist_wight-key.SECOUND_WIGHT} KG</td>
                      <td>{key.qyt_wight}</td>
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
