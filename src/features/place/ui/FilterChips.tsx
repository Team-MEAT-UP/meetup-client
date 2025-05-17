import { useState } from "react";
import Meeitng from "@/assets/icon/meeting.svg";
import Study from "@/assets/icon/study.svg";
import Drinking from "@/assets/icon/drinking.svg";

type FilterType = "회의" | "공부" | "술자리" | "전체";
const filters: FilterType[] = ["회의", "공부", "술자리", "전체"];
const icons = [Meeitng, Study, Drinking];
export const FilterChips = () => {
  const [selected, setSelected] = useState("회의");
  return (
    <div className="flex flex-row gap-2 justify-start items-center my-3 px-5">
      {filters.map((filter, idx) => {
        const isSelected = selected === filter;
        return (
          <button
            key={filter}
            onClick={() => setSelected(filter)}
            className={`flex flex-row items-center gap-1 px-[17px] py-[8px] rounded-3xl text-sm font-semibold transition-colors
              ${isSelected ? "bg-gray-80 text-white" : "bg-white text-gray-60"}`}>
            {filter !== "전체" && <img src={icons[idx]} alt={`${filter} 아이콘`} className="w-32 h-32" />}
            {filter}
          </button>
        );
      })}
    </div>
  );
};
