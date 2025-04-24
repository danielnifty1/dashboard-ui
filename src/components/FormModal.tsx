"use client";
import React, { useState } from "react";
import Image from "next/image";
import TeacherForm from "./forms/TeacherForm";
import StudentForm from "./forms/StudentForm";

const FormModal = ({
  table,
  type,
  data,
  id,
}: {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}) => {
  const size = type === "create" ? "w-8 h-8 " : "w-7 h-7";
  const bgcolore =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";

  const [open, setOpen] = useState(false);

  const Form=()=>{
    return type==="delete" && id? (
      <form action="" className="p-4 flex flex-col gap-4 text-center ">
        <span className="text-center font-semibold">All Data will be lost. Are you sure you want to delete  this {table}?</span>
        <button className="w-max bg-red-700 text-white py-2 px-4  rounded-md border-none self-center">Delete</button>

      </form>
    ):type==="create" && table === "teacher" ? (
      <TeacherForm type="create"  />
    ) 
    : type === "update" && table === "teacher" ? (
      <TeacherForm type="update" data={data}  />
    )
     : type === "create" && table === "student" ? (
      <StudentForm type="create"   />
    )
     : type === "update" && table === "student" ? (
      <StudentForm type="update" data={data} />):""
    
    
    
  };

  return (
    <>
    <button
      className={`${size} flex justify-center items-center rounded-full ${bgcolore}`}
      onClick={() => setOpen(true)}
    >
      <Image alt="" width={16} height={16} src={`/${type}.png`} />
    </button>

    {
      open && (
        <div className="w-screen h-screen absolute left-0 right-0 top-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
          <div className="bg-white p-4 rounded-md shadow-lg w-[90%]   md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] relative">
            {/* <h2 className="text-lg font-semibold mb-4">{`${type} ${table}`}</h2> */}
            {/* Form content goes here */}
           <Form />

          <div className="top-4 right-4 absolute  cursor-pointer rounded-full" onClick={() => setOpen(false)}><Image src="/close.png" alt="" height={10} width={10} /></div>

          </div>

        </div>
      )
    }   
  
  
    </>
  );
};

export default FormModal;
