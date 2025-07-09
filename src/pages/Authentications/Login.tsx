import React from 'react'

function Login() {
  return (
    <div className='w-full h-screen'>
         <div className="flex flex-col w-full h-full space-y-4 justify-center items-center">
                    <input
                        type="email"
                        name='email'
                        className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md"
                        placeholder='email'
                        required
                    />
                    <input
                        type="password"
                        name='password'
                        className="bg-[#F5F5F5] text-[#CECECE] w-[330px] h-[49px] px-4 py-2 rounded-md"
                        placeholder='password'
                        required
                    />
                    <button
                        type="button"
                        className="bg-gradient-to-r font-bold from-[#004492] to-[#0A6BDB] text-white py-2 flex items-center justify-center rounded-[20px] mt-2 w-[106px] h-[32px]"
                    >
                        Login
                    </button>
                </div>
    </div>
  )
}

export default Login