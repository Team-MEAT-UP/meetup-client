import Back from "@/assets/icon/whiteBack.svg";
import BackScroll from "@/assets/icon/back.svg";
import Share from "@/assets/icon/whiteShare.svg";
import ShareScroll from "@/assets/icon/share.svg";

interface DetailHeaderProps {
  backClick: () => void;
  shareClick: () => void;
  isScrolled: boolean;
}

// 추후
export const DetailHeader = ({ backClick, shareClick, isScrolled }: DetailHeaderProps) => {
  return (
    <div className={`flex justify-between ${isScrolled ? "bg-white px-5 py-3" : "absolute top-3 left-5 right-5"}`}>
      <button onClick={backClick}>
        <img src={isScrolled ? BackScroll : Back} alt="back" className="w-6 h-6" />
      </button>
      {isScrolled && (
        <span className="text-lg font-semibold text-gray-90 w-[252px] overflow-hidden text-ellipsis whitespace-nowrap">
          스타벅스스타벅스방배거리점스타벅스
        </span>
      )}
      <button onClick={shareClick}>
        <img src={isScrolled ? ShareScroll : Share} alt="share" className="w-6 h-6" />
      </button>
    </div>
  );
};
