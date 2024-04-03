import { StarIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";
import Avatar from "@/shared/Avatar";

interface CommentDataType {
  name: string;
  avatar?: string;
  profession: string;
  comment: string;
  starPoint: number;
}

export interface CommentProps {
  className?: string;
  data?: CommentDataType;
  hasListingTitle?: boolean;
}

const DEMO_DATA: CommentDataType = {
  name: "Cody Fisher",
  profession: "Student",
  comment:
    "There’s no stopping the tech giant. Apple now opens its 100th store in China.There’s no stopping the tech giant.",
  starPoint: 5,
};

const Comment: FC<CommentProps> = ({
  className = "",
  data = DEMO_DATA,
  hasListingTitle,
}) => {
  return (
    <div
      className={`nc-Comment ${className}`}
      data-nc-id="Comment"
    >
        <div className="flex text-yellow-500">
            <StarIcon className="w-6 h-6" />
            <StarIcon className="w-6 h-6" />
            <StarIcon className="w-6 h-6" />
            <StarIcon className="w-6 h-6" />
            <StarIcon className="w-6 h-6" />
        </div>
        <span className="block mt-3 text-sm text-black font-bold">
          {data.comment}
        </span>
        <div className="flex mt-4">
            <div className="pt-0.5">
                <Avatar
                sizeClass="h-10 w-10 text-lg"
                radius="rounded-full"
                userName={data.name}
                imgUrl={data.avatar}
                />
            </div>
            <div className="flex flex-col ml-2">
                <span className="text-base font-bold">{data.name}</span>
                <span className="text-sm text-neutral-500 font-medium">
                    {data.profession}
                </span>
            </div>
        </div>
    </div>
  );
};

export default Comment;