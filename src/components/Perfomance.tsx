"use client"
import Image from 'next/image';
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
 

const data = [
  { name: '1st Semester', value: 92,fill:"#c3ebfa" },
  { name: '2nd Semester', value: 8,fill:"#FAE27C" },

];


const Performance = () => {
  return (
     <div className="flex flex-col gap-4 w-full h-full bg-white  rounded-lg p-4 relative">
          <div className="flex justify-between items-center w-full gap-2">
            <h1 className="text-lg font-semibold">Performance</h1>
            <Image src="/moreDark.png" width={20} height={20} alt="" />
          </div>
    <ResponsiveContainer width="100%" height="100%">
    <PieChart width={400} height={400}>
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx="50%"
        cy="50%"
        innerRadius={70}
        fill="#8884d8"
       
      />
    </PieChart>
  </ResponsiveContainer>
  <div className='absolute top-1/2 left-1/2  transform  -translate-x-1/2 -translate-y-1/2  text-center'>
    <p className='text-3xl font-bold'>9.2</p>
    <p className='text-xm text-gray-300'>of 10 sax LTS</p>
  </div>
  <h2 className='font-medium absolute bottom-16 left-0 right-0 top-[250px] m-auto text-center'>1st Semester-2nd Semester</h2>
  </div>
  )
}

export default Performance
