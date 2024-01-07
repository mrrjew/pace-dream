import React from "react";

interface ContactsListProps {
  contacts: any[];
}

export const ContactsList: React.FC<ContactsListProps> = ({ contacts }) => {
  return (
    <>
      {contacts.map((contact: any) => (
        <div
          key={contact.id}
          className="flex items-center space-x-2 mb-2 shadow-lg rounded-md border p-2"
          style={
            contact.id === 1
              ? { backgroundColor: "#f1f0fc" }
              : { backgroundColor: "white" }
          }
        >
          <img
            src={contact.profilePicture}
            alt={contact.name}
            className="w-8 h-8 rounded-md"
          />
          <div>
            <div className="font-semibold">{contact.name}</div>
            <div className="text-sm text-gray-500">{contact.lastMessage}</div>
          </div>
          <div className="flex-1 text-right">
            <div className="text-sm text-gray-500">{contact.lastSeen}</div>
          </div>
        </div>
      ))}
    </>
  );
};
