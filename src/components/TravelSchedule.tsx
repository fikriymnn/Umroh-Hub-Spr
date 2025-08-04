/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'

const TravelSchedule = ({ scheduleList }: any) => {
    return (
        <div className='w-full grid grid-cols-7 gap-5 mb-10'>
            <img src={scheduleList.image} alt={`Schedule Image`} className='w-full col-span-2 h-[230px]' />
            <div className="w-full">
                <h1 className="font-bold  capitalize text-[#004492]">
                    {scheduleList.hari}
                </h1>
            </div>
            <div className="w-full flex flex-col space-y-2">
                <h1 className="font-bold  capitalize text-[#004492]">
                    Waktu
                </h1>
                <h1 className='font-medium'>{scheduleList.waktu}</h1>
            </div>
            <div className="w-full flex flex-col space-y-2">
                <h1 className="font-bold  capitalize text-[#004492]">
                    Aktivitas
                </h1>
                <h1 className='font-medium'>{scheduleList.aktivitas}</h1>
            </div>
            <div className="w-full flex flex-col col-span-2 space-y-2">
                <h1 className="font-bold  capitalize text-[#004492]">
                    catatan
                </h1>
                <h1 className='font-medium'>{scheduleList.catatan}</h1>
            </div>
        </div>
    )
}

export default TravelSchedule
