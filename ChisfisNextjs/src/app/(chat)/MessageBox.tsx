import Avatar from '@/shared/Avatar';

export const MessageBox = ({ text, self }: { text: string; self: boolean }) => {
  const OwnMessage = () => {
    return (
      <div className="flex gap-3 px-4 py-2 justify-end w-full">
        <div className="order-2">
          <Avatar sizeClass="h-8 w-8" />
        </div>
        <div className="flex flex-col gap-1 items-end w-full">
          <div className="bg-[#632DF8] text-white rounded-lg rounded-br-none px-4 py-2.5 max-w-[60%]">
            <p className="text-sm">{text}</p>
          </div>
          <span className="text-xs text-neutral-500">10:00 PM</span>
        </div>
      </div>
    );
  };

  const OtherMessage = () => {
    return (
      <div className="flex gap-3 px-4 py-2 justify-start w-full">
        <div className="">
          <Avatar sizeClass="h-8 w-8" />
        </div>
        <div className="flex flex-col gap-1 items-start w-full">
          <div className="bg-white border-[1px] rounded-lg border-[#EAEBF0] rounded-bl-none px-4 py-2.5 max-w-[60%]">
            <p className="text-sm">{text}</p>
          </div>
          <span className="text-xs text-neutral-500">10:00 PM</span>
        </div>
      </div>
    );
  };

  return self ? OwnMessage() : OtherMessage();
};
