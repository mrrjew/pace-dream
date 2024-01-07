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
          className={`flex items-center space-x-2 mb-2  shadow-md rounded-md border p-3 ${contact.id === 1 ? 'bg-gray-100' : 'bg-white'} hover:bg-gray-100 cursor-pointer`}
        >
          <img
            src={contact.profilePicture}
            alt={contact.name}
            className="w-10 h-10 rounded-md"
          />
          <div>
            <div className="text-md">{contact.name}</div>
            <div className="text-sm text-gray-500">{contact.lastMessage}</div>
          </div>
          <div className="flex-1 text-right">
            <div className="text-sm text-gray-400">{contact.lastSeen}</div>
          </div>
        </div>
      ))}
    </>
  );
};
