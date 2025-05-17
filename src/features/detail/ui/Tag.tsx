import { TagTypeInfo } from "../config";

interface TagProps {
  type: "plug" | "seat";
  score: 1 | 2 | 3 | 4 | 5;
}

export const Tag = ({ type, score }: TagProps) => {
  const { label, iconSrc, scoreText } = TagTypeInfo[type];

  return (
    <div className="w-full px-4 py-2 rounded-[10px] border border-gray-5 flex justify-between items-center text-sm">
      <div className="flex gap-[2px] items-center">
        <img src={iconSrc} alt={type} />
        <p className="font-medium text-gray-70">{label}</p>
      </div>
      <p className="font-semibold text-gray-90">{scoreText[score]}</p>
    </div>
  );
};
