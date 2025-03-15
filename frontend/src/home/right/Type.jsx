import React from 'react'
import { IoMdSend } from "react-icons/io";

const Type = () => {
  return (
      <>
          <div className='flex space-x-3 h-[8vh] text-center bg-gray-800'>
              <div className='w-[70%] mx-4'>
                  <input type="text" placeholder="Type here" className="border-[1px] border-gray-700 flex items-center w-full rounded-xl py-2 px-3 grow outline-none bg-slate-800 mt-1" /> 
               </div>
            <button>
            <IoMdSend className='text-3xl' />
            </button>
          </div>
      </>
  )
}

export default Type