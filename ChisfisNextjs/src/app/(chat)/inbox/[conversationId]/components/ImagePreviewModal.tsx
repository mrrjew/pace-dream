'use client';

import ButtonPrimary from '@/shared/ButtonPrimary';
import ButtonSecondary from '@/shared/ButtonSecondary';

interface IImagePreviewModalProps {
  images: File[];
  handleSend: (images: File[]) => void;
  onClose?: () => void;
}

export const ImagePreviewModal: React.FC<IImagePreviewModalProps> = ({
  images,
  handleSend,
  onClose,
}: IImagePreviewModalProps) => {
  const urls = images?.map((image) => URL.createObjectURL(image));

  return (
    <div className="p-4 container">
      <div className="flex gap-2">
        {urls?.map((url) => (
          <img
            src={url}
            alt=""
            className="w-48 h-30 md:w-60 md:h-36 lg:w-72 lg:h-48"
          />
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
