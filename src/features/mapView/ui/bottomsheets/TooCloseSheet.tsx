import { BottomSheet } from "@/shared/ui";
import { Overlay } from "@/shared/ui/BottomSheet/Overlay";
import Error from "@/assets/icon/distanceError.svg";
import { FixedButtons } from "./durationBottomsheet";

export const TooCloseSheet = () => {
  return (
    <>
      <Overlay />
      <BottomSheet>
        <BottomSheet.Content>
          <div className="flex flex-col justify-center items-center h-full">
            <img src={Error} alt="memeberError" className="w-[160px] h-[160px]" />
            <h1 className="text-gray-80 font-bold text-lg">가까워서 중간지점을 찾을 수 없어요</h1>
            <p className="text-gray-40 text-sm">멤버를 추가하거나 출발지를 수정해주세요</p>
          </div>
          <FixedButtons />
        </BottomSheet.Content>
      </BottomSheet>
    </>
  );
};
