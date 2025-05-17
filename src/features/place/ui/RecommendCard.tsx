import Meeting from "@/assets/icon/meetingRecommend.svg";

interface RecommendCardProps {
  place: string;
  onClick: () => void;
}

export const RecommendCard = ({ place, onClick }: RecommendCardProps) => {
  return (
    <div className="flex flex-row items-center justify-between cursor-pointer" onClick={onClick}>
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-semibold">
          <span className=" text-sub-sub ">{place}</span> <br />
          <span className="text-gray-90">여기 어때요?</span>
        </h1>
        <p className="text-gray-50 text-sm font-medium">스팟이 장소를 골라봤어요</p>
      </div>
      <img src={Meeting} alt="회의 추천장소" className="w-32 h-32" />
    </div>
  );
};
