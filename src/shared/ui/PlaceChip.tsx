import Plug from "@/assets/icon/plug.svg";
import Seat from "@/assets/icon/seat.svg";

interface PlaceChipProps {
  label: string;
}

///@TODO chip 종류 추가하기
const chipMapping: Record<string, { icon: string; displayName: string }> = {
  "콘센트 많음": { icon: Plug, displayName: "콘센트 많음" },
  "좌석 많음": { icon: Seat, displayName: "좌석 많음" },
};

const PlaceChip = ({ label }: PlaceChipProps) => {
  const chip = chipMapping[label];

  // chip이 매핑되지 않는 경우
  if (!chip) return;

  return (
    <div className="flex gap-[1px] py-[3px] px-[6px] bg-gray-5 rounded-[6px] items-center font-semibold text-xxs">
      <img src={chip.icon} alt={chip.displayName} className="w-4 h-4" />
      {chip.displayName}
    </div>
  );
};

export default PlaceChip;
