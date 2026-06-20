import { type ReactNode } from "react";
import { AppInTossBottomSheet } from "./AppInTossBottomSheet";
// NOTE: 아이콘은 임시 아이콘 사용 (디자인 확정 시 교체)
import Edit from "@/assets/icon/edit.svg";
import Warning from "@/assets/icon/warning.svg";
import People from "@/assets/icon/people.svg";
import AddUser from "@/assets/icon/addUser.svg";
import Share from "@/assets/icon/share.svg";
import Setting from "@/assets/icon/setting.svg";

export interface MenuBottomSheetItem {
  /** 행 왼쪽 원형 배경 안에 노출되는 아이콘 */
  icon?: ReactNode;
  label: string;
  onClick?: () => void;
}

interface MenuBottomSheetProps {
  isOpen?: boolean;
  onClose: () => void;
  /** 상단 타이틀 (모임 이름 등) */
  title?: string;
  /** 메뉴 행 목록 (미전달 시 기본 메뉴 노출) */
  items?: MenuBottomSheetItem[];
}

const menuIcon = (src: string, alt: string) => (
  <img src={src} alt={alt} className="h-[18px] w-[18px]" />
);

const DEFAULT_ITEMS: MenuBottomSheetItem[] = [
  { icon: menuIcon(Edit, "이용 후기 남기기"), label: "이용 후기 남기기" },
  { icon: menuIcon(Warning, "신고하기"), label: "멍 때리기 신고하기" },
  { icon: menuIcon(People, "고객센터"), label: "고객센터" },
  { icon: menuIcon(AddUser, "홈 화면에 추가"), label: "홈 화면에 추가" },
  { icon: menuIcon(Share, "공유하기"), label: "공유하기" },
  { icon: menuIcon(Setting, "설정"), label: "설정" },
];

/**
 * Figma `HI_설정(예시)` 프레임 바텀시트
 * 공용 {@link AppInTossBottomSheet} 위에 메뉴 리스트를 얹은 형태
 */
export const MenuBottomSheet = ({
  isOpen,
  onClose,
  title = "멍 때리기",
  items = DEFAULT_ITEMS,
}: MenuBottomSheetProps) => {
  return (
    <AppInTossBottomSheet isOpen={isOpen} onClose={onClose}>
      {/* 타이틀 */}
      <div className="px-6 pb-2 pt-[21px]">
        <p className="text-[20px] font-bold leading-[1.35] text-[rgba(0,12,30,0.8)]">{title}</p>
      </div>

      {/* 메뉴 리스트 */}
      <ul className="flex flex-col">
        {items.map((item, index) => (
          <li key={index}>
            <button
              type="button"
              onClick={item.onClick}
              className="flex w-full items-center gap-3 px-6 py-3 text-left">
              {item.icon && (
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sub-10">
                  {item.icon}
                </span>
              )}
              <span className="text-[17px] font-medium text-[rgba(0,12,30,0.8)]">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </AppInTossBottomSheet>
  );
};
