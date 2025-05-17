import { InputField, LocationCard } from "@/shared/ui";
import { VisitedPlaceProps } from "../model";
import { CloseHeader } from "@/widgets/headers";
import NoResult from "@/assets/icon/noresult.svg";
import { highlightMatchingText } from "@/shared/utils";
import { CompleteButton } from "./CompleteButton";
import { useSearch } from "@/entities/place/hooks";
import { useState } from "react";
import { StartPoint } from "@/entities/place/model";

interface PlaceSearchProps {
  visitedPlace: VisitedPlaceProps;
  setCurrentStep: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setVisitedPlace: (place: VisitedPlaceProps) => void;
}

export const PlaceSearch = ({ setCurrentStep, setVisitedPlace }: PlaceSearchProps) => {
  const { value, searchResults, isError, handleChange, isTyping } = useSearch();
  const [selectedLocation, setSelectedLocation] = useState<StartPoint | null>(null);

  const handleSelectLocation = (location: StartPoint) => {
    setSelectedLocation(location);
  };

  const handleComplete = () => {
    if (selectedLocation) {
      setVisitedPlace({
        name: selectedLocation.name,
        roadAddress: selectedLocation.roadAddress,
        latitude: selectedLocation.latitude,
        longitude: selectedLocation.longitude,
        regionName: selectedLocation.address.split(" ")[1] || "",
      });
    }
    setCurrentStep();
  };

  return (
    <div className="relative flex flex-col h-full">
      <div className="flex-1 px-4">
        <CloseHeader onClick={setCurrentStep} />
        <div className="flex flex-col gap-4 px-5">
          <InputField value={value} placeholder="장소명을 입력해주세요." onChange={handleChange} type="startPoint" />

          {!selectedLocation && (
            <div className="flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-216px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {isError ? (
                <p className="text-red-500 text-sm">검색 중 오류가 발생했어요.</p>
              ) : value && searchResults.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10">
                  <img src={NoResult} alt="검색 결과 없음" className="w-32 h-32" />
                  <p className="text-center text-gray-40 text-sm">
                    일치하는 주소가 없어요
                    <br />
                    서울 내 지역인지 다시 확인해보세요
                  </p>
                </div>
              ) : searchResults.length > 0 ? (
                searchResults.map((location: StartPoint, index) => (
                  <LocationCard
                    key={index}
                    name={highlightMatchingText(location.name, value)}
                    address={location.roadAddress}
                    onClick={() => handleSelectLocation(location)}
                  />
                ))
              ) : null}
            </div>
          )}
        </div>
      </div>
      {(!isTyping || selectedLocation) && (
        <div className="absolute bottom-5 w-full px-5">
          <CompleteButton label="완료" onClick={handleComplete} disabled={!selectedLocation} />
        </div>
      )}
    </div>
  );
};
