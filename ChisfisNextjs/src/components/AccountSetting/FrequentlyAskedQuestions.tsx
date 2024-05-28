import { ShieldOutlined } from "@mui/icons-material";
import { Fragment } from "react";
import { BiDetail } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";


function FaqItem(props:{title:string,description:string,icon:any}){

    return (
      <div className="bg-white/45 p-6 rounded-lg  min-h-44 w-full">
        <div className=" rounded-lg mb-2">
          {props.icon}
        </div>
        <div>
          <p className="text-lg font-extrabold">{props.title}</p>
          <p className="text-xs text-[#757575] mt-2">{props.description}</p>
        </div>
      </div>
    )
  }


  export function FaqSideComponent(){
    const iconclassName = "w-12 h-12 text-gray-500 fill-primary-800 text-primary-800 stroke-primary-800 stroke-0";

    const faqData = [
        {
            title: "Why isn’t my info shown here?",
            description: "We’re hiding some account details to protect your identity.",
            icon: <ShieldOutlined className={iconclassName} />
        },
        {
            title: "Which details can be edited?",
            description: "Contact info and personal details can be edited. If this info was used to verify your identity, you’ll need to get verified again the next time you book—or to continue hosting.",
            icon: <BiDetail className={iconclassName} />
        },
        {
            title: "What info is shared with others?",
            description: "PaceDream only releases contact information for Hosts and guests after a reservation is confirmed.",
            icon:  <IoEyeOutline className={iconclassName} stroke="2" />
        }
    ]

    return (
        <div className="ring-1 ring-gray-300 rounded-md col-span-3 md:col-span-1"> 
            {
              faqData.map((item,index,arr) => (
                <Fragment key={index}>
                  <FaqItem title={item.title} description={item.description} icon={item.icon} />
                  {index < (arr.length-1) && <hr className="my-3 bg-gray-300"/>}
                </Fragment>
              ))
            }
        </div>
    )
  }