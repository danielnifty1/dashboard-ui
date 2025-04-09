import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { role, parentsData } from "@/lib/data";
const Roles={
    ADMIN:"ADMIN",
    STUDENT:"STUDENT",
    TEACHER:"TEACHER",
    PARENT:"PARENT"
}

type Parent = {
  id: number;
  students: string[];
  name: string;
  email?: string;
  phone: string;
  address: string;
};
const colums = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student Names",
    accessor: "students",
    className: "hidden md:table-cell",
  },

 
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];
const ParentsListPage = () => {
  const renderRow = (item: Parent) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex gap-4 p-4 items-center">
        
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-400">{item?.email}</p>
        </div>
      </td>

      <td className="hidden md:table-cell">{item.students.join(',')}</td>
      <td className="hidden md:table-cell">{item.phone}</td>

      <td className="hidden md:table-cell">{item.address}</td>

     

      <td>
        <div className="flex gap-2 items-center">
          <Link href={`/list/teacher/${item.id}`} className="">
            <button className="flex justify-center items-center rounded-full w-7 h-7 bg-lamaSky">
              <Image src="/view.png" width={16} height={16} alt="" />
            </button>
          </Link>

          {
            role.ADMIN===Roles.ADMIN && (
              <button className="flex justify-center items-center rounded-full w-7 h-7 bg-lamaPurple">
              <Image src="/delete.png" width={16} height={16} alt="" />
            </button>
            )
          }
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP  */}

      <div className="flex justify-between items-center ">
        <h1 className="hidden lg:block md:block font-semibold text-lg">
          All Parents
        </h1>
        <div className="flex flex-col lg:flex-row md:flex-row items-center w-full md:w-auto gap-4">
          <TableSearch />
          <div className="flex gap-2 self-end">
            <button className="bg-lamaYellow rounded-full items-center justify-center overflow-hidden p-1 ">
              <Image src="/filter.png" width={14} height={14} alt="filter" />
            </button>

            <button className="bg-lamaYellow rounded-full items-center justify-center overflow-hidden p-1 ">
              <Image src="/sort.png" width={14} height={14} alt="filter" />
            </button>

           { role.ADMIN===Roles.ADMIN &&( <button className="bg-lamaYellow rounded-full items-center justify-center overflow-hidden p-1 ">
              <Image src="/plus.png" width={14} height={14} alt="filter" />
            </button>)}
          </div>
        </div>
      </div>

      {/* LIST */}

      <div></div>

      {/* Pagination */}
      <Table columns={colums} renderRow={renderRow} data={parentsData} />
      <Pagination />
    </div>
  );
};

export default ParentsListPage;
