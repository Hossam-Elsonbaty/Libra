import React from 'react';
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Legend, Tooltip, ResponsiveContainer } from 'recharts';

export default function OneChart() {
  const data = [
    { name: "Jan", price: 4000 },
    { name: "Feb", price: 3000 },
    { name: "Mar", price: 5000 },
    { name: "Apr", price: 6000 },
    { name: "May", price: 8000 },
    { name: "Jun", price: 7000 },
    { name: "Jul", price: 10000 },
    { name: "Aug", price: 12000 },
    { name: "Sep", price: 9000 },
    { name: "Oct", price: 11000 },
    { name: "Nov", price: 13000 },
    { name: "Dec", price: 15000 }
  ];

  return (
    <div className='chart-div'>
      <div className='chart-data-div'>
        <h3>AP and AR Balance</h3>
        <select name="" id="">
          <option value="">2024</option>
          <option value="">2023</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="5 5" stroke="#ddd" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="price" stroke="#007bff" fill="#007bff" fillOpacity={0.3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}