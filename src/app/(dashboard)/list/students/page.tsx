import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { role, teachersData,studentsData } from "@/lib/data";
const Roles={
    ADMIN:"ADMIN",
    STUDENT:"STUDENT",
    TEACHER:"TEACHER",
    PARENT:"PARENT"
}

type Student = {
  id: number;
  studentId: number;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
};
const colums = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },

  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },

  {
    header: "Class",
    accessor: "class",
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
const StudentsListPage = () => {
  const renderRow = (item: Student) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex gap-4 p-4 items-center">
        <Image
          src={item.photo}
          width={10}
          height={10}
          alt=""
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover "
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-400">{item?.email}</p>
        </div>
      </td>

      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>

      <td className="hidden md:table-cell">{item.class}</td>

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
          All Students
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
      <Table columns={colums} renderRow={renderRow} data={studentsData} />
      <Pagination />
    </div>
  );
};

export default StudentsListPage;
