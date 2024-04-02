import React, { useEffect, useState } from 'react';
import EmptyState from './components/EmptyState';
import avatar4 from "@/images/avatars/Image-4.png";
import Avatar from '@/shared/Avatar';
import ButtonPrimary from '@/shared/ButtonPrimary';
import { clientAuthAxios } from '@/utils/clientAxios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ButtonSecondary from '@/shared/ButtonSecondary';

interface Request {
  profilePic: string;
  id: string;
  first_name: string;
  last_name: string;
}
const FriendshipReq = () => {
  const [incomingRequests, setIncomingRequests] = useState<Request[]>([]);
  const [outgoingRequests, setOutgoingRequests] = useState<Request[]>([]);
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
  const getAllRequests = async () => {
    
    try {
      const res = await clientAuthAxios().get('/user/friend/requests');
      setIncomingRequests(res.data.data.incomingRequests)
      setOutgoingRequests(res.data.data.outgoingRequests)
    } catch (err) {
      console.log(err);
    } 
  };
  console.log(outgoingRequests)
  useEffect(() => {
    getAllRequests();
  },[])
    return (
      <div className="flex flex-col md:flex-row">
        <div className='w-full md:w-1/2 md:border-r-4 md:mobile-res'>
            <h3 className="text-center py-4 border-b">Received Requests</h3>
            <div className='md:mr-5 flex flex-col column gap-5 my-6 max-h-[400px] overflow-y-auto' style={{ scrollbarWidth: "none" }}>
              {
                incomingRequests.length > 0 ?
                incomingRequests?.map(request=> (
                  <div className='flex items-center justify-center flex-col md:flex-row gap-3 bg-slate-300 py-1 border-collapse rounded-xl'>
                    <Avatar
                        imgUrl={request.profilePic}
                        sizeClass="w-8 h-8 sm:w-12 sm:h-12"
                    />
                    <p className="text-sm font-medium w-[125px] text-gray-900 dark:text-gray-200 text-center">
                        {request.first_name} {" "} {request.last_name}
                    </p>
                    <div className="flex flex-col md:flex-row gap-3">
                        <ButtonPrimary><p className='text-xs'>Accept Request</p></ButtonPrimary>
                        <ButtonSecondary><p className='text-xs'>Decline Request</p></ButtonSecondary>
                    </div>
                </div>
                ))
                :
                <p className='text-center'>No incoming requests found</p>
              }
                 
            </div>
        </div>
        <div className='w-full md:w-1/2'>
            <h3 className="text-center py-4 border-b">Sent Requests</h3>
            <div className='flex flex-col md:ml-5 column gap-5 my-6 max-h-[400px] overflow-y-auto' style={{ scrollbarWidth: "none" }}>
              {
                outgoingRequests.length > 0 ?
                  outgoingRequests?.map(request=> (
                    <div className='flex items-center justify-center flex-col md:flex-row gap-3 bg-slate-300 py-1 border-collapse rounded-xl'>
                      <div
                        className={`rounded-full wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold w-8 h-8 sm:w-12 sm:h-12`}
                        >
                        <Image
                        width={24}
                        height={24}
                        className={`absolute h-[70%] w-[70%] object-cover rounded-full`}
                        src={request.profilePic}
                        alt={request.first_name}
                      />
                      </div>
                      <p className="text-sm font-medium w-[125px] text-gray-900 dark:text-gray-200 text-center">
                          {request.first_name} {" "} {request.last_name}
                      </p>
                      <ButtonSecondary><p className='text-xs'>Cancel Request</p></ButtonSecondary>
                  </div>
                  ))
                  :
                  <p className='text-center'>No outgoing requests found</p>
                }
            </div>
        </div>
    </div>
    );
};

export default FriendshipReq;