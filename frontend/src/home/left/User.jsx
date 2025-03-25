import React from 'react'
import UseConversation from '../../statemanage/UseConversation.js';

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = UseConversation();
  const isSelected = selectedConversation?._id === user._id;

  return (
      <>
      <div className={`hover:bg-slate-600 duration-300 ${isSelected ? "bg-slate-700" : ""}`}
      onClick={()=>setSelectedConversation(user)}
      >
        <div className='flex space-x-6 px-3 py-4 hover:bg-slate-600 duration-300 cursor-pointer'>
    <div className="avatar ">
    <div className="ring-primary ring-offset-base-100 w-11 rounded-full ring ring-offset-2">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
    </div>
    <div className='h-[10%]'>
          <h1 className='font-bold'>{user.name}</h1>
          <p>{ user.email}</p>
    </div>
    </div>
    </div>
      </>
  )
}

export default User
