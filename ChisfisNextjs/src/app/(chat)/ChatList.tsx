import Avatar from '@/shared/Avatar';

const ChatUser: React.FC<{}> = () => {
  return (
    <div className="p-4 flex justify-around hover:bg-[#F8F9FB] transition cursor-pointer">
      <div className="py-2 px-4">
        <Avatar sizeClass="h-12 w-12" />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <p className="font-medium">John Doe</p>
          <span className="text-xs text-neutral-500">10:00 PM</span>
        </div>
        <span className="mt-1 text-sm text-neutral-600 w-full">
          Lorem ipsum dolor sit amet consec adipisicing elit...
        </span>
      </div>
    </div>
  );
};

export const ChatList: React.FC<{}> = () => {
  return (
    <div className="flex-1 overflow-y-auto flex flex-col">
      <ChatUser />
      <ChatUser />
      <ChatUser />
      <ChatUser />
      <ChatUser />
    </div>
  );
};
