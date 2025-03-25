import React, { useEffect } from "react";
import useConversation from "../../statemanage/useConversation.js";

const ChatUser = () => {
  const { selectedConversation } = useConversation();
  useEffect(() => {
    console.log(selectedConversation); // Log only when selectedConversation changes
  }, [selectedConversation]);

  return (
    <>
      <div className="pl-5 pt-5 flex h-[12vh] space-x-4 bg-gray-900 hover:bg-gray-600 duration-300">
        <div>
          <div className="avatar avatar-online">
            <div className="w-14 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
        </div>
        <div>
          {/* <h1 className="text-xl">{selectedConversation.name}</h1> */}
          <h1 className="text-xl">tanveen</h1>
          <span className="text-sm">Online</span>
        </div>
      </div>
    </>
  );
};

export default ChatUser;
