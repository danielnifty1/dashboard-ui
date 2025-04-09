import React from 'react'
import Image from 'next/image'

const TableSearch = () => {
  return (
    <div className='w-full md:w-auto flex rounded-full  items-center text-sm ring-[1.5px] ring-gray-300 px-2 gap-2' >
            <Image src='/search.png' width={14} height={14} alt='image'/>
            <input className='bg-transparent w-[200px] h-full outline-none border-l-2 p-1' placeholder='search' />
          </div>
  )
}

export default TableSearch
