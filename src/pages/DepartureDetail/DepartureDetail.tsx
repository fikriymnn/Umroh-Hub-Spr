import React, { useState } from 'react'
import DefaultLayout from '../../layout/DefaultLayout'

function DepartureDetail() {
    const [addCategory, setAddCategory] = useState(false);
    const [addType, setAddType] = useState(false);    
    const [addLocation, setAddLocation] = useState(false);
  return (
      <DefaultLayout>
        <div className="w-full h-screen">
              <div className="flex space-x-2 justify-end w-full">
                  <button onClick={()=>setAddCategory(true)} className="bg-gradient-to-r from-[#004492] to-[#0A6BDB] text-white py-2 px-4 rounded-[20px] mt-4 me-4">
                  Tambah Kategori
                  </button>
                   <button onClick={()=>setAddType(true)} className="bg-gradient-to-r from-[#004492] to-[#0A6BDB] text-white py-2 px-4 rounded-[20px] mt-4 me-4">
                  Tambah Tipe
                  </button>
                  <button onClick={()=>setAddLocation(true)} className="bg-gradient-to-r from-[#004492] to-[#0A6BDB] text-white py-2 px-4 rounded-[20px] mt-4 me-4">
                  Tambah Lokasi
                  </button>
            </div>
              <div className="flex flex-col space-y-2 w-11/12 items-center">
                  
                <h1 className="text-primary-blue font-medium text-[24px] ms-[30px] mt-[20px]">Detail Keberangkatan</h1>
                  <div className="flex space-x-3">
                      
                    <table className="table-auto border border-black">
                        <thead>
                            <tr>
                            <th className="border border-black px-4 py-2">Kategori</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="border border-black px-4 py-2">
                                Reguler
                                {/* <select name="kategori" id="kategori">
                                <option value="Reguler">Reguler</option>
                                <option value="Plus">Plus</option>
                                </select> */}
                            </td>
                            </tr>
                        </tbody>
                        </table>
                        
                        <table className="table-auto border border-black">
                        <thead>
                            <tr>
                            <th className="border border-black px-4 py-2">Tipe</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="border border-black px-4 py-2">
                                Cepat
                                {/* <select name="kategori" id="kategori">
                                <option value="Reguler">Reguler</option>
                                <option value="Plus">Plus</option>
                                </select> */}
                            </td>
                            </tr>
                        </tbody>
                        </table>

                        <table className="table-auto border border-black">
                        <thead>
                            <tr>
                            <th className="border border-black px-4 py-2">Lokasi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className="border border-black px-4 py-2">
                                Jekardah
                                {/* <select name="kategori" id="kategori">
                                <option value="Reguler">Reguler</option>
                                <option value="Plus">Plus</option>
                                </select> */}
                            </td>
                            </tr>
                        </tbody>
                        </table>
                  </div>
                  
                  {addCategory === true && ( <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                        <div className="bg-white w-full max-w-1/4 h-2/6 shadow-lg p-8 relative">
                            <button
                            onClick={() => setAddCategory(false)}
                            className="absolute top-0 right-0 -translate-y-3 translate-x-3 rounded-[10px] text-white bg-[#004492] px-3 text-xl font-bold"
                            >
                            ×
                          </button>
                          <h1 className="text-primary-blue font-medium text-[24px] mb-4">Tambah Kategori</h1>
                            <form className="flex flex-col space-y-4">
                                <label className="text-primary-blue font-medium">Nama Kategori</label>
                                <input type="text" className="border border-gray-300 rounded-md p-2" placeholder="Masukkan nama kategori" />
                                <button type="submit" className="bg-gradient-to-r from-[#004492] to-[#0A6BDB] text-white py-2 px-4 rounded-[20px]">
                                    Tambah
                              </button>
                            </form>
                      </div>
                  </div>)}

                   {addType === true && ( <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                        <div className="bg-white w-full max-w-1/4 h-2/6 shadow-lg p-8 relative">
                            <button
                            onClick={() => setAddType(false)}
                            className="absolute top-0 right-0 -translate-y-3 translate-x-3 rounded-[10px] text-white bg-[#004492] px-3 text-xl font-bold"
                            >
                            ×
                          </button>
                          <h1 className="text-primary-blue font-medium text-[24px] mb-4">Tambah Tipe</h1>
                            <form className="flex flex-col space-y-4">
                                <label className="text-primary-blue font-medium">Nama Tipe</label>
                                <input type="text" className="border border-gray-300 rounded-md p-2" placeholder="Masukkan nama kategori" />
                                <button type="submit" className="bg-gradient-to-r from-[#004492] to-[#0A6BDB] text-white py-2 px-4 rounded-[20px]">
                                    Tambah
                              </button>
                            </form>
                      </div>
                  </div>)}

                  {addLocation === true && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                        <div className="bg-white w-full max-w-1/4 h-2/6 shadow-lg p-8 relative">
                            <button
                            onClick={() => setAddLocation(false)}
                            className="absolute top-0 right-0 -translate-y-3 translate-x-3 rounded-[10px] text-white bg-[#004492] px-3 text-xl font-bold"
                            >
                            ×
                          </button>
                          <h1 className="text-primary-blue font-medium text-[24px] mb-4">Tambah Lokasi</h1>
                            <form className="flex flex-col space-y-4">
                                <label className="text-primary-blue font-medium">Nama Lokasi</label>
                                <input type="text" className="border border-gray-300 rounded-md p-2" placeholder="Masukkan nama kategori" />
                                <button type="submit" className="bg-gradient-to-r from-[#004492] to-[#0A6BDB] text-white py-2 px-4 rounded-[20px]">
                                    Tambah
                              </button>
                            </form>
                      </div>
                  </div>)}
            </div>
          </div>
        </DefaultLayout>
  )
}

export default DepartureDetail