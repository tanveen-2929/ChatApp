import React from 'react'

const ChatUser = () => {
  return (
      <>
        <div className='pl-5 pt-5 flex h-[12vh] space-x-4 bg-gray-900 hover:bg-gray-600 duration-300'>
            <div>
                <div className="avatar avatar-online">
                  <div className="w-14 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                  </div>
                </div>
              </div>
               <div>
               <h1 className='text-xl'>Tanveen Kaur</h1>
               <span className='text-sm'>tanveen12@gmail.com</span>
              </div>
        </div>
      </>
  )
}

export default ChatUser