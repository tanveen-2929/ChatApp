import React, { useEffect } from "react";
import { useSocketContext } from "./SocketContext.jsx";
import useConversation from "../statemanage/useConversation.js";
import sound from "../assets/notification.mp3";

const useGetSocketMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessage } = useConversation(); // Updated to setMessages

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      const notification = new Audio(sound);
      notification.play();
      setMessage([...messages, newMessage]); // Updated to setMessages
    });
    return () => {
      socket.off("newMessage");
    };
  }, [socket, messages, setMessage]); // Updated to setMessages
};
export default useGetSocketMessage;
