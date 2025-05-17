import Pin from "@/assets/icon/pinBlue.svg";
import Star from "@/assets/icon/star.svg";
import Time from "@/assets/icon/time.svg";

export const PlaceInfo = () => {
  return (
    <div className="px-5 pt-4 pb-[14px] flex flex-col gap-[6px]">
      <div className="flex py-[2px] px-[6px] gap-1 items-center rounded-[4px] bg-sub-10 w-fit text-xs font-semibold text-sub-sub">
        <img src={Pin} alt="pin" className="w-[14px] h-[14px]" />
        역에서 215m
      </div>
      <div>
        <span className="text-xl font-semibold text-gray-90">스타벅스 방배카페거리점</span>
        <div className="flex items-center gap-[2px]">
          <img src={Star} alt="star" className="w-5 h-5" />
          <p className="text-md font-semibold text-gray-80">4.5</p>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-1 text-sm font-medium">
          <img src={Time} alt="time" className="w-[14px] h-[14px]" />
          <p className="text-gray-50">영업시간</p>
          <p className="text-gray-80 ml-1">07:30 ~ 22:00</p>
        </div>
      </div>
    </div>
  );
};
