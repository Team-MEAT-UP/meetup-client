import Button from "@/shared/ui/Button";
import { GetLocationButton } from ".";
import { useState, useEffect } from "react";
import { InputField, LocationCard } from "@/shared/ui";
import { FormattedData, StartPointInfo } from "../model";
import { highlightMatchingText } from "@/shared/utils";
import { useSearchParams } from "react-router-dom";
import { useCreateStartPoint } from "../hooks";
import { PlainHeader } from "@/widgets/headers";
import NoResult from "@/assets/icon/noresult.svg";
import { useSearch } from "@/entities/place/hooks";
import { StartPoint } from "@/entities/place/model";

interface LocationStepProps {
  setCurrentStep: (step: number) => void;
  startPointInfo: StartPointInfo | null;
  setStartPointInfo: (info: StartPointInfo) => void;
  name: string;
}

export const LocationStep = ({ setCurrentStep, startPointInfo, setStartPointInfo, name }: LocationStepProps) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [searchParams] = useSearchParams();
  const eventIdParam = searchParams.get("eventId");

  const { value, setValue, searchResults, isError, handleChange, isTyping, setIsSearching } = useSearch();

  const { handleSubmit } = useCreateStartPoint(eventIdParam);

  useEffect(() => {
    const handleResize = () => {
      if (window.visualViewport) {
        const viewportHeight = window.visualViewport.height;
        const windowHeight = window.innerHeight;
        const keyboardHeight = windowHeight - viewportHeight;
        setKeyboardHeight(keyboardHeight > 0 ? keyboardHeight : 0);
      }
    };

    window.visualViewport?.addEventListener("resize", handleResize);
    return () => {
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSelectLocation = (location: StartPoint) => {
    setValue(location.name);
    setIsSearching(false);
    setStartPointInfo({
      name: name,
      startPoint: location.name,
      address: location.address,
      roadAddress: location.roadAddress,
      latitude: location.latitude,
      longitude: location.longitude,
    });
  };

  const getFormattedData = (): FormattedData | null => {
    if (!name || !startPointInfo) return null;

    return {
      username: name,
      startPoint: startPointInfo.startPoint,
      address: startPointInfo.address,
      roadAddress: startPointInfo.roadAddress,
      longitude: startPointInfo.longitude,
      latitude: startPointInfo.latitude,
    };
  };

  const handleComplete = () => {
    if (value.trim().length === 0 || !startPointInfo) return;
    const data = getFormattedData();
    if (!data) return;

    handleSubmit(data);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 px-4">
        <div className="flex flex-col gap-4">
          <PlainHeader title="멤버 추가" onBack={() => setCurrentStep(0)} />
          <p className="text-gray-90 text-lg font-semibold">
            멤버 추가를 위해
            <br />
            출발지를 입력해주세요
          </p>
          <InputField value={value} placeholder="출발지를 입력해주세요" onChange={handleChange} type="startPoint" />
          {isTyping ? (
            <div className="flex flex-col gap-2 overflow-y-auto max-h-[calc(100vh-216px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {isError ? (
                <p className="text-red-500 text-sm">검색 중 오류가 발생했어요.</p>
              ) : searchResults.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-10">
                  <img src={NoResult} alt="검색 결과 없음" className="w-32 h-32" />
                  <p className="text-center text-gray-40 text-sm">
                    일치하는 주소가 없어요
                    <br />
                    서울 내 지역인지 다시 확인해보세요
                  </p>
                </div>
              ) : (
                searchResults.map((location, index) => (
                  <LocationCard
                    key={index}
                    name={highlightMatchingText(location.name, value)}
                    address={location.address}
                    onClick={() => handleSelectLocation(location)}
                  />
                ))
              )}
            </div>
          ) : (
            <GetLocationButton setValue={setValue} setStartPointInfo={setStartPointInfo} name={name} />
          )}
        </div>
      </div>
      {!isTyping && (
        <div
          className="px-4 mb-5 transition-all duration-300"
          style={{
            marginBottom: keyboardHeight > 0 ? `${keyboardHeight + 20}px` : "20px",
          }}>
          <Button onClick={handleComplete} disabled={value.trim().length === 0}>
            추가하기
          </Button>
        </div>
      )}
    </div>
  );
};
