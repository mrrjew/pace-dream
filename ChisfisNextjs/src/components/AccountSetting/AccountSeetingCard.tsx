import { AccountSettingPageType } from "./AccountSettingMainContent"


export function AccountSettingsCard({
    title,
    description,
    icon,
    onClick

}:{
    title:string,
    description:string,
    icon:any,
    onClick:(val:AccountSettingPageType)=>void
}){

    return(
        <div  
        onMouseDown={()=>onClick(title as AccountSettingPageType)}
        className="bg-white p-6 rounded-lg shadow-lg min-h-44 min-w-48 hover:bg-primary-500 cursor-pointer hover:!text-white group">
            <div className="p-2 rounded-lg size-14">
                {icon}
            </div>
            <div>
                <p className="text-sm font-semibold">{title}</p>
                <p className="text-xs text-[#757575] group-hover:text-white mt-2">{description}</p>
            </div>
        </div>
    )

}