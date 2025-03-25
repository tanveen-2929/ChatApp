import React, { useEffect, useRef } from "react";
import Message from "./Message";
import Loading from "../../components/Loading.jsx";
import useGetMessage from "../../context/useGetMessage.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider.jsx";

function Messages() {
  const { loading, messages, error } = useGetMessage();
  const [authUser] = useAuth();
  const lastMsgRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 100);
  }, [messages]);

  const navigate = useNavigate();

  // Check if the user is authenticated
  if (!authUser) {
    navigate("/login"); // Redirect to login page if not authenticated
    return null; // Prevent rendering the component
  }

  return (
    <div
      className="flex-1 overflow-y-auto"
      style={{ minHeight: "calc(92vh - 8vh)" }}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          {messages.length > 0 ? (
            messages.map((message, index) => (
              <Message
                key={message._id}
                message={message}
                ref={index === messages.length - 1 ? lastMsgRef : null}
              />
            ))
          ) : (
            <div>
              <p className="text-center mt-[20%]">
                Say! Hi to start the conversation
              </p>
            </div>
          )}
          {error && (
            <div>
              <p className="text-center text-red-500">
                Error fetching messages. Please try again later.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
export default Messages;
