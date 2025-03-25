import React, { useState, useEffect } from "react";
import useConversation from "../statemanage/useConversation.js";
import axios from "axios";

const UseGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // New error state
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching
      if (selectedConversation && selectedConversation._id) {
        try {
          const response = await axios.get(
            `/api/message/get/${selectedConversation._id}`
          );
          setMessages(response.data);
        } catch (error) {
          console.log("Error in getting messages", error);
          setError("Failed to fetch messages. Please try again."); // Set error message
        } finally {
          setLoading(false); // Ensure loading is false after fetch attempt
        }
      } else {
        setLoading(false); // Ensure loading is false if no conversation is selected
      }
    };
    getMessages();
  }, [selectedConversation, setMessages]);

  return { loading, messages, error }; // Return error state
};

export default UseGetMessage;
