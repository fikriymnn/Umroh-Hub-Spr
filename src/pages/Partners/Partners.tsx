import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import mitraIcon from '../../assets/icons/user-group--user-group-meeting-leader (1).svg'
import { BsThreeDotsVertical } from 'react-icons/bs';

function Partners() {
    const packages = [
        {
            package_name: "PT AmanahJayal18",
            master_type_departure: { type_name: "18" },
            Mitra: { compamy_name: "Ert98845392" },
            quota_update: "20/03/2022",
            image: "/images/mitra1.png",
        }
];

    return (
      <DefaultLayout>
        <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={mitraIcon} alt="Jemaah icon" className="w-[20px] h-[20px]" />
          <h1 className="text-primary-blue font-medium">Mitra</h1>
        </div>
      
            <div className=" w-11/12 mt-[44px] mx-auto h-fit">
            <div className="w-full grid grid-cols-5 h-[288px] gap-[18px]">      
                <div className="col-span-2 bg-white flex flex-col items-center justify-center h-full rounded-[6px] shadow-black/25 shadow-[0px_4px_16.5px_2px]">
                            <img src={mitraIcon} alt="Mitra Icon" className="w-[80px] h-[80px]" />
                            <h1 className="text-[36px] font-medium text-[#1362FF]">100</h1>
                            <h2 className='text-[24px] font-medium text-[#001F5D]'>Mitra</h2>
                    </div>
                  <div className="col-span-3 grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-[#0A6BDB] to-[#3C97FF] h-full shadow-black/25 shadow-[0px_4px_16.5px_2px] rounded-[6px]"></div>
                    <div className="bg-gradient-to-br from-[#0A6BDB] to-[#3C97FF] h-full shadow-black/25 shadow-[0px_4px_16.5px_2px] rounded-[6px]"></div>
                    <div className="bg-gradient-to-br from-[#0A6BDB] to-[#3C97FF] h-full shadow-black/25 shadow-[0px_4px_16.5px_2px] rounded-[6px]"></div>
                    <div className="bg-gradient-to-br from-[#0A6BDB] to-[#3C97FF] h-full shadow-black/25 shadow-[0px_4px_16.5px_2px] rounded-[6px]"></div>
                    </div>
                    </div>
                <div className="w-full mt-[33px]">
                        <div className="grid grid-cols-12 bg-white text-[#031B4E] font-bold px-4 py-3 rounded-t-md shadow-[0px_0px_14.4px_2px] shadow-black/25">
                            <div className="text-center">No</div>
                            <div className="col-span-3 text-center">Nama Mitra</div>
                            <div className="col-span-2 text-center">Keberangkatan</div>
                            <div className="col-span-3 text-center">No Izin Mitra</div>
                            <div className="col-span-2 text-center">Waktu Bergabung</div>
                            <div></div>
                        </div>
                  {packages?.map((pckg, index) => (                 
                        <div className="grid grid-cols-12 items-center bg-white px-4 py-3 mt-3 shadow-[0px_0px_14.4px_2px] shadow-black/25 rounded-md mb-4">
                        <div className="font-bold text-[#031B4E] text-center">{index + 1}</div>
                        <div className="col-span-3 flex items-center gap-3">
                            <img
                            src={pckg?.image || "ngasal.png"} 
                            alt="Foto Mitra"
                            className="w-10 h-10 object-cover rounded-full"
                            />
                            <span className="text-[#031B4E] font-semibold">{pckg.package_name}</span>
                        </div>

                        <div className="col-span-2 text-center text-[#031B4E]">{pckg.master_type_departure.type_name}</div>
                        <div className="col-span-3 text-center text-[#031B4E]">{pckg.Mitra.compamy_name}</div>
                          <div className="col-span-2 text-center text-[#031B4E]">{pckg.quota_update}</div>
                          <div className="flex items-center justify-center">
                            <BsThreeDotsVertical className="text-[#565656] text-lg" />
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                  </div>
      </DefaultLayout>
  )
}

export default Partners