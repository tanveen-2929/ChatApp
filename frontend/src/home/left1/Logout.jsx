import React from 'react'
import { BiLogOut } from "react-icons/bi";

const Logout = () => {
  return (
      <>
      <div className='w-[4%] bg-slate-900 text-white flex flex-col justify-end'>
        <div className='p-1 align-bottom'>
          <button>
            <BiLogOut className='text-5xl p-2  hover:bg-gray-600 rounded-lg duration-300'/>
          </button>
        </div>
       </div>

      </>
  )
}

export default Logout