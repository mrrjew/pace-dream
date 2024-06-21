"use client";
import '@mantine/dropzone/styles.css';
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { Cancel, Delete, RecyclingRounded, VideoCallOutlined } from "@mui/icons-material";
import React, { useEffect } from "react";
import { Dropzone, FileWithPath, MIME_TYPES } from '@mantine/dropzone';
import { useMutation } from '@tanstack/react-query';
import { Group, MantineProvider } from '@mantine/core';
import { DocumentArrowDownIcon, DocumentIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import { createToast } from '@/utils/createToast';




export function DragDrop({type,maxFiles,isMultiple,media,onUploaded}:{
    type: "image" | "video" | "document",
    isMultiple?: boolean,
    maxFiles?: number,
    media?: string[],
    onUploaded: (files:string[])=>void
}) {
    const accept = {
        image: [MIME_TYPES.gif, MIME_TYPES.jpeg, MIME_TYPES.png],
        video: [MIME_TYPES.mp4],
        document: [MIME_TYPES.pdf]
    }
    const maxSize = {
        //  limit image size to 1 mb
        image: 1 * 1024 * 1024,
        video: 100 * 1024 * 1024,
        document: 50 * 1024 * 1024
    }
    const maxFileList = {
        image: isMultiple ? (maxFiles ?? 6) : 1,
        video: isMultiple ? (maxFiles ?? 1) : 1,
        document: isMultiple ? (maxFiles ?? 1) : 1
    }

    const [localMedia, setLocalMedia] = React.useState<string[]>(media || []);

    useEffect(() => {

        setLocalMedia(media || [""]);
    }, [media]);

    async function uploadDocuments(
        { arg }: { arg: { files: FileWithPath[] } }
      ): Promise<{result?:string[]}> {
        const body = new FormData();
        arg.files.forEach((file) => {
            body.append("file", file, file.name);
        });
        const response = fetch('/api/media', { method: "POST", body}).then((res)=>res.json());
        // console.log("Response",await response);
        return await response
      }

 const { mutateAsync,isLoading} = useMutation({
    mutationFn: (filePaths:FileWithPath[])=>{
        // generate urls from the local files
        // setLocalMedia([...localMedia, ...filePaths.map((file)=>URL.createObjectURL(file))]);
        return uploadDocuments({arg: { files: filePaths } });
    },
    onSuccess: (res:{result?:string[]}) => {
      // wait for few seconds before updating the state
        setTimeout(() => {
            if(res?.result){
                onUploaded([...(media || []), ...res?.result]);
            }
        }, 1000);
    },
    onError: (err:any) => {
        console.error("Error uploading file", err);
    },
 });

  return (
    <MantineProvider>
        <div className='h-full border-dashed border border-primary-300 rounded-xl w-full'>
            <Dropzone
                loading={isLoading}
                accept={accept[type]}
                maxSize={maxSize[type]}
                maxFiles={maxFileList[type]}
                disabled={isLoading || localMedia?.length >= maxFileList[type]}
                onReject={(files) => {
                    console.log("Rejected files",files[0].errors[0].message);
                 createToast(files[0]?.errors[0]?.message||"File type not supported","error")
                }}
                onDrop={(files) =>{
                    // check sum of files and local media is less than max files
                    if(files.length + localMedia.length > maxFileList[type]){
                        // remove the files that are more than the max files
                        files.splice(maxFileList[type] - localMedia.length);
                    }
                    // upload the files if files is not empty
                    if(files.length > 0){
                        mutateAsync(files);
                    }
                }}>
                <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
                    <Dropzone.Accept>
                        {/* <CloudArrowUpIcon className="w-12 h-12 text-primary-500"/> */}
                        <div  className="h-20 justify-center flex items-center gap-4">
                            <CloudArrowUpIcon className="w-12 h-12 text-primary-500"/>
                            <p className="text-gray-400">
                                Drop the file here
                            </p>
                        </div>
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                       <div className='h-20 justify-center flex items-center gap-4'>
                        <Cancel className="w-12 h-12 text-red-500"/>
                        <p className="text-gray-400">File type not supported</p>
                       </div>
                    </Dropzone.Reject>
                   {!isLoading && <Dropzone.Idle>
                        {
                            type == "image" &&  <div className="h-20 justify-center flex items-center gap-4">
                                <CloudArrowUpIcon className="w-12 h-12 text-primary-500"/>
                                <p className="text-gray-400">Upload a file or drag and drop PNG, JPG, GIF up to 1MB</p>
                            </div>}
                        {
                            type == "video" && <div className="h-20 flex justify-center items-center gap-4">
                               {/* check if file exists and display it */}
                                { localMedia?.length > 0 && <RecyclingRounded className="w-12 h-12 text-gray-400"/> }
                                { localMedia?.length == 0 && <VideoCallOutlined className="w-12 h-12 text-primary-500"/> }
                                { localMedia?.length == 0 && <p className="text-gray-400">Upload a file or drag and drop MP4 up to 100MB</p> }
                            </div>
                        }
                        {
                            type == "document" && <div className="h-20 flex justify-center items-center gap-4">
                                {/* check if file exists and display it */}
                                { localMedia?.length > 0 && <DocumentIcon className="w-12 h-12 text-gray-400"/> }
                                { localMedia?.length > 0 && <p className="text-gray-400">{localMedia?.length} document uploaded</p> }
                                { localMedia?.length == 0 && <DocumentArrowDownIcon className="w-12 h-12 text-primary-500"/> }
                                { localMedia?.length == 0 && <p className="text-gray-400">Upload a file or drag and drop PDF up to 50MB</p> }      
                            </div>
                        }
                    </Dropzone.Idle>}
                </Group>
            
                {/* loader progress */}
              {
                isLoading &&  <div className="h-20 justify-center flex items-center gap-4">
                    <CloudArrowUpIcon className="w-12 h-12 text-primary-500 animate-bounce duration-1000"/>
                    <p className="text-gray-400 animate-pulse">Uploading...</p>
                </div>
              }      
            </Dropzone>
        </div>
        {/* list uploaded files */}
       {type == "image" &&  <div className="flex gap-4 flex-wrap items-center p-4">
            {Number(localMedia?.length) >0 && localMedia?.map((url,index) => {
                 if(!url) return null;
               return  (
                <div key={index} 
                    className="relative w-20 h-20 rounded-md p-0 ring-1"
                    >
                        {/* check if it's document */}
                     <Image 
                        // priority={index < 3}
                        src={url} 
                        fill
                        sizes="100vw"
                        alt={'image'} 
                        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII='
                        objectFit='cover'
                    className="rounded-md"/>
                    {/* delete button */}
                  
                    <div className="absolute -top-2 -right-1 p-1 bg-red-400 hover:bg-red-500 rounded-xl">
                        <button 
                            title='Delete file'
                            className="p-0 rounded-md flex items-center justify-center w-4 h-4"
                            onClick={()=>{ 
                                setLocalMedia(localMedia.filter((media)=>media !== url));
                                // remove the file from remote media
                               const _copyRemoteMedia = [...(media || [])];
                               // remove url in this index from the remote media
                               const index = _copyRemoteMedia.indexOf(url);
                                 if(index > -1){
                                      _copyRemoteMedia.splice(index,1);
                                }
                                // update the remote media
                                onUploaded(_copyRemoteMedia);
                            }}>
                            <Delete className="w-4 h-4 text-white"/>
                        </button>
                    </div>
                </div>
            )}
            )}
        </div>}
  </MantineProvider>
  );
}

