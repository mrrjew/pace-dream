"use client";

import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";
import { MessageType } from "@/types/chat";
import Image from "next/image";

interface IImagePreviewModalProps {
  images: File[];
  handleSend: (images: File[]) => void;
  onClose?: () => void;
  type: MessageType;
}

export const ImagePreviewModal: React.FC<IImagePreviewModalProps> = ({
  images,
  handleSend,
  onClose,
  type,
}: IImagePreviewModalProps) => {
  const urls = images?.map((image) => URL.createObjectURL(image));

  return (
    <div className="p-4 container">
      <div className="flex gap-2">
        {type === MessageType.IMAGE
          ? urls?.map((url) => (
              <Image
                key={url}
                src={url}
                alt=""
                width={60}
                height={60}
                className="w-48 h-30 md:w-60 md:h-36 lg:w-72 lg:h-48"
              />
            ))
          : images.map((file) => (
              <div key={file.name} className="h-12 rounded-lg bg-[#F9F8FB] flex items-center justify-center px-4 py-2">
                <p className="text-sm text-gray-500">{file.name}</p>
              </div>
            ))}
      </div>
      <div className="flex justify-end mt-4 gap-4">
        <ButtonPrimary
          onClick={() => {
            handleSend(images);
          }}
        >
          Send
        </ButtonPrimary>
        <ButtonSecondary onClick={onClose}>Cancel</ButtonSecondary>
      </div>
    </div>
  );
};
