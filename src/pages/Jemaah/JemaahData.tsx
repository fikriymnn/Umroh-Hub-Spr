import React, { useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'

import jemaahIcon from '../../assets/icons/user-single-neutral-male--close-geometric-human-person-single-up-user-male.svg'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { CircularProgressbarWithChildren, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaUser } from "react-icons/fa";
import { FiDownloadCloud} from "react-icons/fi";
import { MdOutlineFilterList } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
function JemaahData() {

  const total = 565;
  const online = 365;
  const offline = 200;
  const percentage = (online / total) * 100;
  const dataBar = [
    { name: "Jan", value: 320 },
    { name: "Feb", value: 370 },
    { name: "Mar", value: 420 },
    { name: "Apr", value: 340 },
    { name: "Mei", value: 500 },
    { name: "Jun", value: 380 },
    { name: "Jul", value: 520 },
    { name: "Agu", value: 300 },
    { name: "Sep", value: 200 },
    { name: "Okt", value: 348 },
    { name: "Nov", value: 400 },
    { name: "Des", value: 490 },
    ];
    
    const data = [
  { id:1, name: "Bold text column", email: "Regular text column", phone: "Regular text column", gender: "Regular text column", ktp: "Regular text column", kk: "Regular text column", status: "Active" },
  { id:2, name: "Bold text column", email: "Regular text column", phone: "Regular text column", gender: "Regular text column", ktp: "Regular text column", kk: "Regular text column", status: "Inactive" },
    ];

  const [openFilter, setOpenFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Filter");

  const FilterOptions = ["Terbaru", "Terlama", "Ikhwan", "Akhwat"];

  return (
    <DefaultLayout>
      <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={jemaahIcon} alt="Jemaah icon" className="w-[20px] h-[20px]" />
          <h1 className="text-primary-blue font-medium">Jemaah</h1>
        </div>
      <div className="mt-[56px] w-11/12 grid grid-cols-4 h-fit mx-auto  gap-[46px] rounded-[30px]">
       <div className="bg-white rounded-[30px] shadow-[#3A4DE926] shadow-[0px_12px_34px_-10px] p-4 w-full h-[250px] text-center">
        <h2 className="font-semibold mb-4">Jemaah</h2>
        <div className="w-[170px] h-[150px] mx-auto">
            <CircularProgressbarWithChildren
            value={percentage}
            strokeWidth={12} 
            circleRatio={0.75} 
            styles={buildStyles({
                rotation: 0.625, 
                pathColor: "#2B43FF",
                trailColor: "#E9ECF1",
                strokeLinecap: "round",
            })}
            >
            <div className="flex flex-col items-center">
                <div className="bg-[#E9ECF1] p-3 rounded-full mb-1">
                <FaUser className="text-[#2B43FF] text-lg" />
                </div>
                <span className="text-xl font-bold">{total}</span>
            </div>
            </CircularProgressbarWithChildren>
        </div>
        <div className="flex justify-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#E9ECF1]"></div>
            <h5 className='text-[10px] font-medium text-gray-400'>Offline</h5>
            <h5 className="font-semibold text-[10px]">{offline}</h5>
            </div>
            <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#2B43FF]"></div>
            <h5 className='text-[10px] font-medium text-gray-400'>Online</h5>
            <h5 className="font-semibold text-[10px]">{online}</h5>
            </div>
        </div>
    </div>
      <div className="col-span-3 bg-white h-[250px] shadow-[#5680E029] shadow-[0px_4px_16.7px_0px] rounded-[30px] flex space-x-[20px] items-center px-4">
        <ResponsiveContainer width="80%" height={200}>
          <BarChart data={dataBar} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <XAxis dataKey="name" fontSize={10} fontWeight={500}/>
            <YAxis fontSize={10} fontWeight={500} />
            <Tooltip />
            <Bar dataKey="value" barSize={30} fill="url(#colorGradient)" radius={[30, 30, 0, 0]} />
            <defs>
              <linearGradient id="colorGradient" x1="1" y1="0" x2="0" y2="0">
                <stop offset="5%" stopColor="#174BB4" stopOpacity="1" />
                <stop offset="100%" stopColor="#3679FE" stopOpacity="1" />
            </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
       <div className="bg-white shadow-md rounded-lg overflow-hidden w-[130px] text-center">
        <div className="bg-[#FF2222] text-white text-sm">
            <select
            className="bg-[#FF2222] text-white text-[10px] font-medium w-full py-1 px-2 text-center focus:outline-none cursor-pointer"
            defaultValue="2026-10"
            >
            <option value="2026-10">Oktober 2026</option>
            <option value="2026-09">September 2026</option>
            <option value="2026-08">Agustus 2026</option>
            </select>
        </div>
        <div className="mt-2 text-[32px] font-bold">
            {dataBar.find((item) => item.name === "Okt")?.value}
        </div>
        <h1 className="font-medium text-[10px] mb-2">Jemaah Online</h1>
        </div>
      </div>
    </div> 
     <div className="py-4 bg-white w-11/12 mx-auto mt-[29px] rounded-xl shadow-sm">
      <div className="flex flex-col px-4 sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
        <div>
          <h2 className="text-lg flex items-center font-medium">Jemaah <span className="bg-[#F7FAFF] ms-2 text-[#0070FF] text-[11px] px-2 py-1 rounded-full">data</span></h2>
          <p className="text-[#667085] text-[14px] mt-2">Data Jemaah UmrohHub</p>
        </div>
        <div className="flex gap-2">
        <div className="flex items-center bg-[#E4F1FF]  px-3">
            <BiSearchAlt className="w-5 h-5 mr-2" />
            <input type="text" placeholder="Cari..." className="bg-[transparent] placeholder:text-[#001A4D] text-[10px] font-medium outline-none text-sm" />
          </div>
        <div className="relative"> 
          <button  onClick={() => setOpenFilter(!openFilter)} className="flex items-center gap-1 text-[#344054] font-medium px-3 py-2 text-sm">
            <MdOutlineFilterList className='w-6 h-6' /> {selectedFilter}
          </button>
           {openFilter && (
                              <div className="absolute mt-1 w-32 border shadow-black/25 shadow-[0px_4px_16.1px_0px] z-10">
                                  {FilterOptions.map((option) => (
                                      <div
                                          key={option}
                                          onClick={() => {
                                              setSelectedFilter(option);
                                              setOpenFilter(false);
                                          }}
                                          className={`px-4 py-2 mt-[2px] cursor-pointer shadow-black/25 shadow-[0px_4px_16.1px_0px] ${selectedFilter === option
                                                  ? "bg-[#1B50BA] font-medium text-white"
                                                  : "text-[#1B50BA] font-medium bg-white hover:bg-gray-100"
                                              }`}
                                      >
                                          {option}
                                      </div>
                                  ))}
                                
                              </div>
                          )}
        </div>
          <button className="flex items-center text-[#344054] font-medium gap-1 border px-3 py-2 rounded-lg text-sm">
            <FiDownloadCloud className='w-4 h-4'/> Export
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead className='bg-[#FCFCFD] border-[#EAECF0] '>
            <tr className="text-[#667085] text-[14px] font-medium text-left border-b">
              <th className="p-3">Nama Jemaah</th>
              <th className="p-3">Email</th>
              <th className="p-3">No Telepon</th>
              <th className="p-3">Gender</th>
              <th className="p-3">KTP</th>
              <th className="p-3">Kartu Keluarga</th>
              <th className="p-3">Status</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, idx) => (
              <tr key={idx} className="border-b text-[12px] font-medium last:border-none">
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3">{item.phone}</td>
                <td className="p-3">{item.gender}</td>
                <td className="p-3">{item.ktp}</td>
                <td className="p-3">{item.kk}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${
                      item.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full ${
                        item.status === "Active" ? "bg-green-500" : "bg-gray-500"
                      }`}
                    ></span>
                    {item.status}
                  </span>
                </td>
                <td className="p-3 text-[#667085] text-lg">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div> 
    </div>
    </DefaultLayout>
  )
}

export default JemaahData