import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { FaArrowLeft } from "react-icons/fa";


const ChatUser = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(selectedConversation?._id);

  // Extract first letter of first and second words
  const nameParts = selectedConversation?.name?.split(" ") || [];
  const firstLetter = nameParts[0]?.charAt(0).toUpperCase() || "";
  const secondLetter = nameParts[1]?.charAt(0).toUpperCase() || "";
  const initials = firstLetter + secondLetter; // Combine both letters

  return (
    <div className="flex items-center p-4 mb-2.5 bg-gray-800">
      {/* Back Button (Mobile View) */}
      <button
        className="md:hidden mr-3 text-white text-xl"
        onClick={() => setSelectedConversation(null)}
      >
        <FaArrowLeft className="cursor-pointer"/>
      </button>

      <div className="flex items-center space-x-3">
        {/* Avatar with Initials */}
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-lg
          ${isOnline ? "bg-green-500" : "bg-gray-500"}`}
        >
          {initials}
        </div>

        {/* User Details */}
        <div>
          <h1 className="text-lg font-bold">{selectedConversation?.name}</h1>
          <span className="text-sm">{isOnline ? "Online" : "Offline"}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatUser;
