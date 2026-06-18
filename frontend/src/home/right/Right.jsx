import React, { useEffect } from "react";
import Chatuser from "./ChatUser.jsx";
import Messages from "./Messages.jsx";
import Type from "./Type.jsx";
import { useAuth } from "../../context/AuthProvider.jsx";
import useConversation from "../../statemanage/useConversation.js";
import { CiMenuFries } from "react-icons/ci";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div
      className={`w-full bg-slate-900 text-gray-300 md:block ${
        selectedConversation ? "block" : "hidden"
      }`}
    >
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <Chatuser />
          <div
            className="flex-1 overflow-y-auto"
            style={{ maxHeight: "calc(87vh - 9vh)" }}
          >
            <Messages />
          </div>
          <Type />
        </>
      )}
    </div>
  );
}

export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();
  return (
    <div className="hidden md:flex h-screen items-center justify-center">
      <h1 className="text-center">
        Welcome <span className="font-bold">{authUser.user.email}</span>
        <br />
        No chat selected, please start a conversation by selecting a contact.
      </h1>
    </div>
  );
};
