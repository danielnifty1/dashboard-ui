'use client';
import Image from "next/image";
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    Income: 4000,
    Expenses: 2400,
    
  },
  {
    name: 'Feb',
    Income: 3000,
    Expenses: 1398,
    
  },
  {
    name: 'Mar',
    Income: 2000,
    Expenses: 9800,
    
  },
  {
    name: 'Apr',
    Income: 2780,
    Expenses: 3908,
    
  },
  {
    name: 'May',
    Income: 1890,
    Expenses: 4800,
    
  },
  {
    name: 'Jun',
    Income: 2390,
    Expenses: 3800,
    
  },
  {
    name: 'July',
    Income: 3490,
    Expenses: 4300,
    
  },
  {
    name: 'July',
    Income: 3490,
    Expenses: 4300,
    
  },
  {
    name: 'Aug',
    Income: 3490,
    Expenses: 4300,
    
  },
  {
    name: 'Sep',
    Income: 3490,
    Expenses: 4300,
    
  },
  {
    name: 'Oct',
    Income: 3490,
    Expenses: 4300,
    
  },
  {
    name: 'Nov',
    Income: 3490,
    Expenses: 4300,
    
  },
  {
    name: 'Dec',
    Income: 3490,
    Expenses: 4300,
    
  },
];

const FinanceChart = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-full bg-white  rounded-lg p-4">
      <div className="flex justify-between items-center w-full gap-2">
        <h1 className="text-lg font-semibold">Finance</h1>
        <Image src="/moreDark.png" width={20} height={20} alt="" />
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10} />
          <YAxis  axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={20}/>
          <Tooltip />
          <Legend align="center" verticalAlign="top" wrapperStyle={{paddingTop:"1px",paddingBottom:"40px"}} style={{background:"lightgray"}} />
          
          <Line type="monotone" dataKey="Expenses" stroke="#fae27c" strokeWidth={5}  />
          <Line type="monotone" dataKey="Income" stroke="#c3ebfa" strokeWidth={5}/>
        </LineChart>
      </ResponsiveContainer>






    </div>
  );
};

export default FinanceChart;
