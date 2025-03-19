import React from 'react'
import Left from "./home/left/Left"
import Right from "./home/right/Right"
import Logout from './home/left1/Logout'
import Login from './components/Login'
import Signup from './components/signup'
function App() {
  return (
  <>
      {/* <div className='flex h-screen'>
        <Logout/>
      <Left />
        <Right />
        </div> */}
      
      <Login />
      {/* <Signup/> */}
    </>
  )
}

export default App
