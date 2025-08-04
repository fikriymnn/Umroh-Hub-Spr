/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import DefaultLayout from "../../../../layout/DefaultLayout";
import detaildummyPackageIcon from "../../../../assets/icons/Vector (3).svg";
import packageExample from "../../../../assets/images/pexels-sultan-alhuthali-175963006-18274181.png";
// import vector from "../../../assets/images/Group (1).png";
// import TravelSchedule from "../../../../components/TravelSchedule";
import locationIcon from "../../../../assets/icons/Pin_alt.svg"
// import useDetailPackage from "../../../../hooks/package/useDetailPackage";
// import useDetailPackage from "../../../../hooks/package/useDetailPackage";
import { renderStarsHotels } from '../../../../utils/renderStarts';
import TravelSchedule from "../../../../components/TravelSchedule";
import RejectPackagePopUp from "../../../../components/Package/RejectPackagePopUp";
const DetailNewPackage: React.FC = () => {
  // const {
  //   dummyPackage,
  //   currentPage, setCurrentPage,
  //   totalPages,
  //   currentItems
  // } = useDetailPackage();

  const dummyPackage = {
    package_name: "Umrah Hemat 2025",
    price: 27500000,
    quota_update: 15,
    quota: 25,
    master_category_departure: { category_name: "Umrah" },
    duration: 9,
    date_departure: "2025-09-15",
    package_facilities: [
      { description: "Tiket pesawat PP" },
      { description: "Hotel bintang 4" },
      { description: "Makan 3x sehari" },
    ],
    package_hotels: [
      {
        master_hotel: {
          hotel_name: "Hotel Mekah Al-Madina",
          hotel_type: 4,
          description: "Mekah, dekat Masjidil Haram",
          facilities_general: [
            { description: "WiFi gratis" },
            { description: "Resepsionis 24 jam" }
          ],
          facilities_hotel: [
            { description: "AC & TV" },
            { description: "Kamar mandi dalam" }
          ]
        }
      }
    ],
  };

 const dummySchedule = [
  {
    hari: "Hari 1",
    waktu: "08:00 - 12:00",
    aktivitas: "Keberangkatan dari Jakarta ke Jeddah",
    catatan: "Harap berkumpul di Bandara Soekarno-Hatta 3 jam sebelum keberangkatan",
    image: "https://via.placeholder.com/300x230?text=Hari+1"
  },
  {
    hari: "Hari 2",
    waktu: "13:00 - 18:00",
    aktivitas: "Tiba di Jeddah, perjalanan ke Mekah",
    catatan: "Persiapan umrah dan istirahat di hotel",
    image: "https://via.placeholder.com/300x230?text=Hari+2"
  },
  {
    hari: "Hari 3",
    waktu: "08:00 - 16:00",
    aktivitas: "Pelaksanaan Umrah",
    catatan: "Gunakan pakaian ihram, ikuti panduan mutawwif",
    image: "https://via.placeholder.com/300x230?text=Hari+3"
  },
  {
    hari: "Hari 4",
    waktu: "10:00 - 14:00",
    aktivitas: "Ziarah ke tempat bersejarah di Mekah",
    catatan: "Disarankan membawa topi dan air minum",
    image: "https://via.placeholder.com/300x230?text=Hari+4"
  },
  {
    hari: "Hari 5",
    waktu: "09:00 - 13:00",
    aktivitas: "Perjalanan menuju Madinah",
    catatan: "Perjalanan darat ±6 jam",
    image: "https://via.placeholder.com/300x230?text=Hari+5"
  },
  {
    hari: "Hari 6",
    waktu: "07:00 - 11:00",
    aktivitas: "Ziarah Makam Nabi & Raudhah",
    catatan: "Gunakan pakaian sopan, tenang dalam berdoa",
    image: "https://via.placeholder.com/300x230?text=Hari+6"
  },
  {
    hari: "Hari 7",
    waktu: "Free Time",
    aktivitas: "Ibadah dan belanja oleh-oleh",
    catatan: "Pastikan kembali ke hotel sebelum malam",
    image: "https://via.placeholder.com/300x230?text=Hari+7"
  },
  {
    hari: "Hari 8",
    waktu: "Check-out",
    aktivitas: "Persiapan kepulangan",
    catatan: "Pastikan semua barang tidak tertinggal",
    image: "https://via.placeholder.com/300x230?text=Hari+8"
  },
  {
    hari: "Hari 9",
    waktu: "00:00 - 07:00",
    aktivitas: "Penerbangan ke Jakarta",
    catatan: "Tiba di Tanah Air dengan selamat",
    image: "https://via.placeholder.com/300x230?text=Hari+9"
  }
];


  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(dummySchedule.length / itemsPerPage);
  const currentItems = dummySchedule.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const [showModal, setShowModal] = useState(false);
  return (
    <DefaultLayout>
      <div className="w-full min-h-screen pb-16">
      {showModal && (
        <RejectPackagePopUp
          isVisible={showModal}
          onClose={() => setShowModal(false)}
        />
      )
      }
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={detaildummyPackageIcon} alt="dashboard icon" className="w-[20px] h-[20px] mt-1" />
          <h1 className="text-primary-blue font-medium">Package</h1>
        </div>
        <div className=" mt-[69px] mb-[78px] flex justify-center space-x-[54px] ">
          <button onClick={() => setShowModal(true)}  className="w-[118px] py-1 bg-gradient-to-br from-[#B40000] to-[#FE3636] rounded-full text-white font-medium ">Tolak</button>
          <button className="w-[118px] py-1 bg-gradient-to-br from-[#003CB4] to-[#3679FE] rounded-full text-white font-medium ">Terima</button>
        </div>
        {dummyPackage && (
          <div className="w-11/12 bg-white shadow-[0px_4px_19.5px] shadow-black/25 px-[55px] py-[29px] ms-[39px] mt-[30px] h-full items-center">
            <h1 className="text-[#001A4D] text-[24px] font-semibold">Detail Package</h1>
            <div className="grid grid-cols-4 mt-[37px]">

              <div className="">
                <img src={packageExample} alt="package image" className="w-[207px] h-[207px]" />
              </div>
              <div className="col-span-3 flex flex-col">
                <h1 className="text-[20px] font-medium text-[#3B3B3B]">
                  {dummyPackage?.package_name}
                </h1>
                <h1 className="text-[24px] font-medium text-[#3679FE]">
                  Rp. {dummyPackage?.price?.toLocaleString()}
                </h1>
                <div className="grid grid-cols-2 w-8/12">
                  <div className="flex flex-col">

                    <h1 className="text-[20px] mt-2 font-medium text-[#3B3B3B]">
                      Kuota
                    </h1>
                    <h1 className="text-[24px] font-medium text-[#3B3B3B]">
                      {dummyPackage?.quota_update}/{dummyPackage?.quota}
                    </h1>
                    <h1 className="text-[20px] mt-2 font-medium text-[#3B3B3B]">
                      Kategori Paket
                    </h1>
                    <h1 className="text-[20px] font-medium text-[#3679FE]">
                      {dummyPackage?.master_category_departure?.category_name}
                    </h1>
                    <button className="bg-gradient-to-r rounded-full mt-2 from-[#003CB4] to-[#3679FE] text-[15px] font-medium text-white py-1 px-4 w-fit">
                      Jemaah Terdaftar
                    </button>
                  </div>
                  <div className="flex flex-col">

                    <h1 className="text-[20px] mt-2 font-medium text-[#3B3B3B]">
                      Durasi Perjalanan
                    </h1>
                    <h1 className="text-[24px] font-medium text-[#3B3B3B]">
                      {dummyPackage?.duration} Hari
                    </h1>
                    <h1 className="text-[20px] mt-2 font-medium text-[#3B3B3B]">
                      Waktu Keberangkatan
                    </h1>
                    <h1 className="text-[20px] font-medium text-[#3B3B3B]">
                      {dummyPackage?.date_departure}
                    </h1>
                  </div>
                </div>

              </div>
            </div>
            <div className="text-primary-blue text-[20px] mt-[50px]">
              <h2 className="font-semibold mb-2">Fasilitas</h2>
              {dummyPackage?.package_facilities?.map((fasilities, index) => (
                <ul key={index} className="list-disc ms-5 space-y-1 capitalize font-medium">
                  <li>{fasilities?.description}</li>
                </ul>
              ))}
            </div>
            <div className="w-full mt-[80px] space-y-6 text-primary-blue text-[20px]">
              <h2 className="font-semibold mb-[28px] text-[20px] text-primary-blue">Fasilitas Hotel</h2>
              {/* Hotel */}
              {dummyPackage?.package_hotels?.map((hotel, index) => (
                <div key={index}>
                  <h2 className="font-medium text-[20px] ms-8">Hotel {index + 1}</h2>
                  <div className="mt-1 px-[31px] py-4 border border-[#BABABA] rounded-[20px] bg-white flex flex-col space-y-2">
                    <div className="flex justify-between items-center flex-wrap">
                      <div className="font-bold text-black text-[24px]">
                        {hotel?.master_hotel?.hotel_name}<span className="text-[#F0E260] ms-[29px]">{renderStarsHotels(Number(hotel?.master_hotel?.hotel_type)) || 0}</span>
                      </div>
                      <div className="flex items-center space-x-2 ">

                        <div className="flex items-center space-x-1">
                          <img src={locationIcon} alt="icon located" className="w-[16px] h-[16px]" />
                          <span className="text-[11px]">{hotel?.master_hotel?.description}</span>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 font-medium text-[16px] gap-4 mt-2 text-black">
                      <div>
                        <h3 className="font-semibold mb-[19px]">Fasilitas Umum</h3>
                        {hotel?.master_hotel?.facilities_general?.map((fGeneral, index) => (
                          <ul key={index} className="list-disc ms-7 space-y-[4px]">
                            <li>{fGeneral?.description}</li>
                          </ul>
                        ))}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-[19px]">Fasilitas Kamar</h3>
                        {hotel?.master_hotel?.facilities_hotel?.map((fRoom, index) => (
                          <ul key={index} className="list-disc ms-8  space-y-[4px]">
                            <li>{fRoom?.description}</li>
                          </ul>
                        ))}
                      </div>
                    </div>



                  </div>
                </div>
              ))}
            </div>

            <div className="mt-[55px]">
              <div>
                <h1
                  className="text-[20px] font-bold capitalize mb-10 text-primary-blue"
                  style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.25)" }}
                >
                  Jadwal perjalanan
                </h1>

                {currentItems.map((item: any, index: number) => (
                  <TravelSchedule
                    key={index}
                    scheduleList={item}
                  />
                ))}
              </div>
              <div className='flex justify-center mt-10 space-x-4 text-white'>
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className='px-3 py-1 bg-black'
                >
                  &lt;
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-gradient-to-b from-[#109FF5] to-[#0A5D8F] text-white font-bold rounded-2xl' : 'bg-black text-white font-bold rounded-2xl'}`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className='px-3 py-1 bg-black'
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </DefaultLayout>
  );
};

export default DetailNewPackage;
