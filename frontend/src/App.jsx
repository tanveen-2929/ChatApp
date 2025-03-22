import React from 'react'
import Left from "./home/left/Left"
import Right from "./home/right/Right"
import Logout from './home/left1/Logout'
import Login from './components/Login'
import Signup from './components/signup'
import { useAuth } from './context/AuthProvider'
import { Routes, Route, Navigate } from 'react-router-dom'
function App() {
    const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={ authUser ? (
              <div className="flex h-screen">
                <Logout />
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route
          path="/login"
          element={authUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
    </>
  );
}

export default App
