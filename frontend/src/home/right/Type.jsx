import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";
const Type = () => {
  const [message, setMessage] = useState("");
  const { sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      await sendMessages(message);
      setMessage("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-2.5 flex items-center"
    >
      <input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full bg-gray-900 text-white p-2.5 rounded-lg outline-none"
      />
      <button type="submit" className="ml-3 text-blue-500 text-2xl">
        <IoSend className="cursor-pointer" />
      </button>
    </form>
  );
};

export default Type;
