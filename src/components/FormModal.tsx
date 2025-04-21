import React from 'react'
import Image from 'next/image';

const FormModal = ({
    table,type, data,id}:
    {
        table:
        "teacher"
        |"student"
    |"parent"|"subject"|"class"|"lesson"|"exam"|"assignment"|"result"|"attendance"|"event"|"announcement",
    type:"create"|"update"|"delete",
    data?:any,
    id?:number
    }) => {
        const size=type==="create"? "w-8 h-8 " :"w-7 h-7";
        const bgcolore= type==="create"? "bg-lamaYellow": type==="update"?"bg-lamaSky":"bg-lamaPurple"
  return (
    
    <button className={`${size} flex justify-center items-center rounded-full ${bgcolore}`} >
        <Image alt="" width={16} height={16} src={`/${type}.png`} />
      
    </button>
  )
}

export default FormModal
