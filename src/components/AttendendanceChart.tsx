"use client";

import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import Image from "next/image";

const data = [
  {
    name: "Mon",
    Present: 90,
    Absent: 70,
  },
  {
    name: "Tue",
    Present: 100,
    Absent: 6,
  },
  {
    name: "Wed",
    Present: 90,
    Absent: 75,
  },
  {
    name: "Thur",
    Present: 90,
    Absent: 75,
  },
  {
    name: "Fri",
    Present: 65,
    Absent: 55,
  },
  
];

const AttendendanceChart = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-full bg-white  rounded-lg p-4">
      <div className="flex justify-between items-center w-full gap-2">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" width={20} height={20} alt="" />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
      
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightgray"}} />
          <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop:"1px",paddingBottom:"40px"}} style={{background:"lightgray"}} />
          <Bar
            dataKey="Absent"
            fill="#fae27c"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
            legendType="circle"
            radius={[10,10,0,0]}
          />
          <Bar
            dataKey="Present"
            fill="#c3ebfa"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
            legendType="circle"
            radius={[10,10,0,0]}


          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendendanceChart;
