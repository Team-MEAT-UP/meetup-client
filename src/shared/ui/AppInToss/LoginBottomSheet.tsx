import RightArrow from "@/assets/icon/rightArrowGray.svg";
import { kakaoLogin } from "@/shared/utils";
import { AppInTossBottomSheet } from "./AppInTossBottomSheet";

interface LoginBottomSheetProps {
  isOpen?: boolean;
  onClose: () => void;
  /** "동의하고 시작하기" 클릭 콜백 */
  onConfirm?: () => void;
  /** "개인정보 제3자 제공동의" 행 클릭 콜백 */
  onClickPolicy?: () => void;
}

/**
 * Figma `HI_로그인(예시)` 프레임 바텀시트
 * 공용 {@link AppInTossBottomSheet} 위에 로그인 안내 컨텐츠를 얹은 형태
 */
export const LoginBottomSheet = ({ isOpen, onClose, onConfirm, onClickPolicy }: LoginBottomSheetProps) => {
  // TODO: 토스 로그인 연동 전까지 임시로 카카오 로그인으로 리다이렉트
  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    else kakaoLogin({ to: "history" });
  };

  return (
    <AppInTossBottomSheet
      isOpen={isOpen}
      onClose={onClose}
      actions={[{ label: "동의하고 시작하기", variant: "brand", onClick: handleConfirm }]}>
      {/* 타이틀 */}
      <div className="px-6 pt-[21px]">
        <p className="text-[20px] font-bold leading-[1.35] text-[rgba(0,12,30,0.8)]">
          모이삼에
          <br />
          토스로 로그인할까요?
        </p>
      </div>

      {/* 서브 타이틀 */}
      <div className="px-6 pb-[13px] pt-2">
        <p className="text-[15px] leading-[22.5px] text-[#6b7684]">로그인 예시 바텀시트입니다.</p>
      </div>

      {/* 바디 - 리스트 행 */}
      <button
        type="button"
        onClick={onClickPolicy}
        className="flex min-h-[44px] w-full items-center px-6 py-4 text-left">
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="text-[17px] font-bold leading-[1.35] text-[rgba(0,12,30,0.8)]">개인정보 제3자 제공동의</span>
          <span className="text-[13px] leading-[1.35] text-[rgba(0,19,43,0.58)]">만기없이 꾸준하게</span>
        </span>
        <img src={RightArrow} alt="" className="h-6 w-6 shrink-0" />
      </button>
    </AppInTossBottomSheet>
  );
};
