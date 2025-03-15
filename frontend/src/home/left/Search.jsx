import React from 'react'
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <>
      <div className='px-6 py-4'>
        <form action="">
          <div className='flex space-x-3'>
   <label className="input ">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
  <input type="search" className="grow" placeholder="Search or Start a New Chat" />
</label> <FaSearch className='text-4xl p-2  hover:bg-gray-600 rounded-full duration-300'/>
</div>
        </form>
        </div>
    </>
  )
}

export default Search