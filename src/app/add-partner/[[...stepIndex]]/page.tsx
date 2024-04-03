import React from "react";
import PageAddPartner1 from "./PageAddPartner1";
import PageAddPartner2 from "./PageAddPartner2";
import PageAddPartner3 from "./PageAddPartner3";
import PageAddPartner4 from "./PageAddPartner4";
import PageAddPartner5 from "./PageAddPartner5";
import PageAddPartner6 from "./PageAddPartner6";
import PageAddPartner7 from "./PageAddPartner7";
import PageAddPartner8 from "./PageAddPartner8";
import PageAddPartner9 from "./PageAddPartner9";
import PageAddPartner10 from "./PageAddPartner10";

const Page = ({
  params,
  searchParams,
}: {
  params: { stepIndex: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  let ContentComponent = PageAddPartner1;
  switch (Number(params.stepIndex)) {
    case 1:
      ContentComponent = PageAddPartner1;
      break;
    case 2:
      ContentComponent = PageAddPartner2;
      break;
    case 3:
      ContentComponent = PageAddPartner3;
      break;
    case 4:
      ContentComponent = PageAddPartner4;
      break;
    case 5:
      ContentComponent = PageAddPartner5;
      break;
    case 6:
      ContentComponent = PageAddPartner6;
      break;
    case 7:
      ContentComponent = PageAddPartner7;
      break;
    case 8:
      ContentComponent = PageAddPartner8;
      break;
    case 9:
      ContentComponent = PageAddPartner9;
      break;
    case 10:
      ContentComponent = PageAddPartner10;
      break;

    default:
      ContentComponent = PageAddPartner1;
      break;
  }

  return <ContentComponent />;
};

export default Page;
