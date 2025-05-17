import React from "react";
import Plug from "@/assets/icon/plug.svg";
import SeatGray from "@/assets/icon/seatGray.svg";
import People from "@/assets/icon/people.svg";

type LabelType = keyof typeof infoMap;

interface ScoreSelectorProps {
  label: LabelType;
  score: number | null;
  onChange: (value: number) => void;
}

const infoMap: Record<string, { icon: string; texts: Record<number, string> }> = {
  콘센트: {
    icon: Plug,
    texts: {
      1: "콘센트가 없어요",
      2: "부족해요",
      3: "적당해요",
      4: "많아요",
      5: "아주 많아요",
    },
  },
  좌석: {
    icon: SeatGray,
    texts: {
      1: "많이 부족해요",
      2: "부족해요",
      3: "적당해요",
      4: "많아요",
      5: "아주 많아요",
    },
  },
  혼잡도: {
    icon: People,
    texts: {
      1: "매우 조용해요",
      2: "조용해요",
      3: "적당해요",
      4: "시끄러워요",
      5: "매우 시끄러워요",
    },
  },
};

const ScoreSelector = ({ label, score, onChange }: ScoreSelectorProps) => {
  const scores = [1, 2, 3, 4, 5];
  const imageSrc = infoMap[label]?.icon;
  const currentText = score !== null ? infoMap[label].texts[score] : "";

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items gap-[2px] text-md font-semibold text-gray-60 items-center">
        {imageSrc && <img src={imageSrc} alt="이미지" className="w-5 h-5" />}
        {label}

        {/* 점수 텍스트 */}
        {currentText && <span className="text-sub-sub text-sm font-medium ml-[6px]">{currentText}</span>}
      </div>

      {/* 점수 선택*/}
      <div className="flex items-center w-full">
        {scores.map((num, idx) => (
          <React.Fragment key={num}>
            <button
              onClick={() => onChange(num)}
              className={`w-6 h-6 rounded-full shrink-0 ${score !== null && num <= score ? "bg-sub-sub" : "bg-gray-10"}`}
            />
            {idx < scores.length - 1 && (
              <div className={`flex-1 h-1 ${score !== null && num < score ? "bg-sub-sub" : "bg-gray-10"}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ScoreSelector;
