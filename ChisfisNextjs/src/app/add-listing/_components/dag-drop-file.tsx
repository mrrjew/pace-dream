"use client";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { VideoCallOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";



export default function DragDrop({isVideo}:{
    isVideo?: boolean;
}) {
  const [files, setFiles] = useState<File[]|null>(null);
  const handleChange = (_fileList:any) => {
    const _file = _fileList[0];
    setFiles(_fileList);
  };
  const fileTypes = !isVideo ? ["JPG", "PNG", "GIF"] : ["MP4", "MOV", "AVI"];
  return (
    <FileUploader 
        handleChange={(e:any)=>{
            console.log(e);
            handleChange(e);
        }} 
        name="file" 
        types={fileTypes}
        multiple
        label="Upload a file or drag and drop PNG, JPG, GIF up to 10MB"
        className={"grid grid-cols-1"}
        style={{height: "100%"}}
        maxSize={10}
        hoverTitle=""
      >
        <div className="h-full border-dashed border border-primary-300 rounded-xl w-full">
            {files?.length ? (
                <div className="w-full h-12 items-center flex">
                    <p>
                        {files?.length} file{files?.length > 1 ? "s" : ""} selected
                    </p>
                    {/* <p>File size: {file?.size}</p> */}
                </div>
            ) : (
                !isVideo ?  <div  className="h-20 justify-center flex items-center gap-4">
                    <CloudArrowUpIcon className="w-12 h-12 text-primary-500"/>
                    <p className="text-gray-400">Upload a file or drag and drop PNG, JPG, GIF up to 10MB</p>
                </div>:
                <div className="h-20 flex justify-center items-center gap-4">
                    <VideoCallOutlined className="w-12 h-12 text-primary-500"/>
                    <p className="text-gray-400">Upload a high quality video tour of the property</p>
                </div>
            )}
        </div>
      </FileUploader>
  );
}
