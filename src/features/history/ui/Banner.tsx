import { useNavigate } from "react-router-dom";
import Arrow from "@/assets/icon/arrow.svg";
import BannerImg from "@/assets/image/banner.webp";

export const Banner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/find?startStep=1");
  };

  return (
    <div className="relative w-full bg-sub-sub px-5 py-4 rounded-2xl text-white cursor-pointer" onClick={handleClick}>
      <div className="flex items-center gap-1">
        <span className="text-lg font-bold">모임 만들기</span>
        <img src={Arrow} alt="arrow" />
      </div>
      <p className="text-sm font-medium">중간지점을 찾아드려요</p>
      <img src={BannerImg} className="absolute top-0 right-5 h-20 w-20" />
    </div>
  );
};
