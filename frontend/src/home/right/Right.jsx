import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import Type from './Type'

const Right = () => {
  return (
    <div className='w-[70%] bg-slate-950 text-white'>
      <ChatUser />
      <div className='overflow-y-auto' style={{maxHeight: 'calc(88vh - 8vh)'}}>
              <Messages />
      </div>
      <Type/>
    </div>
  )
}

export default Right