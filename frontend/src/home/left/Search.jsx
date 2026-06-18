import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import UserGetAllUsers from "../../context/UserGetAllUsers";
import useConversation from "../../statemanage/useConversation.js";
import toast from "react-hot-toast";

const Search = () => {
  const [search, setSearch] = useState("");
  const [allUsers] = UserGetAllUsers();
  const { setSelectedConversation } = useConversation();

  // Filter users based on search input
  const filteredUsers = allUsers.filter((user) =>
    user.name?.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectUser = (user) => {
    setSelectedConversation(user);
    setSearch(""); // Clear search after selecting a user
  };

  return (
    <div className="px-4 py-3 relative">
      {" "}
      {/* Ensure relative positioning */}
      {/* Search Input */}
      <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-lg relative">
        <input
          type="search"
          className="w-full bg-transparent text-white outline-none"
          placeholder="Search or Start a New Chat"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className="text-2xl text-gray-400 cursor-pointer " />
      </div>
      {/* Dynamic Search Results */}
      {search && (
        <div className="absolute top-full left-0 w-full bg-gray-800 rounded-lg mt-2 max-h-48 overflow-y-auto shadow-lg z-50">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <div
                key={user._id}
                className="p-3 hover:bg-gray-700 cursor-pointer text-white"
                onClick={() => handleSelectUser(user)}
              >
                {user.name}
              </div>
            ))
          ) : (
            <p className="p-3 text-white text-center">No users found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
