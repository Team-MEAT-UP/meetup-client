import EmptyHistory from "@/assets/icon/emptyHistory.svg";

export const Empty = () => {
  return (
    <div className="mt-[100px] flex flex-col items-center gap-[2px]">
      <img src={EmptyHistory} alt="empty" className="w-[160px] h-[160px]" />
      <span className="text-md font-semibold text-gray-40">아직 참여한 모임이 없어요</span>
      <p className="text-sm font-medium text-gray-30">모임에 참여하거나 직접 만들어보세요</p>
    </div>
  );
};
