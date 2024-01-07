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
              ? "flex items-end mb-4 justify-end"
              : "flex items-start mb-4"
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
                  ? "text-black p-2 rounded-md shadow-lg"
                  : "p-2 rounded-md shadow-lg"
              }
              style={
                msg.sender === "me"
                  ? { backgroundColor: "#f1f0fc" }
                  : { backgroundColor: "white" }
              }
            >
              {msg.message}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
