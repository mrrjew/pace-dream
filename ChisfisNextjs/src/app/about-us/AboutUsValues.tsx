import Image from "next/image";
import map from "@/images/world-map.jpg";
import { BanknotesIcon, ChatBubbleLeftRightIcon, PhoneIcon } from "@heroicons/react/24/outline";


const contacts = [
  {
    title: "Support",
    desc: "Our friendly team is here to help",
    email: "support@pacedream.com",
    icon: <ChatBubbleLeftRightIcon />
  },
  {
    title: "Sales",
    desc: "Get in touch with our sales team",
    email: "sales@pacedream.com",
    icon: <BanknotesIcon />
  },
  {
    title: "Phone",
    desc: "Mon-Fri 8am-5pm",
    email: "+1(123) 456-7890",
    icon: <PhoneIcon />
  },
];

const AboutUsValues = () => {
  return (
    <>
      <div className="bg-white  sm:py-20 py-12 lg:px-36 px-4 mb-5">
        <div className="sm:mb-5 pb-8 lg:mt-20 text-center">
          <p className="font-semibold text-5xl mt-6">
            We're a distributed team
          </p>
          <p className="mt-6">We have offices and teams all around the world</p>
          <div className="relative">
            <Image
              src={map}
              alt="offices"
              className="h-96 w-screen mt-12 mx-auto object-cover rounded-2xl"
            />
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 mt-12 lg:gap-6 gap-4 ">
            {contacts.map((contact) => (
              <div className="bg-slate-50  p-4 rounded-xl">
                <p className="w-[50px] h-[50px]">{contact.icon}</p>
                <p className="font-semibold text-xl">{contact.title}</p>
                <p className="text-gray-700 mt-4 font-medium ">
                  {contact.desc}
                </p>
                <p className="text-[#632DF8] mt-4 font-medium">
                  {contact.email}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsValues;
