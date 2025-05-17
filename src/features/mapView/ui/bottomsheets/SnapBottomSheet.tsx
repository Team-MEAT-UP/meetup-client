import { SnapBottomSheet } from "@/shared/ui";
import { BottomSheetContent, FixedButtons, GroupAverageTime } from "./durationBottomsheet";

export const SnapMapBottomSheet = () => {
  return (
    <SnapBottomSheet minHeightVh={35}>
      <div className="relative">
        <SnapBottomSheet.Header />
        <button className="absolute -top-14 left-1/2 -translate-x-1/2 bg-gray-80 text-white font-semibold text-md px-[24px] py-[12px] rounded-3xl shadow-pin02">
          모임 장소 정하기
        </button>
      </div>
      <GroupAverageTime />
      <SnapBottomSheet.Content>
        <BottomSheetContent />
        <FixedButtons />
      </SnapBottomSheet.Content>
    </SnapBottomSheet>
  );
};
