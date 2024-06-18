/** @format */
import everyone from "@/images/partner/everyone.png";
import male from "@/images/partner/male.png";
import woman from "@/images/partner/woman.png";

export interface PartnerDestinationTypes {
  isSelected: boolean;
  title: string;
  value: string;
}
export interface PartnerGenderTypes extends PartnerDestinationTypes {
  image?: any;
}
export const _PartnerGenders: PartnerGenderTypes[] = [
  {
    title: "Everyone",
    value: "everyone",
    isSelected: false,
    image: everyone,
  },
  {
    title: "Man",
    value: "man",
    isSelected: false,
    image: male,
  },
  {
    title: "Woman",
    value: "woman",
    isSelected: true,
    image: woman,
  },
];

export const _PartnerDestinations: PartnerDestinationTypes[] = [
  {
    title: "Bristol",
    value: "bristol",
    isSelected: false,
  },
  {
    title: "London",
    value: "london",
    isSelected: false,
  },
  {
    title: "Virginia",
    value: "virginia",
    isSelected: false,
  },
  {
    title: "New York",
    value: "new-york",
    isSelected: true,
  },
  {
    title: "San Francisco",
    value: "san-francisco",
    isSelected: false,
  },
  {
    title: "Los Angeles",
    value: "los-angeles",
    isSelected: false,
  },
  {
    title: "Seattle",
    value: "seattle",
    isSelected: false,
  },
];

export interface partnerSwiperTypes {
  name: string;
  age: number;
  budget: string;
  availableFrom: string;
  description: string;
  image: any;
}

import partner1 from "@/images/partner/partner1.png";
export const _PartnerSwipersDemoData = [
  {
    name: "Heeshi",
    age: 25,
    budget: "$300 - $400 / Month",
    availableFrom: "28 Aug 2023",
    image: partner1,
    description:
      "Looking for 1-2 roommates for a place in Manchester city centre (wanting to move in around August time).",
  },
  {
    name: "Demo",
    age: 25,
    budget: "$300 - $400 / Month",
    availableFrom: "28 Aug 2023",
    image: partner1,
    description:
      "Looking for 1-2 roommates for a place in Manchester city centre (wanting to move in around August time).",
  },
];
