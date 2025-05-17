import Check from "@/assets/icon/checkBox.svg";
import CheckActive from "@/assets/icon/checkBoxBlue.svg";
import Arrow from "@/assets/icon/rightArrow.svg";

interface CheckBoxProps {
  label: string;
  isChecked: boolean;
  onToggle: () => void;
}

export const CheckBox = ({ label, isChecked, onToggle }: CheckBoxProps) => {
  return (
    <div className="flex justify-between">
      <button className="flex gap-2 items-center" onClick={onToggle}>
        <img src={isChecked ? CheckActive : Check} alt="check" className="w-5 h-5" />
        <p className="text-md font-medium text-gray-60">{label}</p>
      </button>
      <button>
        <img src={Arrow} alt="arrow" className="w-4 h-4" />
      </button>
    </div>
  );
};
