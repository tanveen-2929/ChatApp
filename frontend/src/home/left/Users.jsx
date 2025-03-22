import React from 'react';
import UserGetAllUsers from '../../context/UserGetAllUsers';

import User from './User'

const Users = () => {
  const [allUsers, loading] = UserGetAllUsers();  
  console.log(allUsers);
  return (
    <>
      <div style={{maxHeight:"calc(80vh)"}} className='py-2 overflow-y-auto'>

        {allUsers.map((user, index) => {
          return <User key={index} user={user} />
          
     })}
     
</div>
    </>
  )
}

export default Users
