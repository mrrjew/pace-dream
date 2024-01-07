import React from "react";

interface MessageProps {
  messages: any[];
}

export const Messages: React.FC<MessageProps> = ({ messages }) => {
  return (
    <>
      {messages.map((msg, index) => (
        <div
          key={index}
          className={
            msg.sender === "me"
              ? "flex flex-col items-end mb-4 justify-end"
              : "flex items-start mb-4 "
          }
        >
          {msg.sender === "other" && (
            <img
              src="https://placekitten.com/40/40"
              alt="Another User"
              className="w-8 h-8 rounded-md mr-2"
            />
          )}
          <div>
            <div
              className={
                msg.sender === "me"
                  ? "text-white p-2 rounded-lg rounded-br-none break-words text-sm"
                  : " bg-white border-[1px] rounded-lg border-[#EAEBF0] p-2 rounded-bl-none break-words text-sm"
              }
              style={
                msg.sender === "me"
                  ? { backgroundColor: "#632DF8" }
                  : { backgroundColor: "white" }
              }
            >
              {msg.message}
            </div>
            {
                msg.sender === "other" && (
                    <span className="text-xs text-neutral-500">10:00 PM</span>
                )
            }
          </div>

          {msg.sender === "me" && (
            <div className="text-xs text-gray-500 pt-1">
              <span className="text-xs text-neutral-500 p-1">10:00 PM</span>
            </div>
          )}
        </div>
      ))}
    </>
  );
};
