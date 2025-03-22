import React, { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import axios from "axios";
import Cookies from "js-cookie";

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    console.log("Logout button clicked"); // Added console log for debugging

    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("messenger");
      Cookies.remove("jwt");
      setLoading(false);
      alert("Logout Successfully");
      // Optionally, redirect to the login page or update the UI state
      window.location.href = "/login"; // Redirecting to login page after logout

    } catch (error) {
      console.log("Error in Logout", error);
    }
  };  
  return (
      <>
      <div className="w-[4%]   bg-slate-950 text-white  flex flex-col justify-end ">
        <div className="p-3  align-bottom ">
          <button className="cursor-pointer">
            <TbLogout2
              className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300"
              onClick={handleLogout}
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Logout
