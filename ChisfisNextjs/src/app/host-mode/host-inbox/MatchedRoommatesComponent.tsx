import React from 'react';
import EmptyState from './components/EmptyState';
import avatar4 from "@/images/avatars/Image-4.png";
import Avatar from '@/shared/Avatar';
import ButtonPrimary from '@/shared/ButtonPrimary';
import { clientAuthAxios } from '@/utils/clientAxios';
import { useRouter } from 'next/navigation';
const MatchedRoommatesComponent = () => {

  
  const matchedRoommates = [
    {
      id: "65fd561926d718f966cfc0c2",
      name: "Kerem Can KURT",
      avatar: avatar4,
    },
    {
      id: "6601378cca0ed865709a0470",
      name: "Leo Messi",
      avatar: avatar4,
    },
  ];
  const router = useRouter();
  const createChat = async (id: String) => {
    
    try {
      const res = await clientAuthAxios().post('/chat/create', {
        user_id: id,
      });
      const chatId = res.data.data._id;
      router.push(`/inbox/${chatId}`);    
    } catch (err) {
      console.log(err);
    } 
  };
    return (
      <>
      {
        matchedRoommates.length > 0 ? 
          <div className="flex flex-wrap">
          {matchedRoommates.map((roommate) => (
            <div key={roommate.id} className="flex flex-col items-center p-4 w-1/8">
              <Avatar
                imgUrl={roommate.avatar}
                sizeClass="w-10 h-10 sm:w-12 sm:h-12"
              />
              <div className="my-2">{roommate.name}</div>
              <ButtonPrimary onClick={() => {createChat(roommate.id)}}>
                Send Message
              </ButtonPrimary>
            </div>
          ))}
        </div>
        :
        <EmptyState/>
      }
      </>
    );
};

export default MatchedRoommatesComponent;