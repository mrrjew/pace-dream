import img1 from "@/images/avatars/Image-1.png";
import img2 from "@/images/avatars/Image-10.png";
import img3 from "@/images/avatars/Image-11.png";
import img4 from "@/images/avatars/Image-12.png";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaDribbble } from "react-icons/fa";

const teamMembers = [
  {
    name: "Olivia Rhye",
    role: "Founder & CEO",
    desc: "Former co-founder of Opendoor. Early employee at Uber. Stanford GSB.",
    imgUrl: img1,
  },
  {
    name: "Phoenix Baker",
    role: "Engineering Manager",
    desc: "Former co-founder of Opendoor. Early employee at Uber. Stanford GSB.",
    imgUrl: img2,
  },
  {
    name: "Lana Steiner",
    role: "Product Manager",
    desc: "Former co-founder of Opendoor. Early employee at Uber. Stanford GSB.",
    imgUrl: img3,
  },
  {
    name: "Demi Wilkinson",
    role: "Frontend Developer",
    desc: "Former co-founder of Opendoor. Early employee at Uber. Stanford GSB.",
    imgUrl: img4,
  },
];

const AboutUsTeamMembers = () => {
  return (
    <div className="lg:px-36 px-4">
      <div className="text-center">
        <p className="mt-8 lg:text-4xl  text-3xl font-semibold">
          Meet our team
        </p>
        <p className="mt-6 lg:w-1/2 mx-auto">
          Our philosophy is simple - hire a team of diverse, passionate people
          and foster a culture that empowers them to do their best work.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 mt-12 gap-4">
        {teamMembers.map((member) => (
          <div className="" key={member.name}>
            <div className="flex flex-col items-center py-4 px-2  bg-slate-50 shadow-sm hover:shadow-md rounded-xl ">
              <Image
                src={member.imgUrl}
                alt={member.name}
                className="w-20 h-20 rounded-full"
              />
              <p className="mt-4 lg:text-xl text-lg font-medium">
                {member.name}
              </p>
              <p className="mt-2 lg:text-lg text-base font-medium text-[#632DF8]">
                {member.role}
              </p>
              <p className="mt-2 text-center">{member.desc}</p>
              <div className="flex gap-6 mt-2">
                <FaTwitter className="w-5 h-5 text-gray-500" />
                <FaLinkedin className="w-5 h-5 text-gray-500" />
                <FaDribbble className="w-5 h-5 text-gray-500" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default AboutUsTeamMembers;
