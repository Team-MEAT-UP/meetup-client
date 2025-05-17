import { useNavigate } from "react-router-dom";
import Check from "@/assets/icon/check.svg";
import Review from "@/assets/icon/review.svg";

interface ChipProps {
  id: number;
  isComplete: boolean;
}

export const Chip = ({ id, isComplete }: ChipProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isComplete) return;

    navigate(`/review/${id}`);
  };

  return (
    <button
      className={`flex gap-1 px-3 py-1 w-fit rounded-[40px] items-center text-sm font-semibold ${isComplete ? "bg-gray-5 text-gray-30" : "bg-sub-10 text-sub-sub"}`}
      onClick={handleClick}>
      <img src={isComplete ? Check : Review} alt="icon" className="w-3 h-3" />
      {isComplete ? "작성 완료" : "리뷰 작성"}
    </button>
  );
};
