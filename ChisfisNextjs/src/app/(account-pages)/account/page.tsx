import React, { FC } from "react";
import Avatar from "@/shared/Avatar";
import ProfileForm from "@/components/profile";
import ProfileImageEdit from "@/components/profile/ProfileImageEdit";

export interface AccountPageProps {}

const AccountPage = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* HEADING */}
      <h2 className="text-3xl font-semibold">Account infomation</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-shrink-0 flex items-start">
          <ProfileImageEdit />
        </div>
        <ProfileForm />
      </div>
    </div>
  );
};

export default AccountPage;
