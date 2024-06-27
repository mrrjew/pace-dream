"use client";
import React from "react";
import { DragDrop } from "./media/drag-drop-file";
import { RentableItem } from "@/types/rentalItems";

const ExperiencePage4 = ({
  data,
  updateData,
}: {
  updateData: (data: Partial<RentableItem>) => void;
  data: Partial<RentableItem>;
}) => {
  // const [rentalRules, setRentalRules] = useState<string>("");
  // const [terms, setTerms] = useState<string>("");
  // const [rentalImages, setRentalImages] = useState<File[]>([]);
  // const [rentalVideo, setRentalVideo] = useState<File | null>(null);

  // const handleRentalRulesChange = (
  //   e: React.ChangeEvent<HTMLTextAreaElement>,
  // ) => {
  //   setRentalRules(e.target.value);
  // };

  // const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = e.target.files ? Array.from(e.target.files) : [];
  //   setRentalImages((prevImages) => [...prevImages, ...files]);
  // };

  // const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0] || null;
  //   setRentalVideo(file);
  // };

  // update data with rental rules, images and video
  // const updateDataWithRentalDetails = () => {
  //   updateData({...data,additionalRules:[rentalRules],placeImages:rentalImages.map((f)=>f?.webkitRelativePath),placeVideo:rentalVideo?.webkitRelativePath})
  // }

  // use callback to update data with rental rules, images and video
  // useEffect(() => {
  //   updateDataWithRentalDetails()
  // }, [rentalRules, rentalImages, rentalVideo])

  return (
    <>
      {/* FORM */}
      <div className="bg-white w-screen sm:w-full rounded-lg p-2 md:p-6">
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Describe the experience in details
          </label>
          {/* <p className="text-gray-500 mb-2">E.G. No Smoking, Pets Allowed</p> */}
          <textarea
            className="border border-gray-300 rounded-md p-2 w-full"
            placeholder="EG., Any restrictions"
            value={data?.summary}
            onChange={(e) => updateData({ ...data, summary: e.target.value })}
          />
        </div>
        {/* <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
            List any requirements for participants
            </label>
            <textarea
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="E.G. File upload for terms"
              value={data?.additionalRules}
              defaultValue={terms}
              onChange={(e) => setTerms(e.target.value)}
            />
          </div> */}

        {/* <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
            Any specific rules for rental gear product?
            </label>
            <textarea
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="EG., Any restrictions"
              value={data.rules.join("/n")}
              defaultValue={terms}
              onChange={(e) => setTerms(e.target.value)}
            />
          </div> */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Can you upload the terms?
          </label>
          {/* <p className="text-gray-500 mb-2">E.G. No Smoking, Pets Allowed</p> */}
          <DragDrop
            type="document"
            isMultiple={false}
            maxFiles={1}
            media={data?.attachments?.map((val) => val?.link) || []}
            onUploaded={(urls) => {
              updateData({
                ...data,
                attachments: urls.map((url) => ({
                  link: url,
                  description: "",
                  mime_type: "application/pdf",
                })),
              });
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ExperiencePage4;
