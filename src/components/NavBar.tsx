import React from 'react'
import Image from 'next/image'

const NavBar = () => {
  return (
    <div className='flex w-full justify-between mb-4  '>
      {/* Search Bar */}
      <div className='hidden md:flex rounded-full  items-center text-sm ring-[1.5px] ring-gray-300 px-2 gap-2' >
        <Image src='/search.png' width={14} height={14} alt='image'/>
        <input className='bg-transparent w-[200px] h-full outline-none border-l-2 p-1' placeholder='search' />
      </div>

      {/* Icon and users */}
      <div className=' flex gap-4 items-center justify-end w-full  '>
        <div className='rounded-full bg-white w-7 h-7 justify-center items-center flex cursor-pointer'>
            <Image src="/message.png" width={20} height={20} alt='image' />
        </div>

        <div className='rounded-full bg-white w-7 h-7 justify-center items-center flex cursor-pointer relative'>
            <Image src="/announcement.png" width={20} height={20} alt='image' />
            <div className='absolute flex -top-3 -right-3 w-5 h-5 items-center justify-center cursor-pointer bg-purple-300 text-white rounded-full text-xs'>1</div>
        </div>

        <div className='flex flex-col'>
          <span className='text-xs leading-3 font-medium'>John Doa</span>
          <span className='text-[10px] text-gray-500'>Admin</span>
        </div>

        <div>
          <Image src="/avatar.png" height={36} width={36} alt='' className='rounded-full' />
        </div>
      </div>
      
    </div>
  )
}

export default NavBar
