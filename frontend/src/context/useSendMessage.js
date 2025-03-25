import React, { useState } from "react";
import useConversation from "../statemanage/useConversation.js";

import axios from "axios";
const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessages = async (message) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `/api/message/send/${selectedConversation._id}`,
        { message }
      );
      setMessages([...messages, response.data]);

      setLoading(false);
    } catch (error) {
      console.log("Error in sending messages", error);

      setLoading(false); // Ensure loading is false if no conversation is selected
    }
  };
  return { loading, sendMessages };
};

export default useSendMessage;
