import React, { useEffect } from "react";
import Chatuser from "./ChatUser.jsx";
import Messages from "./Messages.jsx";
import Type from "./Type.jsx";
import { useAuth } from "../../context/AuthProvider.jsx";
import useConversation from "../../statemanage/useConversation.js";

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const [authUser] = useAuth();

  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);

  useEffect(() => {
    if (authUser && authUser.user) {
      console.log(authUser); // Log only when authUser changes and is defined
    }
  }, [authUser]);

  return (
    <div className="w-full bg-slate-900 text-gray-300">
      <div>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <Chatuser />
            <div
              className=" flex-1 overflow-y-auto"
              style={{ maxHeight: "calc(88vh - 8vh)" }}
            >
              <Messages />
            </div>
            <Type />
          </>
        )}
      </div>
    </div>
  );
}

export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-center">
          Welcome{" "}
          <span className="font-semibold  text-white">
            {authUser.user.email}
          </span>
          <br />
          No chat selected, please start conversation by selecting anyone to
          your contacts
        </h1>
      </div>
    </>
  );
};
