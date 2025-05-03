import { BottomSheet } from "@/shared/ui";
import { Overlay } from "@/shared/ui/BottomSheet/Overlay";
import Button from "@/shared/ui/Button";
import { useState } from "react";
import { CheckBox } from "./CheckBox";

interface PolicyBottomSheetProps {
  onClose: () => void;
}

export const PolicyBottomSheet = ({ onClose }: PolicyBottomSheetProps) => {
  const [firstCheckBox, setFirstCheckBox] = useState(false);
  const [secondCheckBox, setSecondCheckBox] = useState(false);
  const allCheckBox = firstCheckBox && secondCheckBox;

  const handleClick = () => {
    if (allCheckBox) {
      onClose();
    } else {
      setFirstCheckBox(true);
      setSecondCheckBox(true);
    }
  };

  return (
    <>
      <Overlay isBlur={false} />
      <BottomSheet minHeightVh={40} maxHeightVh={40}>
        <BottomSheet.Header />
        <div className="flex flex-col gap-10 pt-4 p-5 h-full">
          <div>
            <span className="text-lg font-bold text-gray-80 mb-[2px]">잠깐만요!</span>
            <p className="text-md font-medium text-gray-40 mb-8">서비스 이용을 위해 약관에 동의해주세요</p>
            <div className="flex flex-col gap-5">
              <CheckBox
                label="이용약관 및 개인정보처리방침(필수)"
                isChecked={firstCheckBox}
                onToggle={() => setFirstCheckBox(prev => !prev)}
              />
              <CheckBox
                label="마케팅 수신 동의(선택"
                isChecked={secondCheckBox}
                onToggle={() => setSecondCheckBox(prev => !prev)}
              />
            </div>
          </div>
          <Button onClick={handleClick}>{allCheckBox ? "완료" : "모두 동의하기"}</Button>
        </div>
      </BottomSheet>
    </>
  );
};
