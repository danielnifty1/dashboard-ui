import React from "react";
import Image from "next/image";
const events = [
  {
    id: 1,
    title: "Lorem ispum",
    time: "12-03-2025",
    description: "Lorem ispum dolar sit amet consector adiptingi",
  },

  {
    id: 2,
    title: "Lorem ispum",
    time: "12-03-2025",
    description: "Lorem ispum dolar sit amet consector adiptingi",
  },

  {
    id: 3,
    title: "Lorem ispum",
    time: "12-03-2025",
    description: "Lorem ispum dolar sit amet consector adiptingi",
  },
];

const Announcement = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-full bg-white  rounded-md p-2">
      <div className="flex justify-between items-center w-full gap-2">
        <h1 className="text-lg font-semibold">Announcement</h1>
        <span className="text-xs text-gray-300 cursor-pointer">View All</span>
      </div>

      <div className="mt-4 flex flex-col gap-4">
        {events.map((e) => (
          <div
            className="odd:bg-lamaSkyLight even:bg-lamaPurple rounded-md p-2"
            key={e.id}
          >
            <div className="flex justify-between items-center">
              <h1 className="font-semibold text-gray-600">{e.title}</h1>
              <div className="flex gap-2 items-center justify-center rounded-md bg-white p-1">
                <span className="text-gray-300 text-xs ">
                  {e.time}
                </span>
              </div>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcement;
