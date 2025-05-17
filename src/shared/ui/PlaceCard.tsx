import PlaceChip from "./PlaceChip";
import Star from "@/assets/icon/star.svg";

interface PlaceCardItemProps {
  placeName: string;
  distance: number;
  image?: string;
  openingHours?: string;
  review?: {
    score: number;
    chips: string[];
  };
  onClick?: () => void;
}

const PlaceCard = ({ placeName, distance, image, openingHours, review, onClick }: PlaceCardItemProps) => {
  return (
    <div className="flex flex-col gap-3 p-4 rounded-2xl w-full shadow-list bg-white" onClick={onClick}>
      <div className="flex justify-between">
        <div className="flex gap-1 flex-col text-xs font-medium">
          <span className="text-md font-semibold text-gray-90">{placeName}</span>
          {/* openingHours가 있을 때만 영업시간 표시 */}
          {openingHours && (
            <div className="flex gap-[6px] items-center">
              <p className="text-gray-50">영업 시간</p>
              <p className="text-gray-70">{openingHours}</p>
            </div>
          )}
          <p className="text-sub-sub">역에서 {distance}m</p>
        </div>
        {/* image가 있을 때만 이미지 표시 */}
        {image && <img src={image} alt="placeImg" className="w-[68px] h-[68px] rounded-lg object-cover" />}
      </div>

      {/* review가 있을 때만 별점 + 칩 표시 */}
      {review && (
        <div className="flex gap-2">
          <div className="flex gap-[2px] items-center text-sm font-semibold text-gray-90">
            <img src={Star} alt="star" className="w-4 h-4" />
            {review.score.toFixed(1)}
          </div>

          {/* chips가 있을 때만 표시 */}
          {review.chips.length > 0 && review.chips.map(chip => <PlaceChip key={chip} label={chip} />)}
        </div>
      )}
    </div>
  );
};

export default PlaceCard;
