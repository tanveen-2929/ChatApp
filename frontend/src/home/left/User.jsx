import React from "react";
import useConversation from "../../statemanage/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

const User = ({ user }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const isSelected = selectedConversation?._id === user._id;
  const isOnline = onlineUsers.includes(user._id);

  // Extract the first letter of the first and second words
  const nameParts = user.name?.split(" ") || [];
  const firstLetter = nameParts[0]?.charAt(0).toUpperCase() || "";
  const secondLetter = nameParts[1]?.charAt(0).toUpperCase() || "";

  const initials = firstLetter + secondLetter; // Combine both letters

  return (
    <div
      className={`p-3 cursor-pointer rounded-lg ${
        isSelected ? "bg-gray-700" : "hover:bg-gray-600"
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex items-center space-x-4">
        {/* Avatar with initials */}
        <div
          className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold text-lg 
          ${isOnline ? "bg-green-500" : "bg-gray-500"}`}
        >
          {initials}
        </div>

        {/* User details */}
        <div>
          <h1 className="font-bold">{user.name}</h1>
          <p className="text-sm">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
