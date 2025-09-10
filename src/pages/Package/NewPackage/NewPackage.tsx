import React from "react";
import DefaultLayout from "../../../layout/DefaultLayout";
import packageIcon from "../../../assets/icons/Vector (3).svg";
import packageImage from "../../../assets/images/pexels-sultan-alhuthali-175963006-18274181.png";
import arrowIcon from "../../../assets/icons/Arrow_left_long.svg";
import useNewPackage from "../../../hooks/package/useNewPackage";
import { formatDate } from "../../../utils/formatDate";

const NewPackage: React.FC = () => {
  const {
    packages,
    filter,
    handleFilter,
    handleDetail
  } = useNewPackage();

  return (
    <DefaultLayout>
      <div className="w-full h-full">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={packageIcon} alt="dashboard icon" className="w-[20px] h-[20px]" />
          <h1 className="text-[#001F5D] font-medium">Dashboard</h1>
        </div>
        <div className="mt-[20px] w-11/12 mx-auto">
          <button className="flex items-center text-[#0D1C2E] hover:underline">
            <img src={arrowIcon} alt="arrows" className="w-[24px] h-[24px]" />
            <span className="font-medium text-[#001A4D] ms-3">Kembali</span>
          </button>
          <div className="flex items-center w-7/12 justify-between mt-[34px]">
            <h1 className="text-[20px] font-medium text-[#001F5D]">Paket Baru</h1>
            <div className="flex   gap-6 text-[#001F5D] font-medium text-sm">
              <button
                className={`border-b-4 ${filter === 'checked' ? 'border-[#001F5D] font-bold' : 'border-transparent'}`}
                onClick={() => handleFilter('checked')}
              >
                Baru
              </button>
              <button
                className={`border-b-4 ${filter === 'rejected' ? 'border-[#001F5D] font-bold' : 'border-transparent'}`}
                onClick={() => handleFilter('rejected')}
              >
                Di tolak
              </button>
              <button
                className={`border-b-4 ${filter === 'active' ? 'border-[#001F5D] font-bold' : 'border-transparent'}`}
                onClick={() => handleFilter('active')}
              >
                Di terima
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-12 bg-white shadow-[0px_0px_14.4px_2px] shadow-black/25 font-bold py-3 px-4 text-[#031B4E]">
            <div className="col-span-1 text-center">No</div>
            <div className="col-span-11">Daftar Paket baru</div>
          </div>

          {packages?.map((pckg, idx) => (
            <div
              key={pckg.id}
              className="mt-3 grid grid-cols-12 bg-white text-[#001A4D ] shadow-[0px_4px_8px_4px] shadow-black/25 rounded-lg px-3 items-center"
            >
              {/* No */}
              <div className=" text-center text-lg font-semibold">{idx + 1}</div>

              {/* Card Detail */}
              <div className="col-span-11 flex flex-row gap-4">
                <div className="">
                  <img
                    src={packageImage}
                    alt="paket"
                    className="object-cover w-[183px] h-[183px]"
                  />
                </div>
                <div className="flex flex-col font-medium justify-evenly items-start text-sm">
                  <div className="">
                    <p className="text-sm font-medium">Mitra</p>
                    <h2 className=" font-medium">{pckg?.Mitra?.compamy_name}</h2>
                  </div>
                  <div className="">
                    <p className=" font-medium">{pckg?.package_name}</p>
                    <p className="text-xs font-medium">{pckg?.master_category_departure?.category_name}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-evenly text-sm">
                  <p className="font-bold">{pckg?.price}</p>
                  <div className="flex flex-col justify-center text-sm">
                    <p>Tanggal keberangkatan</p>
                    <p className="font-semibold">{formatDate(String(pckg?.date_departure))}</p>
                  </div>
                </div>

                <div className="flex flex-col justify-evenly">
                  <p>{pckg?.quota}</p>
                  <div className="flex flex-col justify-center text-sm">
                    <p>Tanggal kepulangan</p>
                    <p className="font-semibold">{formatDate(String(pckg?.date_arrival))}</p>
                  </div>
                </div>

                <div className="flex items-center w-[250px] justify-center">
                  <button
                    onClick={() => handleDetail(Number(pckg?.id))}
                    className="bg-gradient-to-r from-[#003CB4] to-[#3679FE] text-white font-semibold text-sm px-4 py-2 rounded-full">
                    Lihat Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default NewPackage;
