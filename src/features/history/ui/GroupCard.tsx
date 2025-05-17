import { Chip } from "./Chip";
import Pin from "@/assets/icon/pin.svg";

interface GroupCardProps {
  id: number;
  midPoint: string;
  isSelect?: boolean;
  place?: string;
  imgUrl: string[];
  people: number;
  day: number;
  isComplete: boolean;
}

export const GroupCard = ({
  id,
  midPoint,
  isSelect = true,
  place,
  imgUrl,
  people,
  day,
  isComplete,
}: GroupCardProps) => {
  const displayImages = imgUrl.slice(0, 3);

  return (
    <section className="flex flex-col px-5 pb-5 pt-4 gap-1 border-b border-b-gray-5">
      <span className="text-md font-semibold text-gray-90">{midPoint}</span>
      <div className="flex gap-1 items-center text-sm font-medium text-gray-40 overflow-hidden text-ellipsis whitespace-nowrap">
        {isSelect ? (
          <>
            <img src={Pin} alt="pin" className="w-4 h-4" />
            <p>{place}</p>
          </>
        ) : (
          <p>아직 장소가 정해지지 않았어요</p>
        )}
      </div>
      <div className="flex mt-1 items-center justify-between">
        <div className="flex gap-1 text-xs font-medium items-center">
          {/* 이미지 영역 */}
          <div className="flex items-center">
            {displayImages.map((src, index) => {
              const zIndex = 30 - index * 10;
              const marginClass = index === 0 ? "" : "-ml-[7px]";
              return (
                <img
                  key={index}
                  src={src}
                  className={`w-[21px] h-[21px] rounded-full border border-white ${marginClass}`}
                  style={{ zIndex }}
                />
              );
            })}
          </div>

          <p className="text-gray-90">{people}명</p>
          <p className="font-semibold text-gray-40">·</p>
          <p className="text-gray-40">{day}일 전</p>
        </div>
        <Chip isComplete={isComplete} id={id} />
      </div>
    </section>
  );
};
