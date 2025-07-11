import TableSearch from "@/components/TableSearch";
import React from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { role, lessonsData } from "@/lib/data";
import FormModal from "@/components/FormModal";
const Roles={
    ADMIN:"ADMIN",
    STUDENT:"STUDENT",
    TEACHER:"TEACHER",
    PARENT:"PARENT"
}

type Lessions = {
  id: number;
  subject: number;
  class: string;
  teacher: string;
 
};
const colums = [
  {
    header: "Subject",
    accessor: "subject",
  },
  {
    header: "Class",
    accessor: "class",
    // className: "hidden md:table-cell",
  },

  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },

 
  {
    header: "Actions",
    accessor: "action",
  },
];
const LessionsListPage = () => {
  const renderRow = (item: Lessions) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="flex gap-4 p-4 items-center">
      
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.subject}</h3>
          
        </div>
      </td>

      <td className="md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>


      <td>
        <div className="flex gap-2 items-center">
          {/* <Link href={`/list/teacher/${item.id}`} className="">
            <button className="flex justify-center items-center rounded-full w-7 h-7 bg-lamaSky">
              <Image src="/edit.png" width={16} height={16} alt="" />
            </button>
          </Link> */}

          <FormModal table="lesson" type="update" data={item} />

          {
            role.ADMIN===Roles.ADMIN && (
            //   <button className="flex justify-center items-center rounded-full w-7 h-7 bg-lamaPurple">
            //   <Image src="/delete.png" width={16} height={16} alt="" />
            // </button>
            <FormModal table="lesson" type="delete" id={item.id} />
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
          All Lessons
        </h1>
        <div className="flex flex-col lg:flex-row md:flex-row items-center w-full md:w-auto gap-4">
          <TableSearch />
          <div className="flex gap-2 self-end">
            <button className="bg-lamaYellow rounded-full items-center justify-center overflow-hidden flex w-8 h-8 ">
              <Image src="/filter.png" width={16} height={16} alt="filter" />
            </button>

            <button className="bg-lamaYellow rounded-full items-center justify-center overflow-hidden flex w-8 h-8 ">
              <Image src="/sort.png" width={16} height={16} alt="filter" />
            </button>

           { role.ADMIN===Roles.ADMIN &&( 
            // <button className="bg-lamaYellow rounded-full items-center justify-center overflow-hidden p-1 ">
            //   <Image src="/plus.png" width={14} height={14} alt="filter" />
            // </button>

            <FormModal table="lesson" type="create" />
          )}
          </div>
        </div>
      </div>

      {/* LIST */}

      <div></div>

      {/* Pagination */}
      <Table columns={colums} renderRow={renderRow} data={lessonsData} />
      <Pagination />
    </div>
  );
};

export default LessionsListPage;
