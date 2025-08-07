import React from 'react'
import DefaultLayout from '../../layout/DefaultLayout'
import packageIcon from '../../assets/icons/Vector (8).svg'
import { ResponsiveContainer, BarChart, Bar, Cell, XAxis, YAxis } from 'recharts';
import usePackage from '../../hooks/package/usePackage';

function Package() {
  const {
    packages
  } = usePackage();

  const years = ["2023", "2024", "2025"];
  const months = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agst", "Sep", "Okt", "Nov", "Des"]
  const dataBar = [
    {
      name: 'Paket A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Paket B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Paket C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
  ]

  // const gradientIds = ['promoGradient', 'plusGradient', 'regulerGradient'];
  return (
    <DefaultLayout>
      <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={packageIcon} alt="dashboard icon" className="w-[20px] h-[20px]" />
          <h1 className="text-primary-blue font-medium">Dashboard</h1>
        </div>
        <div className="mt-[56px] bg-blue-200 w-11/12 h-fit mx-auto py-[21px] px-[62px]">
          <div className="flex w-full justify-between">
            <h1 className="font-medium text-[#001F5D]">
              Paket Aktif
            </h1>
            <div className="flex space-x-[10px]">
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
          <div className="mt-8 w-full flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full h-[200px] leftflex flex-col justify-center">
              <ResponsiveContainer width="80%" height="100%">
                <BarChart
                  data={dataBar}
                  layout="vertical"
                  margin={{ top: 0, right: 30, left: 30, bottom: 0 }}
                  barSize={30}
                >
                  <defs>
                    <linearGradient id="promoGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#10F5EA" />
                      <stop offset="100%" stopColor="#4A98F1" />
                    </linearGradient>
                  </defs>

                  <YAxis
                    type="category"
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 14, fill: "#ffffff" }}
                    width={100}
                  />
                  <XAxis type="number" hide />
                  <Bar dataKey="uv" radius={[5, 50, 5, 5]}>
                    {dataBar.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill="url(#promoGradient)" />
                    ))}
                    {dataBar.map((entry, index) => (
                      <text
                        key={`label-${index}`}
                        // x={(entry.uv * 3.8)} 
                        // y={index * 55 + 25}
                        textAnchor="end"
                        fill="#ffffff"
                        fontSize={12}
                        fontWeight="bold"
                      >
                        {entry.uv}%
                      </text>
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex gap-10">
              <div className="text-center">
                <h2 className="text-[#008080] font-bold text-3xl">456</h2>
                <p className="text-sm text-[#008080] font-medium">Paket</p>
              </div>
              <div className="text-center">
                <h2 className="text-[#001F5D] font-bold text-3xl">454</h2>
                <p className="text-sm text-[#001F5D] font-medium">Dikonfirmasi</p>
              </div>
              <div className="text-center">
                <h2 className="text-[#801717] font-bold text-3xl">2</h2>
                <p className="text-sm text-[#801717] font-medium">Ditolak</p>
              </div>
            </div>
          </div>


        </div>
        <div className="w-10/12 mx-auto mt-[30px] space-y-[36px] h-full flex flex-col ">
          <div className="flex justify-between">
            <div className="flex space-x-[35px]">
              <h1 className="font-medium text-[15px] text-primary-blue">Paket Reguler</h1>
              <h1 className="font-medium text-[15px] text-primary-blue">Paket Plus</h1>
              <h1 className="font-medium text-[15px] text-primary-blue">Paket Promo</h1>
            </div>
            <div className="flex items-center space-x-[15px]">
              <button className='bg-[#FF2A2A] w-[33px] h-[33px] rounded-full text-white font-medium'>8</button>
              <h1 className="font-medium text-[15px] text-primary-blue">Paket Baru</h1>
            </div>
          </div>
          {packages?.map((pckg, index) => (
            <div className="" key={index}>
              <div className="grid grid-cols-12 bg-white text-[#031B4E] font-bold px-4 py-3 rounded-t-md shadow-[0px_0px_14.4px_2px] shadow-black/25">

                <div className="text-center">No</div>
                <div className="col-span-4 text-center">Nama Paket</div>

                <div className="col-span-3 text-center">Mitra</div>
                <div className="col-span-2 text-center">Harga Paket</div>
                <div className="text-center col-span-2">Jemaah</div>

              </div>
              <div className={`items-center bg-white px-4 py-3 mt-3  hover:w-[1080px] shadow-[0px_0px_14.4px_2px] shadow-black/25 rounded-md mb-4 transition-all duration-500 ease-in-out`}>

                <div className="grid grid-cols-12 items-center bg-white px-4 pb-5  mt-3 w-full ">

                  <div className="font-bold  text-[#031B4E] text-center">{index + 1}</div>

                  <div className="flex items-center gap-3 col-span-4">
                    <img
                      src={packageIcon}
                      alt="ikon paket"
                      className="w-10 h-10 object-cover rounded"
                    />
                    <div className="col-span-2">
                      <p className="font-bold text-[#031B4E]">{pckg?.package_name}</p>
                      <p className="text-sm text-gray-500">{pckg?.master_type_departure?.type_name}</p>
                    </div>
                  </div>

                  <div className="font-semibold col-span-3 text-[#031B4E] text-center">
                    {pckg?.Mitra?.compamy_name}
                  </div>
                  <div className="font-semibold col-span-2 text-[#031B4E] text-center">Rp {pckg?.price?.toLocaleString('id-ID')}</div>
                  <div className="font-semibold col-span-2 text-[#031B4E] text-center">{pckg?.quota_update}/{pckg?.quota}</div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  )
}

export default Package