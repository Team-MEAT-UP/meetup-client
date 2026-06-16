import { Modal } from "@/shared/ui/Modal";

interface ExitModalProps {
  isOpen?: boolean;
  /** 상단 안내 문구 */
  title?: string;
  /** 좌측 닫기 버튼 라벨 */
  closeLabel?: string;
  /** 우측 종료 버튼 라벨 */
  confirmLabel?: string;
  /** 닫기(닫기 버튼·딤 클릭) 콜백 */
  onClose: () => void;
  /** 종료하기 클릭 콜백 */
  onConfirm: () => void;
}

/**
 * Figma `Dialog/Confirm` 프레임 종료 모달
 * 공용 {@link Modal}(중앙 정렬 다이얼로그) 위에 종료 확인 컨텐츠를 얹은 형태
 */
export const ExitModal = ({
  isOpen = true,
  title = "모이삼을 종료할까요?",
  closeLabel = "닫기",
  confirmLabel = "종료하기",
  onClose,
  onConfirm,
}: ExitModalProps) => {
  if (!isOpen) return null;

  return (
    <Modal onClose={onClose} contentClassName="w-[320px] overflow-hidden rounded-[24px] bg-white shadow-pin01">
      {/* 텍스트 */}
      <div className="flex flex-col gap-2 px-[22px] pt-[22px]">
        <p className="text-[20px] font-bold leading-[1.35] text-[rgba(0,12,30,0.8)]">{title}</p>
      </div>

      {/* 버튼 영역 */}
      <div className="flex items-start justify-center gap-2 px-4 pb-4 pt-5">
        <button
          type="button"
          onClick={onClose}
          className="flex min-h-[48px] min-w-[80px] flex-1 items-center justify-center rounded-[14px] bg-[rgba(7,25,76,0.05)] px-4 text-[17px] font-semibold text-[rgba(3,18,40,0.7)]">
          {closeLabel}
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="flex min-h-[48px] min-w-[80px] flex-1 items-center justify-center rounded-[14px] bg-[#3182f6] px-4 text-[17px] font-semibold text-white">
          {confirmLabel}
        </button>
      </div>
    </Modal>
  );
};
