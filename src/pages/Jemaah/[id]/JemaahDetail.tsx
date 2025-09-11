import DefaultLayout from '../../../layout/DefaultLayout'
import ExampleIcon from "../../../assets/images/pexels-sultan-alhuthali-175963006-18274181.png"
import jemaahIcon from '../../../assets/icons/user-single-neutral-male--close-geometric-human-person-single-up-user-male.svg'
import { FiMenu } from 'react-icons/fi'
// import replyIcon from "../../../assets/icons/Group 1000004448.svg"
import eyeIcon from "../../../assets/icons/Eye (2).svg"
import reactionIcon2 from "../../../assets/icons/Group 1000004446.svg"
import replyIcon2 from "../../../assets/icons/Group 132.svg"
import timeIcon from "../../../assets/icons/Time.svg"
import useJemaahDetail from '../../../hooks/Jemaah/useJemaahDetail'
import { formatDate } from '../../../utils/formatDate'

function JemaahDetail() {
  const {
    jemaah
  } = useJemaahDetail();

  return (
    <DefaultLayout>
      <div className="w-full min-h-screen pb-16">
        <div className="w-full h-[58px] flex space-x-[13px] pt-[17px] px-[23px] pb-[21px] shadow-[0px_2px_7.3px] shadow-black/25">
          <img src={jemaahIcon} alt="Jemaah icon" className="w-[20px] h-[20px]" />
          <h1 className="text-primary-blue font-medium">Jemaah</h1>
        </div>
        <div className="w-11/12 bg-white py-[33px] mx-auto shadow-black/25 shadow-[0px_4px_11.5px_0px] min-h-screen rounded-[9px] mt-[115px] p-6">
          {jemaah && (
            <div className="w-11/12 mx-auto">
              <div className="w-full flex justify-between mb-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-10 ">
                  <img
                    src={ExampleIcon}
                    alt="Profile"
                    className="w-[170px] h-[170px] rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <h1 className="text-[20px] font-bold text-[#1B50BA]">{jemaah?.name}<span></span></h1>
                    <p className=" text-[#3C97FF] flex items-center space-x-2 text-[14px] font-medium">Jemaah
                      <span className="text-[10px] ms-[22px] text-[#9A9A9A] font-medium">Mendaftar sejak {formatDate(String(jemaah?.createdAt))}</span></p>
                    <p className="text-sm text-[#5D666F] font-medium">
                      Status: <span className="text-[#10F5A5]">Online</span>
                    </p>
                    <button className="mt-2 w-fit px-3 py-1 border rounded-full text-sm bg-[#EEEEEE]  text-[#9A9A9A] font-medium text-[10px] flex items-center">
                      <img src={timeIcon} alt="" className='w-[14px] h-[14px] me-2' /> Riwayat Umroh
                    </button>
                  </div>
                </div>
                <button className="p-2 flex items-start rounded-lg hover:bg-gray-100">
                  <FiMenu className="w-[24px] h-[24px]" />
                </button>
              </div>

              {/* Biodata */}
              <div className="mt-6 rounded-[19px] shadow-black/25 shadow-[0px_4px_11.4px] p-[26px]">
                <h2 className="text-lg font-bold mb-4">Biodata</h2>
                <div className="grid gap-3 text-sm">
                  <h3 className='text-[12px]'><span className=" text-[12px] font-medium text-[#797979]">Nama</span> : {jemaah?.name}</h3>
                  <h3 className='text-[12px]'><span className=" text-[12px] font-medium text-[#797979]">Jenis Kelamin</span> : {jemaah?.gender === 'male' ? 'Laki-laki/Ikhwan' : 'Perempuan/Akhwat'}</h3>
                  <h3 className='text-[12px]'><span className=" text-[12px] font-medium text-[#797979]">Alamat</span> : (Belum ada) Jl karya bakti kencana indah parahyangan rt 4 rw 3</h3>
                  <h3 className='text-[12px]'><span className=" text-[12px] font-medium text-[#797979]">Email</span> : {jemaah?.email}</h3>
                  <h3 className='text-[12px]'><span className=" text-[12px] font-medium text-[#797979]">No Telp</span> : {jemaah?.phone_number}</h3>
                  <h3 className='text-[12px]'><span className=" text-[12px] font-medium text-[#797979]">KTP</span> : <a href="#" className="text-[#1865FF] font-semibold text-[11px]">Lihat Lampiran...</a></h3>
                  <h3 className='text-[12px]'><span className=" text-[12px] font-medium text-[#797979]">Kartu Keluarga</span> : <a href="#" className="text-[#1865FF] font-semibold text-[11px]">Lihat Lampiran...</a></h3>
                  <h3 className='text-[12px]'><span className=" text-[12px] font-medium text-[#797979]">Pasport</span> : <a href="#" className="text-[#1865FF] font-semibold text-[11px]">Lihat Lampiran...</a></h3>
                </div>
              </div>

              {/* Forum */}
              <div className="mt-6 rounded-[19px] shadow-black/25 shadow-[0px_4px_11.4px] px-[30px] py-[26px]">
                <h2 className="text-lg font-bold mb-4">Forum</h2>
                {/* <div className="space-y-4">
                    {[1, 2].map((i) => (
                        <div key={i} className="">
                        <div className="flex  gap-3 mb-2">
                            <div className="flex ">
                                
                                <img
                                src={ExampleIcon}
                                alt="user"
                                className="w-[37px] h-[37px] rounded-full"
                                />
                            </div>
                            <div className="flex flex-col mt-1 space-y-4">   
                                <p className="font-medium">Ahmad Danur Wiarsa</p>
                                <p className="text-[14px] font-medium mb-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                    ad minim veniam.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-end gap-6 text-xs text-gray-500">
                            <span>👁️ 480 Dilihat</span>
                            <span>👍 480 Reaksi</span>
                            <span>💬 389 Balasan</span>
                        </div>
                        </div>
                    ))}
                    </div> */}
                <div className=" w-full">

                  <div className="flex flex-col gap-2">

                    <div className="flex gap-4 ">
                      <img
                        src={ExampleIcon}
                        alt="Avatar"
                        className="w-[37px] h-[37px] rounded-full object-cover"
                      />
                      <div className='flex-col'>
                        <p className="font-medium text-[15px] mt-2">Kusnadi</p>
                        <div className="flex">
                          <p className="text-sm  mt-2 leading-relaxed font-medium ">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamcoour partners Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.v9
                          </p>

                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="flex  justify-end gap-4 text-[12px] font-medium text-gray-600 mt-4 ps-14 md:ps-14">
                    <div className="flex items-center space-x-1">
                      <img src={eyeIcon} alt="Reaction Icon" className='w-[16px] h-[16px]' /> <span className='text-[#3C97FF] me-1'>480</span> Dilihat
                    </div>
                    <div className="flex items-center space-x-1">
                      <img src={reactionIcon2} alt="Reaction Icon" className='w-[14px] h-[14px]' />  <span className='text-[#3C97FF] me-1'>480</span> Reaksi
                    </div>
                    <div className="flex items-center space-x-1">
                      <img src={replyIcon2} alt="Reaction Icon" className='w-[16px] h-[16px]' />  <span className='text-[#3C97FF] me-1'>480</span> Balasan
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </DefaultLayout>
  )
}

export default JemaahDetail