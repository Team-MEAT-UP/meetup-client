import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Back from "@/assets/icon/back.svg";
import Home from "@/assets/icon/appInTossHome.svg";
import More from "@/assets/icon/appInTossMore.svg";
import Close from "@/assets/icon/appInTossClose.svg";
import MoisamAppIcon from "@/assets/icon/moisamAppIcon.png";
import { ExitModal } from "./ExitModal";
import { MenuBottomSheet, type MenuBottomSheetItem } from "./MenuBottomSheet";

interface AppInTossHeaderProps {
  title?: string;
  onBack?: () => void;
  onHome?: () => void;
  onMore?: () => void;
  onClose?: () => void;
  /** 더보기 메뉴 바텀시트 상단 타이틀 */
  menuTitle?: string;
  /** 더보기 메뉴 바텀시트 행 목록 */
  menuItems?: MenuBottomSheetItem[];
}

export const AppInTossHeader = ({
  title = "모이삼",
  onBack,
  onHome,
  onMore,
  onClose,
  menuTitle,
  menuItems,
}: AppInTossHeaderProps) => {
  const navigate = useNavigate();
  const [isExitModalOpen, setIsExitModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBack = () => setIsExitModalOpen(true);
  const handleExitConfirm = () => {
    setIsExitModalOpen(false);
    onBack ? onBack() : navigate(-1);
  };
  const handleHome = () => (onHome ? onHome() : navigate("/"));
  const handleMore = () => (onMore ? onMore() : setIsMenuOpen(true));

  return (
    <header className="flex h-[44px] w-full items-center bg-white">
      {/* Left: back button + title pill */}
      <div className="flex min-w-0 flex-1 items-center pr-[4px]">
        <button
          type="button"
          onClick={handleBack}
          className="flex h-[44px] w-[44px] shrink-0 items-center justify-center">
          <img src={Back} alt="뒤로가기" className="h-6 w-6" />
        </button>

        <div className="flex h-[44px] items-center">
          <div className="flex h-[34px] max-w-[224px] items-center gap-[6px] rounded-[99px] bg-[rgba(0,23,51,0.02)] pl-[12px] pr-[10px] backdrop-blur-[20px]">
            <img
              src={MoisamAppIcon}
              alt="모이삼"
              className="h-[18px] w-[18px] shrink-0 rounded-[6px] object-cover"
            />
            <span className="min-w-0 truncate text-[15px] font-semibold leading-[22.5px] text-[#191f28]">
              {title}
            </span>
            <button
              type="button"
              onClick={handleHome}
              className="flex shrink-0 items-center justify-center">
              <img src={Home} alt="홈" className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Right: more + close pill */}
      <div className="flex shrink-0 items-center gap-[4px] pr-[10px]">
        <div className="flex h-[34px] items-center justify-center rounded-[99px] bg-[rgba(0,23,51,0.02)] px-[2px] backdrop-blur-[20px]">
          <button
            type="button"
            onClick={handleMore}
            className="flex h-[44px] w-[44px] items-center justify-center">
            <img src={More} alt="더보기" className="h-5 w-5" />
          </button>
          <div className="h-[16px] w-px shrink-0 rounded-[1px] bg-[rgba(0,27,55,0.1)]" />
          <button
            type="button"
            onClick={onClose}
            className="flex h-[44px] w-[44px] items-center justify-center">
            <img src={Close} alt="닫기" className="h-5 w-5" />
          </button>
        </div>
      </div>

      <ExitModal
        isOpen={isExitModalOpen}
        onClose={() => setIsExitModalOpen(false)}
        onConfirm={handleExitConfirm}
      />

      <MenuBottomSheet
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        title={menuTitle ?? title}
        items={menuItems}
      />
    </header>
  );
};
