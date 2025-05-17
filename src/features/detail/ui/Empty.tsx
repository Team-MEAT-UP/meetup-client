import EmptyDetail from "@/assets/icon/emptyDetail.svg";

export const Empty = () => {
  return (
    <div className="p-5 pt-[26px] flex flex-col items-center">
      <img src={EmptyDetail} alt="empty" className="w-[160px] h-[160px]" />
      <span className="mt-4 text-md font-semibold text-gray-40">아직 리뷰가 없어요</span>
      <p className="text-sm font-medium text-gray-30">
        다녀온 경험을 간단히 남겨주세요
        <br /> 다음 방문에 참고할 수 있어요
      </p>
    </div>
  );
};
