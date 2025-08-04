import React, { useState } from 'react'
type RejectProps = {
    isVisible: boolean;
    onClose: (isClose: boolean) => void;
}

const predefinedReasons = [
  'Konten Tidak Pantas',
  'Tidak sesuai Ketentuan',
  'Lorem ipsum',
  'Lorem ipsum Dolor',
  'Lorem ipsum Amet',
  'Penipuan',
];
const RejectPackagePopUp: React.FC<RejectProps> = ({ isVisible, onClose}) => {
    const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
    const [customReason, setCustomReason] = useState('');
    if (!isVisible) return null;

  const addReason = (reason: string) => {
    if (!selectedReasons.includes(reason)) {
      setSelectedReasons([...selectedReasons, reason]);
    }
  };

  const handleAddRejectReason = () => {
    const trimmed = customReason.trim();
    if (trimmed && !selectedReasons.includes(trimmed)) {
      setSelectedReasons([...selectedReasons, trimmed]);
      setCustomReason('');
    }
  };

 
    return (
    
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          {/* <div className="bg-white w-full  h-8/12 shadow-lg max-w-4/5 p-[27px] px-[66px] relative">
              <h1 className="font-semibold text-xl text-[#001A4D]">
                  Alasan di Tolak
              </h1>
            <div className="mt-[25px] flex space-x-[10px]">
                    <button className='bg-[#D9D9D9] flex items-center rounded-full px-4 py-1 text-[#555555] font-medium text-[12px]'>Konten Tidak Pantas <span className='ms-[14px] text-[20px]'>+</span></button>
                    <button className='bg-[#D9D9D9] flex items-center rounded-full px-4 py-1 text-[#555555] font-medium text-[12px]'>Penipuan <span className='ms-[14px] text-[20px]'>+</span></button>    
                </div>
                <div className="mt-[25px]">
                    <textarea className='w-full h-[100px] border border-[#D9D9D9] rounded-lg p-3 text-[14px] text-[#555555]' placeholder='Tulis alasan penolakan disini...'></textarea>
                </div>
      </div> */}
         <div className="bg-white w-full max-w-4/5 h-8/12 shadow-lg p-[27px] px-[66px] relative">
            <button onClick={()=>onClose(true)} className="absolute top-4 right-4 text-white bg-[#D63100] w-6 h-6 rounded-full text-sm flex items-center justify-center font-bold shadow">
                ×
            </button>
            <h1 className="font-semibold text-xl text-[#001A4D]">Alasan di Tolak</h1>

            <div className="mt-[25px] flex flex-wrap gap-3">
                {predefinedReasons.map((reason, idx) => (
                <button
                    key={idx}
                    onClick={() => addReason(reason)}
                    className="bg-[#D9D9D9] flex items-center rounded-full px-4 py-1 text-[#555555] font-medium text-[12px]"
                >
                    {reason}
                    <span className="ms-[14px] text-[20px]">+</span>
                </button>
                ))}
            </div>

            <div className="mt-10 h-[245px] flex flex-col justify-between shadow-black/25 shadow-[0px_5px_11.3px_3px] p-5 space-y-4">
                <div className="flex flex-wrap gap-3">
                {selectedReasons.map((r, i) => (
                    <div
                    key={i}
                    className="bg-[#D9D9D9] px-4 py-2 rounded-full text-[#555] text-[12px] font-medium"
                    >
                    {r}
                    </div>
                ))}
                </div>

                <div className="flex justify-between items-center">    
                    <div className="flex items-center w-2/3 gap-3">
                    <input
                        type="text"
                        value={customReason}
                        onChange={(e) => setCustomReason(e.target.value)}
                        className="bg-[#E6E6E6] w-full rounded-full px-5 py-3 text-sm text-[#555] outline-none"
                    />
                    <button
                        onClick={handleAddRejectReason}
                        className="text-2xl text-[#555] font-bold"
                    >
                        +
                    </button>
                    </div>
                    <div className="flex justify-end mt-6">
                        <button
                        className="bg-gradient-to-br from-[#003CB4] to-[#3679FE] text-white w-[118px] py-1 rounded-full text-sm font-medium"
                        >
                        Kirim
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};


export default RejectPackagePopUp