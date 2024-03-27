import { IoChatbubblesOutline } from "react-icons/io5";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { FiCommand } from "react-icons/fi";
import { BsChatHeart } from "react-icons/bs";
import Image from "next/image";
import map from "@/images/world-map.jpg";

const data = [
  {
    icons: IoChatbubblesOutline,
    title: "Share team inboxes",
    description:
      "Whether you have a tema of 2 or 200, you can share inboxes and collaborate in real time.",
  },
  {
    icons: AiOutlineThunderbolt,
    title: "Deliver instant answers",
    description:
      "An all-in-one platform that helps you deliver instant answers to customers.",
  },
  {
    icons: TbReportAnalytics,
    title: "Manage you team with reports",
    description:
      "Measure what matters with Untitled's easy-to-use reports. You can filter, export and drilldownon the  data in a couple clicks",
  },
  {
    icons: TfiCommentsSmiley,
    title: "Connect with customers",
    description:
      "Solve a problem or close a sale in real-time with chat. If you need to follow up later, you can convert chat to email with one click.",
  },
  {
    icons: FiCommand,
    title: "Connect the tools you already use",
    description:
      "Explore 100+ integrations that make your work easier. Plus, our extensivedeveloper tools.",
  },
  {
    icons: BsChatHeart,
    title: "Our people make the difference",
    description:
      "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help",
  },
];

const contacts = [
  {
    title: "Support",
    desc: "Our friendly team is here to help",
    email: "support@pacedream.com",
  },
  {
    title: "Sales",
    desc: "Get in touch with our sales team",
    email: "sales@pacedream.com",
  },
  {
    title: "Phone",
    desc: "Mon-Fri 8am-5pm",
    email: "+1(123) 456-7890",
  },
];

const AboutUsValues = () => {
  return (
    <>
      <div className="bg-white lg:py-20 py-12 lg:px-36 px-4">
        <div className="text-center">
          <p className="text-[#632DF8] font-semibold">Our values</p>
          <p className="font-semibold text-5xl mt-6">
            How we work at PaceDream
          </p>
          <p className="mt-6">
            Our shared values keep us connected and guide us as one team.
          </p>
        </div>
        <div className="mt-12 grid lg:grid-cols-3 grid-cols-1 gap-8 text-center">
          {data.map((item) => (
            <div className="flex flex-col items-center bg-slate-50  shadow-sm hover:shadow-md rounded-xl py-4">
              <div className="mb-4 h-12 w-12 rounded-full border-4 border-blue-100 flex justify-center items-center p-2 bg-blue-200 ">
                <item.icons className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-lg">{item.title}</p>
                <p className="mt-2 w-4/5 mx-auto text-gray-700">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-20 text-center">
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
