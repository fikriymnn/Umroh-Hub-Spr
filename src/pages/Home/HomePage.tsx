/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import dashboardIcon from "../../assets/icons/Home.svg";
import jemaahIcon from "../../assets/icons/User_fill (1).svg";
import mitraIcon from "../../assets/icons/user-group--user-group-meeting-leader.svg";
import packageIcon2 from "../../assets/icons/package_box_alt (1).svg";
import packageIcon3 from "../../assets/icons/package_box (1).svg";
import packageIcon4 from "../../assets/icons/package_box (2).svg";
import incomeIcon from "../../assets/icons/Money.svg";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Line, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
// import packageIconn from "../../assets/icons/Group 1000004478.svg"
import Example from '../../assets/images/pexels-sultan-alhuthali-175963006-18274181.png'
import promoIcon from "../../assets/icons/Lable.svg";
import hotelIcon from '../../assets/icons/Component 7 (1).svg'
import { ThumbsUp, MessageCircle, Eye } from "lucide-react";
import ExampleProfile from '../../assets/images/pexels-sultan-alhuthali-175963006-18274181.png'

const data = [
  { bulan: '', pendapatan: 0 },
  { bulan: "Jan", pendapatan: 52 },
  { bulan: "feb", pendapatan: 63 },
  { bulan: "mar", pendapatan: 73 },
  { bulan: "Apr", pendapatan: 64 },
  { bulan: "mei", pendapatan: 79 },
  { bulan: "juni", pendapatan: 72 },
  { bulan: "juli", pendapatan: 58 },
  { bulan: "agst", pendapatan: 52 },
  { bulan: "sep", pendapatan: 64 },
  { bulan: "okt", pendapatan: 58 },
  { bulan: "nov", pendapatan: 52 },
  { bulan: "des", pendapatan: 64 },
];

const HomePage: React.FC = () => {
  const years = ["2023", "2024", "2025"];
  const [selectedYear, setSelectedYear] = useState<string>(years[0]);
  const maxValue = Math.max(...data.map(d => d.pendapatan));
  const ticks = [];

  for (let i = 0; i <= maxValue;) {
    ticks.push(i);
    if (i < 100) {
      i += 20;
    } else {
      i += 5;
    }
  }

  
  const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agst", "Sep", "Okt", "Nov", "Des"]

  //data for pie chart  
  const data01 = [
    { name: 'Pesanan', value: 45 },
    { name: 'Paket Baru', value: 30 },
    { name: 'Paket aktif', value: 25 },
  ];

  const COLORS = ['#FF3CD8', '#3C97FF', '#F0E260'];
  const dataBar = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ]

  const gradientIds = ['promoGradient', 'plusGradient', 'regulerGradient'];
  return (
    <DefaultLayout>
      <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={dashboardIcon} alt="dashboard icon" className="w-[20px] h-[20px]" />
          <h1 className="text-primary-blue font-medium">Dashboard</h1>
        </div>
        <div className="w-full flex flex-col h-fit items-center">
          <div className="w-11/12 grid grid-cols-4 mt-[31px] gap-6">
            <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] h-[90px] px-[30px] py-[15px] flex items-center justify-between">

              <div className="flex-col flex">

                <h1 className="capitalize text-[10px] text-[#797979] font-medium">Jemaah Terdaftar</h1>
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">10</h1>

              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#5CE9FF63] flex items-center">

                <img src={jemaahIcon} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
             <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] h-[90px] px-[30px] py-[15px] flex items-center justify-between">

              <div className="flex-col flex">

                <h1 className="capitalize text-[10px] text-[#797979] font-medium">mitra terdaftar</h1>
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">8</h1>

              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#70FFEE63] flex items-center">

                <img src={mitraIcon} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
           
            <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] h-[90px] px-[30px] py-[15px] flex items-center justify-between">

              <div className="flex-col flex">

                <h1 className="capitalize text-[10px] text-[#797979] font-medium">Paket</h1>
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">22</h1>

              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#F370FF63] flex items-center">

                <img src={packageIcon2} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
            <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] h-[90px] px-[30px] py-[15px] flex items-center justify-between">

              <div className="flex-col flex">

                <h1 className="capitalize text-[10px] text-[#797979] font-medium">Pendapatan bulan ini</h1>
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">77</h1>
                <h1 className="capitalize text-[10px] text-[#797979] font-medium">mei</h1>
              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#70FFE763] flex items-center">

                <img src={incomeIcon} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
              <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] h-[90px] px-[30px] py-[15px] flex items-center justify-between">

              <div className="flex-col flex">

                <h1 className="capitalize text-[10px] text-[#797979] font-medium">paket aktif  </h1>
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">8</h1>

              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#FFBE7063] flex items-center">

                <img src={packageIcon3} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
            <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] h-[90px] px-[30px] py-[15px] flex items-center justify-between">

              <div className="flex-col flex">

                <h1 className="capitalize text-[10px] text-[#797979] font-medium">Paket promo</h1>
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">66</h1>

              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#70DF0263] flex items-center">

                <img src={promoIcon} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
           
             <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] h-[90px] px-[30px] py-[15px] flex items-center justify-between">

              <div className="flex-col flex">

                <h1 className="capitalize text-[10px] text-[#797979] font-medium">Jumlah paket selesai  </h1>
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">8</h1>

              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#FFBE7063] flex items-center">

                <img src={packageIcon3} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
             <div className="bg-white shadow-[-5px_2px_14px] shadow-black/25 w-full rounded-[7px] h-[90px] px-[30px] py-[15px] flex items-center justify-between">

              <div className="flex-col flex">

                <h1 className="capitalize text-[10px] text-[#797979] font-medium">Pesanan</h1>
                <h1 className="text-[19px] flex items-center font-medium text-[#202020]">8</h1>

              </div>
              <div className="w-[44px] h-[44px] rounded-full justify-center bg-[#FFBE7063] flex items-center">

                <img src={packageIcon4} alt="jemaah icon" className="w-[24px] h-[24px] " />
              </div>
            </div>
          </div>
          <div className="w-11/12 grid h-fit grid-cols-3 mt-[14px] gap-[14px]">
            <div className="w-full grid  gap-[12px] h-fit col-span-2">
              <div className="w-full h-full  bg-blue-200">
                <div className="w-full flex justify-between items-center px-[30px] py-[15px]">
                  <h1 className="text-[14px] font-bold">Paket Terbaru</h1>
                  <h4 className="text-[10px] font-medium text-[#3679FE]">Lihat Lebih Banyak</h4>
                  </div>
                 <div className="max-w-[760px] px-6">
                    <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
                      {[...Array(5)].map((_, idx) => (
                        <div
                          key={idx}
                          className="min-w-[260px] bg-white rounded-t-xl shadow-md flex-shrink-0"
                        >
                          <img
                            src={Example}
                            alt="paket"
                            className="w-full object-cover h-[100px]  rounded-t-xl"
                          />
                          <div className="p-4 space-y-1">
                            <h3 className="text-[12px] font-semibold">Umroh Paket Amanah</h3>
                            <div className="flex justify-between items-center w-8/12">
                              <div className="flex items-center space-x-1">
                            <img src={hotelIcon} alt="hotel icon" className="w-[10px] h-[10px]" />
                            <h1 className="text-[#EFF16E] text-[10px]">★ ★ ★ ★ ★</h1>
                            </div>
                            <div className="flex items-center space-x-1">
                            <img src={hotelIcon} alt="hotel icon" className="w-[10px] h-[10px]" />
                            <h1 className="text-[#EFF16E] text-[10px]">★ ★ ★ ★ ★</h1>
                            </div>
                            </div>
                            <div className="flex w-11/12 justify-between items-center">

                            <p className="text-[#545454] font-semibold text-[10px]">⏱ 10 Hari</p>
                            <p className="text-[#545454] font-semibold text-[10px]">🗓 20/10/2025 - 30/10/2025</p>
                            </div>
                            <p className="text-[#0069D9] font-bold text-lg">Rp32.000.000</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

              

                
              </div>
              <div className="w-full h-fit ">
                  <div className="bg-blue-200 col-span-4 w-full px-[30px] py-[15px]">
                      <h2 className="text-[14px] font-bold">Pendapatan Bulanan</h2>
                <div className="flex items-center justify-between mb-2">
                        <h2 className="text-[8px] ms-[20px] font-bold">Jt</h2>
                        <select
                          value={selectedYear}
                          onChange={(e) => setSelectedYear(e.target.value)}
                          className="bg-gradient-to-r from-[#008FE2] to-[#5CE9FF] text-white text-[10px] px-3 py-1 rounded-full outline-none cursor-pointer"
                        >
                          {years.map((year) => (
                            <option key={year} value={year} className="">
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                        <div className="">
                        <div className="pe-4">
                          <ResponsiveContainer width="100%" height={300}>
                            <AreaChart
                            
                              data={data}
                               margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
                            >
                              <defs>
                                <linearGradient id="colorPendapatan" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="30%" stopColor="#3C97FF" stopOpacity={1} />
                                  <stop offset="100%" stopColor="#5CE9FF00" stopOpacity={0} />
                                </linearGradient>
                              </defs>

                              <CartesianGrid
                                stroke="#e5e7eb"
                               strokeDasharray="0"

                              />

                                <XAxis
                                  dataKey="bulan"
                                  interval={0}
                                  tickLine={false}
                                  axisLine={{ stroke: '#e5e7eb' }}
                                  tick={{
                                    fill: '#000',
                                    fontSize: 11,
                                    dx: -23,
                                    color: '#000',
                                    fontWeight: 500
                                  }}
                                 
                                />

                              {/* <YAxis
                                className="text-[10px] font-medium text-[#8E8E8E]"
                                        domain={[0, 110]}
                                        tickCount={110}
                                        tickLine={false}
                                        width={30}
                                
                                      /> */}
                      
                      <YAxis
                          ticks={ticks}
                          tickLine={false}
                          axisLine={{ stroke: '#e5e7eb' }}
                          fontSize={10}
                          width={30}
                        />


                            <Tooltip
                              content={({ active, payload, label }) => {
                                if (active && payload && payload.length > 0) {
                                  const value = payload[0].value;
                                  if (value === 0) return null;

                                  return (
                                    <div className="rounded-md overflow-hidden shadow-lg text-sm w-[160px]">
                                      <div className="bg-[#0047AB] capitalize text-white font-medium px-3 py-1">
                                        {label}
                                      </div>
                                      <div className="bg-white px-3 py-2 text-center">
                                        <p className="text-[#0A6BDB] font-medium">Pendapatan</p>
                                        <p className="text-[#0A6BDB] font-bold">Rp 200.000</p>
                                      </div>
                                    </div>
                                  );
                                }
                                return null;
                              }}
                            />


                              <Area
                                type="linear"
                                dataKey="pendapatan"
                                stroke="none"
                                fill="url(#colorPendapatan)"

                                dot={(props: any) => {
                                  const { cx, cy, payload } = props;
                                  if (payload.pendapatan === 0) {
                                    return <circle cx={cx} cy={cy} r={0.0001} fill="none" />;
                                  }
                                  return (
                                    <circle
                                      cx={cx}
                                      cy={cy}
                                      r={3}
                                      fill="#0284c7"
                                      stroke="#fff"
                                      strokeWidth={1}
                                    />
                                  );
                                }}
                                activeDot={(props: any) => {
                                  const { cx, cy } = props;
                                  return (
                                    <circle
                                      cx={cx}
                                      cy={cy}
                                      r={10}
                                      fill="#0284c7"
                                      stroke="#fff"
                                      strokeWidth={2}
                                    />
                                  );
                                }}

                                dy={30}
                              />

                              <Line
                                type="monotone"
                                dataKey="pendapatan"
                                stroke="#0284c7"
                                strokeWidth={2}
                                dot={(props: any) => (
                                  <circle
                                    cx={props.cx}
                                    cy={props.cy}
                                    r={props.payload.pendapatan === 0 ? 0.0001 : 1.5}
                                    fill="#0284c7"
                                  />
                                )}
                              />

                            </AreaChart>
                          </ResponsiveContainer>

                              </div>
                                </div>
                </div>
                </div>
            </div>
            <div className="w-full h-fit bg-pink-100  px-[30px] pt-[15px] pb-[75px]">
              <div className="flex justify-between">

                <h1 className="text-[14px] font-bold">Statistik Paket</h1>
                <div className="flex space-x-2">
                  <select
                          className="bg-gradient-to-r from-[#008FE2] to-[#5CE9FF] text-white text-[10px] px-3 py-1 rounded-full outline-none cursor-pointer"
                        >
                          {months.map((month) => (
                            <option key={month} value={month} className="">
                              {month}
                            </option>
                          ))}
                        </select>
                <select
                          className="bg-gradient-to-r from-[#008FE2] to-[#5CE9FF] text-white text-[10px] px-3 py-1 rounded-full outline-none cursor-pointer"
                        >
                          {years.map((year) => (
                            <option key={year} value={year} className="">
                              {year}
                            </option>
                          ))}
                </select>             
                </div>
              </div>
              <div className="w-full h-[290px] flex flex-col border-b border-[#CFCFCF] mt-[36px] items-center justify-center">
                <div className="relative w-full justify-center flex space-y-1">
                  <div className="absolute top-24">

                    {data01.map((entry, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <span className="text-sm font-medium">{entry.value}%</span>
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: COLORS[index] }}
                        />
                        <span className="text-sm font-medium">{entry.name}</span>
                      </div>
                    ))}
                  </div>
                  </div>
                  <ResponsiveContainer width="100%" height="90%">
                    <PieChart>
                      <Pie
                        data={data01}
                        cx="50%"
                        cy="50%"
                        innerRadius={110}  
                        outerRadius={120}
                        labelLine={false}
                        stroke="false"
                        dataKey="value"
                      >
                        {data.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>

                 
              </div>
              <div className="w-full h-[200px] mt-[40px] flex flex-col items-center justify-center">
                 <ResponsiveContainer width="70%" height="100%">
                  <BarChart data={dataBar}>
                    <defs>
                      {/* Paket Promo */}
                      <linearGradient id="promoGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10F5EA" />
                        <stop offset="100%" stopColor="#4A98F1" />
                      </linearGradient>

                      {/* Paket Plus */}
                      <linearGradient id="plusGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#5CFFE4" />
                        <stop offset="100%" stopColor="#379989" />
                      </linearGradient>

                      {/* Paket Reguler */}
                      <linearGradient id="regulerGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10F5EA" />
                        <stop offset="100%" stopColor="#4A98F1" />
                      </linearGradient>
                    </defs>

        
                {/* <Tooltip /> */}
                <Bar
                  dataKey="uv"
                  radius={[10, 10, 0, 0]}
                  barSize={50}
                >
                  {dataBar.map((p, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={`url(#${gradientIds[index]})`}
                    />
                  ))}
                </Bar>
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-2 w-7/12">
                  <div className="flex w-full justify-between text-[10px] font-medium text-[#303030]">
                    <h4>Paket<br/>Promo</h4>
                    <h4>Paket<br/>Plus</h4>
                    <h4>Paket<br/>Reguler</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-11/12  bg-red-100 mt-[14px] gap-[14px] px-[30px] pt-[15px] pb-[48px]">
            <h2 className="text-[14px] font-bold">Forum</h2>
            <div className="flex space-x-4 max-w-full overflow-x-auto scrollbar-hide pt-4">

             <div className="bg-white shadow-black/25 shadow-[0px_1px_12px] rounded-xl p-6 max-w-2/5 space-y-4">
      <div className="flex items-center space-x-4">
        <img
          src={ExampleProfile}
          alt="profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-[14px]">OfalsBasmallah</p>
          <p className="text-xs text-[#0061CF]">Jemaah</p>
          <p className="text-xs text-[#030303]">20:00 &nbsp;&nbsp; 20-04-2024</p>
        </div>
      </div>
      <p className="text-sm">
        Alhamdulillah Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </p>


      <div className="flex space-x-6 pt-2">
        <div className="flex items-center space-x-1 text-sm text-[#00B3DB]">
          <button className="p-2 rounded-full bg-gradient-to-b from-[#004492] to-[#10F5EA]"> 
          <ThumbsUp className="w-4 h-4 stroke-white" />
          </button>
          <span className="font-medium text-[#00B3DB]">566</span>
          <span className="text-black">Reaksi</span>
        </div>
        <div className="flex items-center space-x-1 text-sm text-[#00B3DB]">
          <button className="p-2 rounded-full bg-gradient-to-b from-[#004492] to-[#10F5EA]"> 
          <MessageCircle className="w-4 h-4 stroke-white" />
          </button>
          <span className="font-medium text-[#00B3DB]">344</span>
          <span className="text-black">Balasan</span>
        </div>
        <div className="flex items-center space-x-1 text-sm text-[#00B3DB]">
          <button className="p-2 rounded-full bg-gradient-to-b from-[#004492] to-[#10F5EA]"> 
          <Eye className="w-4 h-4 stroke-white" />
          </button>
          <span className="font-medium text-[#00B3DB]">480</span>
          <span className="text-black">Dilihat</span>
        </div>
      </div>
            </div>
             <div className="bg-white shadow-black/25 shadow-[0px_1px_12px] rounded-xl p-6 max-w-2/5 space-y-4">
      <div className="flex items-center space-x-4">
        <img
          src={ExampleProfile}
          alt="profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-[14px]">OfalsBasmallah</p>
          <p className="text-xs text-[#0061CF]">Jemaah</p>
          <p className="text-xs text-[#030303]">20:00 &nbsp;&nbsp; 20-04-2024</p>
        </div>
      </div>
      <p className="text-sm">
        Alhamdulillah Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </p>


      <div className="flex space-x-6 pt-2">
        <div className="flex items-center space-x-1 text-sm text-[#00B3DB]">
          <button className="p-2 rounded-full bg-gradient-to-b from-[#004492] to-[#10F5EA]"> 
          <ThumbsUp className="w-4 h-4 stroke-white" />
          </button>
          <span className="font-medium text-[#00B3DB]">566</span>
          <span className="text-black">Reaksi</span>
        </div>
        <div className="flex items-center space-x-1 text-sm text-[#00B3DB]">
          <button className="p-2 rounded-full bg-gradient-to-b from-[#004492] to-[#10F5EA]"> 
          <MessageCircle className="w-4 h-4 stroke-white" />
          </button>
          <span className="font-medium text-[#00B3DB]">344</span>
          <span className="text-black">Balasan</span>
        </div>
        <div className="flex items-center space-x-1 text-sm text-[#00B3DB]">
          <button className="p-2 rounded-full bg-gradient-to-b from-[#004492] to-[#10F5EA]"> 
          <Eye className="w-4 h-4 stroke-white" />
          </button>
          <span className="font-medium text-[#00B3DB]">480</span>
          <span className="text-black">Dilihat</span>
        </div>
      </div>
              </div>
               <div className="bg-white shadow-black/25 shadow-[0px_1px_12px] rounded-xl p-6 max-w-2/5 space-y-4">
      <div className="flex items-center space-x-4">
        <img
          src={ExampleProfile}
          alt="profile"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="text-[14px]">OfalsBasmallah</p>
          <p className="text-xs text-[#0061CF]">Jemaah</p>
          <p className="text-xs text-[#030303]">20:00 &nbsp;&nbsp; 20-04-2024</p>
        </div>
      </div>
      <p className="text-sm">
        Alhamdulillah Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      </p>


      <div className="flex space-x-6 pt-2">
        <div className="flex items-center space-x-1 text-sm text-[#00B3DB]">
          <button className="p-2 rounded-full bg-gradient-to-b from-[#004492] to-[#10F5EA]"> 
          <ThumbsUp className="w-4 h-4 stroke-white" />
          </button>
          <span className="font-medium text-[#00B3DB]">566</span>
          <span className="text-black">Reaksi</span>
        </div>
        <div className="flex items-center space-x-1 text-sm text-[#00B3DB]">
          <button className="p-2 rounded-full bg-gradient-to-b from-[#004492] to-[#10F5EA]"> 
          <MessageCircle className="w-4 h-4 stroke-white" />
          </button>
          <span className="font-medium text-[#00B3DB]">344</span>
          <span className="text-black">Balasan</span>
        </div>
        <div className="flex items-center space-x-1 text-sm text-[#00B3DB]">
          <button className="p-2 rounded-full bg-gradient-to-b from-[#004492] to-[#10F5EA]"> 
          <Eye className="w-4 h-4 stroke-white" />
          </button>
          <span className="font-medium text-[#00B3DB]">480</span>
          <span className="text-black">Dilihat</span>
        </div>
      </div>
    </div>
            </div>
          </div>
          <div/>
        </div>
     </div>
    </DefaultLayout>
  );
};

export default HomePage;
