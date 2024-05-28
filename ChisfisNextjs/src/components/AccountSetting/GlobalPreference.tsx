import { RoomPreferences } from "@mui/icons-material";
import { Fragment } from "react";


type GlobalPreferenceData = {title:string,value:string,actionlabel:string,onEdit:()=>void}


function GlobalPreferenceItem(props:GlobalPreferenceData){
  const {title,value,actionlabel,onEdit} = props
  return (
    <div className="flex justify-between gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-sm">{title}</p>
        <p className="text-sm text-gray-400">{value}</p>
      </div>
      <button onClick={onEdit} className="text-sm text-gray-800 underline">{actionlabel}</button>
    </div>
  )
}


export function GlobalPreference(){

    const globalPreferenceList : Array<GlobalPreferenceData> = [
      {
        title: "Preferred language",
        value: "English",
        actionlabel: "Edit",
        onEdit: ()=>{}
      },
      {
        title: "Preferred currency",
        value: "Not Provided",
        actionlabel: "Edit",
        onEdit: ()=>{}
      },
      {
        title: "Time zone",
        value: "",
        actionlabel: "Add",
        onEdit: ()=>{}
      }
  
    ];
  
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 space-y-8 md:space-y-0 space-x-0 md:space-x-20">
          <div className="col-span-1 md:col-span-2">
            <div className="grid grid-cols-1 gap-4">
              {
                  globalPreferenceList.map((item,index) => (
                    <Fragment key={index} >
                      <GlobalPreferenceItem title={item.title} value={item.value} actionlabel={item.actionlabel} onEdit={item.onEdit} />
                      <hr className="my-3 bg-gray-300"/>
                    </Fragment>
                  ))
              }
            </div>
          </div>
          <div className="ring-1 h-fit rounded-md ring-gray-300 col-span-1 md:col-span-1">
            <div className="bg-white/45 p-4 rounded-lg  min-h-44">
                <div className="rounded-lg mb-2">
                <RoomPreferences className="w-16 h-16 fill-primary-700"/>
                </div>
                <div>
                <p className="text-xl font-extrabold">{"Your global preferences"}</p>
                <p className="text-sm text-[#757575] mt-2">
                    {"Changing your currency updates how you see prices. You can change how you get payments in your payments preferences."}
                </p>
                </div>
          </div>
        </div>
        </div>
    )
  }