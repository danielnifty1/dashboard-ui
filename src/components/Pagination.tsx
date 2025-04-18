import React from "react";

const Pagination = () => {
  return (
    <div className="p-4 justify-between items-center flex text-gray-400 ">
      <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Prev
      </button>

      <div className="flex gap-2 text-sm items-center">
        <button className="px-2 rounded-sm  bg-lamaSky text-sm">1</button>
        <button className="px-2 rounded-sm  ">2</button>
        <button className="px-2 rounded-sm  ">3</button>
        ...
        <button className="px-2 rounded-sm  ">10</button>
      </div>

      <button className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
};

export default Pagination;
