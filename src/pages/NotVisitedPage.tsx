import { VisitedPlaceProps } from "@/features/notVisited/model";
import { OtherPlaceForm, PlaceSearch } from "@/features/notVisited/ui";
import { useState } from "react";

const NotVisitedPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedReasons, setSelectedReasons] = useState<string[]>([]);
  const [visitedPlace, setVisitedPlace] = useState<VisitedPlaceProps | null>(null);

  const handleLocationStep = () => {
    console.log("다음 단계로 이동 - 최종 선택된 이유들:", selectedReasons);
    setCurrentStep(2);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: 검색 로직 구현
    void e; // 임시 처리
  };

  return (
    <div className="flex flex-col h-screen-dvh">
      {currentStep === 1 && (
        <OtherPlaceForm
          selectedReasons={selectedReasons}
          setSelectedReasons={setSelectedReasons}
          handleLocationStep={handleLocationStep}
          selectedPlace={visitedPlace}
        />
      )}
      {currentStep === 2 && (
        <PlaceSearch
          setCurrentStep={() => setCurrentStep(1)}
          visitedPlace={visitedPlace || { name: "", latitude: 0, longitude: 0, roadAddress: "", regionName: "" }}
          onChange={handleSearchChange}
          setVisitedPlace={setVisitedPlace}
        />
      )}
    </div>
  );
};

export default NotVisitedPage;
