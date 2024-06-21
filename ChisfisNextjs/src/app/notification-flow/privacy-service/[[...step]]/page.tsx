/** @format */

import React from "react";
import TramsService from "./TramsService";
import PrivacyPolicy from "./PrivacyPolicy";
import PaymentSuccess from "./payment-success";

const Page = ({
  params,
  searchParams,
}: {
  params: { step: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  let ContentComponent = PrivacyPolicy;
  switch (Number(params.step)) {
    case 1:
      ContentComponent = PrivacyPolicy;
      break;
    case 2:
      ContentComponent = TramsService;
      break;
    case 3:
      ContentComponent = PaymentSuccess;
      break;
    default:
      ContentComponent = PrivacyPolicy;
      break;
  }

  return <ContentComponent />;
};

export default Page;
