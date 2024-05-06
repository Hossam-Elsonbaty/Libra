// import React, {useEffect, useState, useContext} from 'react';
// import Navbar from '../Components/Navbar';
// import axios from 'axios';
// import { Scan } from '../Context/Scan';

// export default function Transaction() {
//   const [agentData, setAgentData] = useState(null);
//   const [detailData, setDetailData] = useState(null);
//   const libraToken= localStorage.getItem( "libraToken");
//   const scan =useContext(Scan);
//   const {getScan,scanNumber,handleSubmit} = scan;
//   useEffect(()=>{
//     getAgentData();
//   },[])
//   const getAgentData = ()=> {
//     axios.get('http://127.0.0.1:8000/data-test',{headers:{
//       'Authorization': `Token ${libraToken}`
//       }})
//     .then((response)=>{
//       setAgentData(response.data)
//     })
//     .catch((err)=>{
//       console.log(err);
//     })
//   }
//   const getDetailData = (BRAN_CODE, customer_id, sales_order_number, date_card) => {
//     axios.get(`http://127.0.0.1:8000/data-detail`, {
//       headers: {
//         'Authorization': `Token ${libraToken}`,
//       },
//       params: {
//         BRAN_CODE,
//         customer_id,
//         sales_order_number,
//         date_card
//       }
//     })
//     .then((response) => {
//       setDetailData(response.data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   }
//   const handleScan = (item_code,BRAN_CODE, customer_id, sales_order_number, date_card)=> {
//     axios.get(`http://127.0.0.1:8000/data-scale-read1`,{
//       headers:{'Authorization': `Token ${libraToken}`},
//       params:{
//         item_code,
//         BRAN_CODE,
//         customer_id,
//         sales_order_number,
//         date_card
//       }
//     })
//     .then((response)=>{
//       setDetailData(detailData=>
//         detailData.map((item)=>
//         item_code === item.item_code ? 
//           {...item,
//             frist_wight:response.data.firstWeight,
//             frist_time:response.data.firstWeighingTime
//           } :item
//         )
//       )
//     })
//     .catch((err)=>{
//       console.log(err);
//     })
//   }
//   const handleScan2 = (item_code,BRAN_CODE, customer_id, sales_order_number, date_card)=> {
//     axios.get(`http://127.0.0.1:8000/data-scale-read2`,{
//       headers:{'Authorization': `Token ${libraToken}`},
//       params:{
//         item_code,
//         BRAN_CODE,
//         customer_id,
//         sales_order_number,
//         date_card
//       }
//     })
//     .then((response)=>{
//       setDetailData(detailData=>
//         detailData.map((item)=>
//         item_code === item.item_code ? 
//           {...item,
//             SECOUND_WIGHT:response.data.secondWeight,
//             SECOUND_time:response.data.secondWeighingTime
//           } :item
//         )
//       )
//     })
//     .catch((err)=>{
//       console.log(err);
//     })
//   }
//   const portInt = (e)=> {
//     const value = e.target.value.replace(/[^0-9]/g, "");
//     e.target.value = value;
//   } 
//   return (
//     <>
//       <Navbar/>
//       <div className="transaction-container">
//         <div className='tables-container'>
//           <div className="outer-table">
//             <table>
//               <thead>
//                 <tr>
//                   <th>رقم امر البيع</th>
//                   <th>تاريخ الكارت</th>
//                   <th>كود العميل</th>
//                   <th>أسم العميل</th>
//                   <th>كود</th>
//                   <th>نوع امر البيع</th>
//                   <th>المندوب</th>
//                   <th>رقم السياره</th>
//                   <th>أسم السائق</th>
//                   <th>ساعة الدخول</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {agentData&&agentData.map((key,index)=>{
//                   return(
//                     <tr key={index} onClick={()=>getDetailData(key.BRAN_CODE,key.cusomer_id,key.sales_order_number,key.date_card)}>
//                       <td>{key.sales_order_number}</td>
//                       <td>{key.date_card}</td>
//                       <td>{key.cusomer_id}</td>
//                       <td>{key.cusomer_name}</td>
//                       <td>{key.order_code}</td>
//                       <td>{key.order_type}</td>
//                       <td>{key.salse_man}</td>
//                       <td>{key.car_number}</td>
//                       <td>{key.DRIVER_NAME}</td>
//                       <td>{key.hour_in}</td>
//                     </tr>
//                   )
//                 })}
//               </tbody>
//             </table>
//           </div>
//           <div className="outer-table">
//             <table>
//               <thead>
//                 <tr>
//                   <th>كود الصنف</th>
//                   <th>أسم الصنف</th>
//                   <th>الوحده</th>
//                   <th>الحد الأقصي للتحميل</th>
//                   <th>الوزنه الأولي</th>
//                   <th>وقت الوزنه الأولي</th>
//                   <th>الوزنه الثانيه</th>
//                   <th>وقت الوزنه الثانيه</th>
//                   <th>صافي كمية الميزان</th>
//                   <th>كمية الوزن</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {detailData&&detailData.map((key,index)=>{
//                   return(
//                     <tr key={index}>
//                       <td>{key.item_code}</td>
//                       <td>{key.item_NAME}</td>
//                       <td>{key.unite}</td>
//                       <td>{key.max}</td>
//                       <td>
//                         <p>{key.frist_wight}KG</p>
//                         <button className='scan' onClick={()=>handleScan(key.item_code,key.BRAN_CODE,key.customer_id,key.sales_order_number,key.date_card)}>إوزن</button>
//                       </td>
//                       <td>{key.frist_time}</td>
//                       <td>
//                         <p>{key.SECOUND_WIGHT}KG</p>
//                         <button className='scan' onClick={()=>handleScan2(key.item_code,key.BRAN_CODE,key.customer_id,key.sales_order_number,key.date_card)}>إوزن</button>
//                       </td>
//                       <td>{key.SECOUND_time}</td>
//                       <td>{key.frist_wight-key.SECOUND_WIGHT} KG</td>
//                       <td>{key.qyt_wight}</td>
//                     </tr>
//                   )
//                 })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
import React, { useState, useEffect } from 'react';
import "primereact/resources/themes/tailwind-light/theme.css";
import SearchAndUserBar from './../Components/SearchAndUserBar';
import SideBar from '../Components/SideBar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';
export default function ContainerMain() {
  const [globalFilter, setGlobalFilter] = useState('');
  const [products, setProducts] = useState([]);
  const [expandedRows, setExpandedRows] = useState(null);
  useEffect(() => {
    setProducts([
      {
        sales_order_number: '1000',
        date_card: '2020-09-13',
        cusomer_id: '112',
        cusomer_name: 'ناشمثين الحسوبي',
        order_code: "65487",
        order_type: 'Accessories',
        salse_man:"ريمص علي",
        car_number: "24",
        DRIVER_NAME: 'ناشبي',
        hour_in: '2020-09-13',
          orders: [
              {
                item_code: '1000-1',
                item_NAME: 'f230fh0g3',
                unite: '2020-09-13',
                max: 65,
                frist_wight: '1000',
                frist_time: '2024-01-13',
                SECOUND_WIGHT: '2500',
                SECOUND_time: '2024-01-13',
                customer: 'David James',
                hour_in: '2024-01-13',
              },
              {
                item_code: '1000-2',
                item_NAME: 'f230fh0g3',
                unite: '2020-09-13',
                max: 65,
                frist_wight: '1000',
                frist_time: '2024-01-13',
                SECOUND_WIGHT: '2500',
                SECOUND_time: '2024-01-13',
                customer: 'David James',
                hour_in: '2024-01-13',
              },
              {
                item_code: '1000-3',
                item_NAME: 'f230fh0g3',
                unite: '2020-09-13',
                max: 65,
                frist_wight: '1000',
                frist_time: '2024-01-13',
                SECOUND_WIGHT: '2500',
                SECOUND_time: '2024-01-13',
                customer: 'David James',
                hour_in: '2024-01-13',
              }
          ]
      },{
        sales_order_number: '1001',
        date_card: '2021-09-13',
        cusomer_id: '122',
        cusomer_name: 'بثصثص ',
        order_code: "21",
        order_type: 'cars',
        salse_man:"نثصكا غثي",
        car_number: "224",
        DRIVER_NAME: 'ثفءسضشش',
        hour_in: '2025-09-13',
        orders: [
          {
            item_code: '1001-1',
            item_NAME: 'f230fh0g3',
            unite: '2020-09-13',
            max: 65,
            frist_wight: '1000',
            frist_time: '2024-01-13',
            SECOUND_WIGHT: '2500',
            SECOUND_time: '2024-01-13',
            customer: 'David James',
            hour_in: '2024-01-13',
          },
          {
            item_code: '1001-2',
            item_NAME: 'f230fh0g3',
            unite: '2020-09-13',
            max: 65,
            frist_wight: '1000',
            frist_time: '2024-01-13',
            SECOUND_WIGHT: '2500',
            SECOUND_time: '2024-01-13',
            customer: 'David James',
            hour_in: '2024-01-13',
          },
          {
            item_code: '1001-3',
            item_NAME: 'f230fh0g3',
            unite: '2020-09-13',
            max: 65,
            frist_wight: '1000',
            frist_time: '2024-01-13',
            SECOUND_WIGHT: '2500',
            SECOUND_time: '2024-01-13',
            customer: 'David James',
            hour_in: '2024-01-13',
          }
      ]
    },])
  }, []);
  const expandAll = () => {
      let _expandedRows = {};
      products.forEach((p) => (_expandedRows[`${p.sales_order_number}`] = true));
      setExpandedRows(_expandedRows);
  };
  const collapseAll = () => {
      setExpandedRows(null);
  };
  const allowExpansion = (rowData) => {
      return rowData.orders.length > 0;
  };
  const rowExpansionTemplate = (data) => {
    return (
        <div className="p-3">
            <h5>Details for {data.sales_order_number}</h5>
            <DataTable value={data.orders}>
                <Column field="item_code" header="كود الصنف" sortable></Column>
                <Column field="item_NAME" header="أسم الصنف" sortable></Column>
                <Column field="unite" header="الوحده" sortable></Column>
                <Column field="max" header="الحد الأقصي للتحميل" sortable></Column>
                <Column field="frist_wight" header="الوزنه الأولي" sortable></Column>
                <Column field="frist_time" header="وقت الوزنه الأولي" sortable></Column>
                <Column field="SECOUND_WIGHT" header="الوزنه الثانيه" sortable></Column>
                <Column field="SECOUND_time" header="وقت الوزنه الثانيه" sortable></Column>
                <Column field="customer" header="صافي كمية الميزان" sortable></Column>
                <Column field="qyt_wight" header="كمية الوزن" sortable></Column>
                <Column body={(nodeData)=>actionTemplate(nodeData)} headerClassName="w-10rem"></Column>
                <Column body={(nodeData)=>actionTemplate2(nodeData)} headerClassName="w-10rem"></Column>
            </DataTable>
        </div>
    );
};
  const header = (
      <div className="flex flex-wrap justify-content-end gap-2">
          <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} text />
          <Button icon="pi pi-minus" label="Collapse All" onClick={collapseAll} text />
          <div className="flex justify-content-end">
                <IconField iconPosition="left">
                    <InputIcon className="pi pi-search" />
                    <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
                </IconField>
          </div>
      </div>
  );
  const actionTemplate = (key) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button type="button"   rounded onClick={()=>{
        console.log(key)
        setProducts([
          {
              id: '1000',
              code: 'f230fh0g3',
              name: 'Bamboo Watch',
              description: 'Product Description',
              price: 65,
              category: 'Accessories',
              quantity: 24,
              orders: [
                  {
                      id: '1000-0',
                      productCode: 'f230fh0g3',
                      date: '2090-09-13',
                      amount: 65,
                      quantity: 1,
                      customer: 'David James',
                  },
                  {
                      id: '1000-1',
                      productCode: 'f230fh0g3',
                      date: '2020-05-14',
                      amount: 130,
                      quantity: 2,
                      customer: 'Leon Rodrigues',
                  },
                  {
                      id: '1000-2',
                      productCode: 'f230fh0g3',
                      date: '2019-01-04',
                      amount: 65,
                      quantity: 1,
                      customer: 'Juan Alejandro',
                  },
                  {
                      id: '1000-3',
                      productCode: 'f230fh0g3',
                      date: '2020-09-13',
                      amount: 195,
                      quantity: 3,
                      customer: 'Claire Morrow',
                  }
              ]
          },])
      }}>الوزنه الاولي</Button>
    </div>
  )
  };
  const actionTemplate2 = (key) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button type="button" severity="success" rounded>الوزنه الثانيه</Button>
    </div>
  );
  };
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </head>
      <div className="main-page-container">
        <SideBar/>
        <main>
          <SearchAndUserBar/>
          <div className="dashboard-page">
            <div className="dashboard-page-container">
              <div className="card" >
                <DataTable  globalFilter={globalFilter} value={products} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
                    rowExpansionTemplate={rowExpansionTemplate}
                    dataKey="sales_order_number" header={header} tableStyle={{ minWidth: '60rem' }}>
                    <Column expander={allowExpansion} style={{ width: '5rem' }} />
                    <Column field="sales_order_number" header="رقم امر البيع" sortable />
                    <Column field="date_card" header="تاريخ الكارت" sortable />
                    <Column field="cusomer_id" header="كود العميل" sortable />
                    <Column field="cusomer_name" header="أسم العميل" sortable />
                    <Column field="order_code" header="كود" sortable />
                    <Column field="order_type" header="نوع امر البيع" sortable />
                    <Column field="salse_man" header="المندوب" sortable />
                    <Column field="car_number" header="رقم السياره" sortable />
                    <Column field="DRIVER_NAME" header="أسم السائق" sortable />
                    <Column field="hour_in" header="ساعة الدخول" sortable />
                </DataTable>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}