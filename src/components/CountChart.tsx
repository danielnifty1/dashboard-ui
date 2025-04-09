"use client";
const data = [
    {
        name: "Total",
        count: 106,
        fill: "white",
    uv: 100,

      },
  {
    name: "Girls",
    count: 53,
    fill: "#fae27c",
    pv: 4567,
    uv: 50,

  },
  {
    name: "Boys",
    count: 53,
    fill: "#c3ebfa",
    // pv: 4567,
    uv: 50,
     
  },
  
//   {
//     name: "25-29",
//     uv: 26.69,
//     pv: 4567,
//     fill: "#83a6ed",
//   }
];

const style = {
  top: "50%",
  right: '70%',
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

import React from "react";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";
import Image from "next/image";

const CountChart = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-full bg-white  rounded-xl p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center w-full gap-2">
        <h1 className="text-lg font-semibold">Students</h1>
        <Image
          src="/moreDark.png"
          alt=""
          width={20}
          height={20}
          className="cursor-pointer"
        />
      </div>

      {/* CHART */}
      <div className=" relative w-full h-[75%]">
        <ResponsiveContainer>
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={data}
          >
            <RadialBar
            //   minAngle={15}
            //   label={{ position: "insideStart", fill: "#fff" }} 
              background
            //   clockWise
              dataKey="uv"
            />
            {/* <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              wrapperStyle={style}
            /> */}
          </RadialBarChart>
        </ResponsiveContainer>
        <Image src="/malefemale.png" alt="" width={32} height={32} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className=" flex flex-row justify-between items-center p-1">
        <div className=" flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaSky rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Boys (55%)</h2>
        </div>

        <div className=" flex flex-col gap-1">
          <div className="w-5 h-5 bg-lamaYellow rounded-full" />
          <h1 className="font-bold">1,234</h1>
          <h2 className="text-xs text-gray-300">Girls (45%)</h2>
        </div>
      </div>

      {/* BUTTON */}
      <div></div>
    </div>
  );
};

export default CountChart;
