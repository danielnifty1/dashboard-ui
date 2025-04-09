'use client'
import React from 'react'

import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Image  from 'next/image';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events=[
    {
        id:1,
        title:"Lorem ispum",
        time:"12:00 PM - 2:00 PM",
        description:"Lorem ispum dolar sit amet consector adiptingi"
    },

    {
        id:2,
        title:"Lorem ispum",
        time:"12:00 PM - 2:00 PM",
        description:"Lorem ispum dolar sit amet consector adiptingi"
    },


    {
        id:3,
        title:"Lorem ispum",
        time:"12:00 PM - 2:00 PM",
        description:"Lorem ispum dolar sit amet consector adiptingi"
    },


]

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
  return ( 
    <div className='bg-white p-4 rounded-xl'>
    <Calendar onChange={onChange} value={value} />
      <div className='flex flex-col gap-4'>
        <div className='flex justify-between items-center '>
            <h1 className='font-semibold text-lg my-4'>Events</h1>
            <Image src="/moreDark.png" alt="image" width={20}  height={20} />

        </div>
        {events.map(e=>(
            <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple' key={e.id}>
                <div className='flex justify-between items-center'>
                    <h1 className='font-semibold text-gray-600'>{e.title}</h1>
                    <span className='text-gray-300 text-xs'>{e.time}</span>
                </div>
                <p className='mt-2 text-gray-400 text-sm'>{e.description}</p>

            </div>
        ))}

      </div>
    </div>
  )
}

export default EventCalendar
