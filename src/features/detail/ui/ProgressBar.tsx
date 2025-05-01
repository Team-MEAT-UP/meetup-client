import { CongestionInfo, TextType } from "../config";

interface ProgressBarProps {
  type: "morning" | "afternoon" | "evening";
  congestion: 0 | 1 | 2 | 3 | 4 | 5;
}

export const ProgressBar = ({ type, congestion }: ProgressBarProps) => {
  const label = TextType[type];
  const isEmpty = congestion === 0;
  const percentage = congestion * 20;

  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-[18px] items-center text-sm font-semibold">
        <span className="text-gray-40 w-[25px]">{label}</span>
        {isEmpty ? (
          <p className="text-gray-20">아직 데이터가 없어요</p>
        ) : (
          <p className="text-gray-90">{CongestionInfo[congestion].description}</p>
        )}
      </div>
      {!isEmpty && (
        <div className="relative w-[92px] h-[6px] rounded-[30px] bg-gray-5">
          <div
            className={`absolute top-0 left-0 h-[6px] rounded-[30px] ${CongestionInfo[congestion].colorClass}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      )}
    </div>
  );
};
