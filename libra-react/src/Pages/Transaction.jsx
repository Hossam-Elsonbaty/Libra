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
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
export default function ContainerMain() {
  const libraToken= localStorage.getItem( "libraToken");
  const [globalFilter, setGlobalFilter] = useState('');
  const [products, setProducts] = useState([]);
  const [expandedRows, setExpandedRows] = useState(null);
  const notifyFirstWeight = () => {
    toast.success("تم تسجيل الوزنة الاولى");
  };
  const notifySecondWeight = () => {
    toast.success("تم تسجيل الوزنة الثانية");
  };
  const notifyFailedWeight = () => {
    toast.warning("خطأ في قراءة الوزنة ");
  };
  useEffect(() => {
    getAgentData();
  }, []);

  const getAgentData = ()=> {
    axios.get('http://127.0.0.1:8000/data-test',{headers:{
      'Authorization': `Token ${libraToken}`
      }})
    .then((response)=>{
      setProducts(response.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }

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
                <Column body={(rowData)=>actionTemplate(rowData)} headerClassName="w-10rem"></Column>
                <Column body={(rowData)=>actionTemplate2(rowData)} headerClassName="w-10rem"></Column>
            </DataTable>
        </div>
    );
};
  const getHeader =()=>{
    return (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} text />
      <Button icon="pi pi-minus" label="Collapse All" onClick={collapseAll} text />
      <div className="flex justify-content-end">
        <IconField iconPosition="left" >
          <InputIcon className="pi pi-search" />
          <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Global Search" />
        </IconField>
      </div>
    </div>
    )} 
    let header = getHeader()
    const actionTemplate = (rowData) => {
      const handleButtonClick = () => {
        axios.get('http://127.0.0.1:8000/data-scale-read1',{headers:{
          'Authorization': `Token ${libraToken}`
          },params: {
                    item_code:rowData.item_code,
                    BRAN_CODE:rowData.BRAN_CODE,
                    customer_id:rowData.customer_id,
                    sales_order_number:rowData.sales_order_number,
                    date_card:rowData.date_card
                  }})
        .then((response) => {
          // Create a new array of products with updated values
          const updatedProducts = products.map((product) => {
            if (product.sales_order_number === rowData.sales_order_number) {
              const updatedOrders = product.orders.map((order) => {
                if (order.object_index === rowData.object_index) {
                  return {
                    ...order,
                    frist_wight: response.data.firstWeight,
                    frist_time: response.data.firstWeighingTime,
                    qyt_wight: response.data.firstWeight
                  };
                }
                return order;
              });
              return {
                ...product,
                orders: updatedOrders,
              };
            }
            return product;
          });
          // Update the products state
          setProducts(updatedProducts);
          notifyFirstWeight();
        })
        .catch((err)=>{
          console.log(err);
          notifyFailedWeight();
        })
      };
    
      return (
        <div className="flex flex-wrap gap-2">
          <Button type="button" rounded onClick={handleButtonClick}>الوزنه الاولي</Button>
        </div>
      )
    };
    const actionTemplate2 = (rowData) => {
      const handleButtonClick = () => {
        axios.get('http://127.0.0.1:8000/data-scale-read2',{headers:{
          'Authorization': `Token ${libraToken}`
          },
          params: {
            item_code:rowData.item_code,
            BRAN_CODE:rowData.BRAN_CODE,
            customer_id:rowData.customer_id,
            sales_order_number:rowData.sales_order_number,
            date_card:rowData.date_card
          }
        })
        .then((response) => {
          // Create a new array of products with updated values
          const updatedProducts = products.map((product) => {
            if (product.sales_order_number === rowData.sales_order_number) {
              const updatedOrders = product.orders.map((order) => {
                if (order.object_index === rowData.object_index) {
                  console.log(order.frist_wight,response.data.secondWeight)
                  return {
                    ...order,
                    SECOUND_WIGHT: response.data.secondWeight,
                    SECOUND_time: response.data.secondWeighingTime,
                    qyt_wight: Number(order.frist_wight)-Number(response.data.secondWeight)
                  };
                }
                return order;
              });
              return {
                ...product,
                orders: updatedOrders,
              };
            }
            return product;
          });
          // Update the products state
          setProducts(updatedProducts);
          notifySecondWeight();
        })
        .catch((err)=>{
          console.log(err);
          notifyFailedWeight();
        })
      };
  return (
    <div className="flex flex-wrap gap-2">
      <Button type="button" severity="success" rounded onClick={handleButtonClick}>الوزنه الثانيه</Button>
    </div>
  );
  };
  return (
    <>
      <ToastContainer />
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
                <DataTable paginator rows={5} rowsPerPageOptions={[5, 10, 25]} scrollable scrollHeight="500px" globalFilter={globalFilter} value={products} expandedRows={expandedRows} onRowToggle={(e) => setExpandedRows(e.data)}
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
