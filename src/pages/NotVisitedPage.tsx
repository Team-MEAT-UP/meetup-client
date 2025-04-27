import FirstStep from "@/features/notVisited/ui/FirstStep";
import SecondStep from "@/features/notVisited/ui/SecondStep";
import BackHeader from "@/shared/ui/BackHeader";
import Button from "@/shared/ui/Button";
import StepIndicator from "@/shared/ui/StepIndicator";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NotVisitedPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTime, setSelectedTime] = useState("");
  const [secondData, setSecondData] = useState({
    plugScore: null as number | null,
    seatScore: null as number | null,
    crowdedScore: null as number | null,
    review: "",
  });

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1);
    } else {
      navigate(-1);
    }
  };

  const handleFirstStep = () => {
    setCurrentStep(2);
    console.log(selectedTime);
  };

  const haddleSecondStep = () => {
    console.log(secondData);
  };

  return (
    <div className="flex flex-col h-screen">
      <BackHeader onClick={handleBack} />
      <div className="flex flex-col justify-between h-full p-5 pt-2">
        <div>
          <StepIndicator step={currentStep} />
          <span className="mt-2 text-lg font-bold text-gray-70">이 장소는 어떠셨나요?</span>
          <p className="text-md font-medium text-gray-40">이용 경험에 대해 알려주세요</p>
          {currentStep === 1 && <FirstStep selectedTime={selectedTime} setSelectedTime={setSelectedTime} />}
          {currentStep === 2 && <SecondStep secondData={secondData} setSecondData={setSecondData} />}
        </div>
        <Button
          onClick={currentStep === 1 ? handleFirstStep : haddleSecondStep}
          disabled={
            (currentStep === 1 && !selectedTime) ||
            (currentStep === 2 &&
              (secondData.plugScore === null || secondData.seatScore === null || secondData.crowdedScore === null))
          }>
          {currentStep === 1 ? "다음" : "등록하기"}
        </Button>
      </div>
    </div>
  );
};

export default NotVisitedPage;
