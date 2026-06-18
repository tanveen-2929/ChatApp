import React from "react";
import Search from "./Search";
import Users from "./Users";
import useConversation from "../../statemanage/useConversation.js";

import { useState } from "react";
 import { TbLogout2 } from "react-icons/tb";
 import axios from "axios";
 import Cookies from "js-cookie";
 import toast from "react-hot-toast";

const Left = () => {
  const { selectedConversation } = useConversation();

   const [loading, setLoading] = useState(false);
   // Check if chat is open

   const handleLogout = async () => {
     console.log("Logout button clicked"); // Debugging log
     setLoading(true);
     try {
       await axios.post("/api/user/logout");
       localStorage.removeItem("messenger");
       Cookies.remove("jwt");
       setLoading(false);
       toast.success("Logout Successfully");
       window.location.reload();
     } catch (error) {
       console.log("Error in Logout", error);
       toast.error("Failed to logout");
     }
   };

   // Hide logout when chat panel is open
  

  return (
    <div
      className={`bg-black text-white md:w-[30%] w-full ${
        selectedConversation ? "hidden md:block" : "block"
      }`}
    >
      <div className="flex items-center justify-between p-6 px-11">
        <h1 className="font-bold text-4xl">Chats</h1>
        <button
          className="cursor-pointer text-white bg-slate-950 p-2 rounded-lg hover:bg-gray-600 duration-300"
          onClick={handleLogout}
        >
          <TbLogout2 className="text-3xl" />
        </button>
      </div>

      <Search />
      <hr className="border-gray-400" />
      <Users />
    </div>
  );
};

export default Left;
