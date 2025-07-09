import React from "react";
import DefaultLayout from "../../layout/DefaultLayout";
import dashboardIcon from "../../assets/icons/Home.svg";
import packageIcon from "../../assets/icons/3d_box_fill.svg";
import orderIcon from "../../assets/icons/group_share.svg";
import rateIcon from "../../assets/icons/Star 166.svg";
import doneIcon from "../../assets/icons/Done_ring_round.svg";
const HomePage: React.FC = () => {
  return (
    <DefaultLayout>
      <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={dashboardIcon} alt="dashboard icon" className="w-[20px] h-[20px]" />
          <h1 className="text-primary-blue font-medium">Dashboard</h1>
        </div>
        <div className="w-full flex flex-col mt-[56px] h-full items-center">

          <div className="w-11/12 h-full grid grid-cols-3 mt-[66px] gap-4">
            <div className="bg-white shadow-[-1px_6px_19px] shadow-black/25 w-full pt-[42px] pb-[33px] flex flex-col items-center justify-center">
              <div className="flex">
                <div className="w-[80px] h-[70px] border-e-2 border-black flex items-center">

                <img src={packageIcon} alt="package icon" className="w-[61px] h-[61px] " />
                </div>
                <h1 className="text-[40px] flex items-center font-medium text-primary-blue ms-[21px]">10</h1>
             </div>
                <h1 className="capitalize text-[15px] mt-[22px] text-primary-blue">mitra terdaftar</h1>
            </div>
            <div className="bg-white shadow-[-1px_6px_19px] shadow-black/25 w-full pt-[42px] pb-[33px] flex flex-col items-center justify-center">
              <div className="flex">
                <div className="w-[80px] h-[70px] border-e-2 border-black flex items-center">

                <img src={orderIcon} alt="order icon" className="w-[61px] h-[61px] " />
                </div>
                <h1 className="text-[40px] flex items-center font-medium text-primary-blue ms-[21px]">10</h1>
             </div>
                <h1 className="capitalize text-[15px] mt-[22px] text-primary-blue">order berjalan</h1>
            </div>
            <div className="bg-white shadow-[-1px_6px_19px] shadow-black/25 w-full pt-[42px] pb-[33px] flex flex-col items-center justify-center">
              <div className="flex">
                <div className="w-[80px] h-[70px] border-e-2 border-black flex items-center">

                <img src={rateIcon} alt="rate icon" className="w-[61px] h-[61px] " />
                </div>
                <h1 className="text-[40px] flex items-center font-medium text-primary-blue ms-[21px]">10</h1>
             </div>
                <h1 className="capitalize text-[15px] mt-[22px] text-primary-blue">jamaah terdaftar</h1>
            </div>
            <div className="bg-white shadow-[-1px_6px_19px] shadow-black/25 w-full pt-[42px] pb-[33px] flex flex-col items-center justify-center">
              <div className="flex">
                <div className="w-[80px] h-[70px] border-e-2 border-black flex items-center">

                <img src={doneIcon} alt="done icon" className="w-[61px] h-[61px] " />
                </div>
                <h1 className="text-[40px] flex items-center font-medium text-primary-blue ms-[21px]">10</h1>
             </div>
                <h1 className="capitalize text-[15px] mt-[22px] text-primary-blue">Order selesai</h1>
            </div>
          </div>
        </div>
     </div>
    </DefaultLayout>
  );
};

export default HomePage;
