import FirstStep from "@/features/visited/ui/FirstStep";
import SecondStep from "@/features/visited/ui/SecondStep";
import Button from "@/shared/ui/Button";
import StepIndicator from "@/shared/ui/StepIndicator";
import { BackHeader } from "@/widgets/headers";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const VisitedPage = () => {
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

  const handleSecondStep = () => {
    console.log(secondData);
  };

  return (
    <div className="relative flex flex-col h-screen">
      <BackHeader onClick={handleBack} />
      <div className="flex flex-col justify-between h-full p-5 pt-2">
        <div>
          <StepIndicator step={currentStep} />
          <span className="mt-2 text-lg font-bold text-gray-70">
            {currentStep === 1 ? "언제 가셨나요?" : "이 장소는 어떠셨나요?"}
          </span>
          <p className="text-md font-medium text-gray-40">
            {" "}
            {currentStep === 1 ? "방문한 시간을 알려주세요." : "느낌을 간단하게 알려주세요."}
          </p>
          <div className="flex-1 overflow-y-auto max-h-[calc(100vh-220px)] scrollbar-hidden overflow-touch">
            {currentStep === 1 && <FirstStep selectedTime={selectedTime} setSelectedTime={setSelectedTime} />}
            {currentStep === 2 && <SecondStep secondData={secondData} setSecondData={setSecondData} />}
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 left-5 w-[calc(100%-40px)]">
        <Button
          onClick={currentStep === 1 ? handleFirstStep : handleSecondStep}
          disabled={
            (currentStep === 1 && !selectedTime) ||
            (currentStep === 2 &&
              (secondData.plugScore === null || secondData.seatScore === null || secondData.crowdedScore === null))
          }>
          {currentStep === 1 ? "다음으로" : "완료하기"}
        </Button>
      </div>
    </div>
  );
};

export default VisitedPage;
