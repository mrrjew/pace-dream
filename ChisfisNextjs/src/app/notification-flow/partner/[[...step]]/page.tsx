/** @format */

import React from "react";
import PartnerWeb1 from "./partner-web1";
import PartnerWeb2 from "./partner-web2";
import PartnerWeb3 from "./partner-web3";

const Page = ({
  params,
  searchParams,
}: {
  params: { step: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  let ContentComponent = PartnerWeb1;
  switch (Number(params.step)) {
    case 1:
      ContentComponent = PartnerWeb1;
      break;
    case 2:
      ContentComponent = PartnerWeb2;
      break;
    case 3:
      ContentComponent = PartnerWeb3;
      break;
    default:
      ContentComponent = PartnerWeb1;
      break;
  }

  return <ContentComponent />;
};

export default Page;
