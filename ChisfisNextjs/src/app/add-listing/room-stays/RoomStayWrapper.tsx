"use client";
import { useEffect, useState } from "react";
import AddListingMainLayoutWrapper from "../AddListingMainLayoutWrapper";
import { RentableItem } from "@/types/rentalItems";

<<<<<<< HEAD
export default function AddListingRoomStayWrapper({
  children,
  onNext,
  onBack,
  isFirstStep,
  isLastStep,
  currentStep,
}: {
  children: React.ReactNode;
  onNext: () => void;
  onBack: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
  currentStep: number;
}) {
=======


export default function AddListingRoomStayWrapper(
    {children,
    onNext,
    onBack,
    isFirstStep,
    isLastStep,
    currentStep,
    data,
     totalSteps
    }:{children:React.ReactNode,onNext:()=>void,onBack:()=>void,isFirstStep:boolean,isLastStep:boolean,currentStep:number,
      data?:Partial<RentableItem>,totalSteps?:number
    }
) {

>>>>>>> main1
  const [submitBtnText, setSubmitBtnText] = useState<string>("Next");
  const [hidBackBtn, setHideBackBtn] = useState<boolean>(false);
  // list to current step if step is 4,5:publish, 6:Go back to home
  useEffect(() => {
    setHideBackBtn(false);
    if (currentStep === 4 || currentStep === 5) {
      setSubmitBtnText("Publish");
      return;
    }
    if (currentStep === 6 || currentStep === 7) {
      setSubmitBtnText("Go back to home");
      setHideBackBtn(true);
      return;
    }
    setSubmitBtnText("Next");
  }, [currentStep]);

  return (
    <AddListingMainLayoutWrapper
<<<<<<< HEAD
      onBack={onBack}
      onNext={onNext}
      isFirstStep={isFirstStep}
      isLastStep={isLastStep}
      currentStep={currentStep}
      submitBtnText={submitBtnText}
      hideBackBtn={hidBackBtn}
    >
      {children}
    </AddListingMainLayoutWrapper>
=======
          onBack={onBack}
          onNext={onNext}
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          currentStep={currentStep}
          submitBtnText={submitBtnText}
          hideBackBtn={hidBackBtn}
          data={data}
          totalSteps={totalSteps}
          >
            {children}
      </AddListingMainLayoutWrapper>
>>>>>>> main1
  );
}
