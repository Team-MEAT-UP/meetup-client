import { type ReactNode } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { Overlay } from "@/shared/ui/BottomSheet/Overlay";

type AppInTossActionVariant = "brand" | "neutral";

export interface AppInTossBottomSheetAction {
  /** 버튼 라벨 */
  label: ReactNode;
  onClick?: () => void;
  /** brand: 파란 채움 버튼, neutral: 연한 회색 버튼 (기본 brand) */
  variant?: AppInTossActionVariant;
  disabled?: boolean;
}

interface AppInTossBottomSheetProps {
  /** 바텀시트 노출 여부 */
  isOpen?: boolean;
  /** 닫기(기본 닫기 버튼·딤 클릭) 콜백 */
  onClose: () => void;
  /** 바텀시트 내부 컨텐츠 */
  children?: ReactNode;
  /** 기본 닫기 버튼 외에 추가할 커스텀 버튼들 (닫기 버튼 위에 노출) */
  actions?: AppInTossBottomSheetAction[];
  /** 기본 닫기 버튼 라벨 */
  closeLabel?: string;
  /** 기본 닫기 버튼 노출 여부 */
  showCloseButton?: boolean;
  /** 딤 영역 클릭 시 닫힘 여부 */
  closeOnDimClick?: boolean;
}

const actionVariantClass: Record<AppInTossActionVariant, string> = {
  brand: "bg-[#3182f6] text-white",
  neutral: "bg-[rgba(7,25,76,0.05)] text-[rgba(3,18,40,0.7)]",
};

const buttonBaseClass =
  "flex min-h-[56px] w-full items-center justify-center rounded-2xl px-7 text-[17px] font-semibold disabled:opacity-40";

export const AppInTossBottomSheet = ({
  isOpen = true,
  onClose,
  children,
  actions = [],
  closeLabel = "닫기",
  showCloseButton = true,
  closeOnDimClick = true,
}: AppInTossBottomSheetProps) => {
  if (!isOpen) return null;

  const portalRoot = document.getElementById("portal-root");
  if (!portalRoot) return null;

  const hasButtonArea = actions.length > 0 || showCloseButton;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[1000]">
      <Overlay isBlur={false} onClick={closeOnDimClick ? onClose : undefined} />
      <div className="fixed bottom-0 left-1/2 z-[110] w-full max-w-[600px] -translate-x-1/2 p-[10px]">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          role="dialog"
          aria-modal="true"
          className="flex w-full flex-col rounded-[28px] bg-white pb-5 shadow-bt01">
        {/* 핸들 */}
        <div className="flex justify-center pt-4">
          <span className="h-1 w-12 rounded-full bg-[#e5e8eb]" />
        </div>

        {/* 내부 컨텐츠 */}
        {children}

        {/* 버튼 영역 */}
        {hasButtonArea && (
          <div className="flex flex-col gap-2 px-5 pt-[34px]">
            {actions.map((action, index) => (
              <button
                key={index}
                type="button"
                onClick={action.onClick}
                disabled={action.disabled}
                className={`${buttonBaseClass} ${actionVariantClass[action.variant ?? "brand"]}`}>
                {action.label}
              </button>
            ))}
            {showCloseButton && (
              <button type="button" onClick={onClose} className={`${buttonBaseClass} ${actionVariantClass.neutral}`}>
                {closeLabel}
              </button>
            )}
          </div>
        )}
        </motion.div>
      </div>
    </div>,
    portalRoot
  );
};
