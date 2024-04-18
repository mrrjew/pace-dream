'use client'
import Link from 'next/link'
import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { useSession } from "@/hooks/useSession";
import avatar1 from '@/images/avatars/profile-circle.png';
import Avatar from '@/shared/Avatar';

function UserProfilePreview() {
    const {getSession} = useSession()
    const { token, userInfo } = getSession();
    console.log(userInfo)
  return (
    <div className="card relative shadow my-10  rounded-b-2xl mobile-res">
    <div className="w-full h-32 rounded-t-2xl bg-gradient-to-r from-[#9786f3] to-[#e7bfae]"></div>
    <div className="card-body h-24">
      <div className="avatar absolute top-20 left-14">
            {
            userInfo?.profilePic ?
                <div className="w-28 border-white border-8 rounded-full">
                    <img
                        // src="https://i.ibb.co/mHnRpq9/image.png"
                        src={userInfo?.profilePic}
                        className="rounded-full"
                        alt=""
                    /> 
                </div>:
                <Avatar sizeClass="w-20 h-20 rounded-full"/>
            }
      </div>
      <div className="flex items-center justify-between mt-10 ml-8">
        <div className="mt-4">
          {
          userInfo && userInfo.first_name && 
          <>
            <h3 className="text-2xl font-semibold">{userInfo?.first_name} {userInfo?.last_name}</h3>
          </>
          }
          <p className="font-medium text-[#4b4949] mobile-view">{userInfo?.email}</p>
          <p className="text-[#2a4ef1] font-medium desktop-view"> View and edit profile</p>
        </div>
        <div className="mr-24 mobile-view">
          <Link href="/">
          <button className="btn rounded-full bg-[#d0cef7] text-[#3c58f7] border-none px-7 py-2 btn-sm">
            <div className="flex gap-2 font-medium">
              <BiEdit size={18} className="mt-0.5" />
            <p> Edit</p>
            </div>

           
          </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default UserProfilePreview