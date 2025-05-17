import Subway from "@/assets/icon/subway.svg";
import SubwayGray from "@/assets/icon/subwayGray.svg";
import Car from "@/assets/icon/car.svg";
import CarGray from "@/assets/icon/carGray.svg";
import { TransferType } from "@/features/mapView/model";
import { useTransfer } from "@/features/mapView/hooks";

interface FixedButtonProps {
  type: TransferType;
  setType: React.Dispatch<React.SetStateAction<"subway" | "car">>;
  isMe: boolean;
}

export const FixedButton = ({ type, setType, isMe }: FixedButtonProps) => {
  const { mutate } = useTransfer();

  const handleClick = (isTransit: boolean) => {
    if (!isMe) return;
    else {
      mutate({
        isTransit: isTransit,
      });
    }
  };

  return (
    <div className="flex px-5 py-3 fixed bottom-0 left-0 w-full z-[1001] bg-white">
      <button
        className={`flex gap-1 items-center w-1/2 justify-center text-md py-2 ${type === "subway" ? "font-semibold text-white rounded-[50px] bg-gray-90" : "font-medium text-gray-30"}`}
        onClick={() => {
          setType("subway");
          handleClick(true);
        }}>
        <img src={type === "subway" ? Subway : SubwayGray} alt="subway" className="w-5 h-5" />
        대중교통
      </button>
      <button
        className={`flex gap-1 items-center w-1/2 justify-center text-md py-2 ${type === "car" ? "font-semibold text-white rounded-[50px] bg-gray-90" : "font-medium text-gray-30"}`}
        onClick={() => {
          setType("car");
          handleClick(false);
        }}>
        <img src={type === "car" ? Car : CarGray} alt="subway" className="w-5 h-5" />
        자가용
      </button>
    </div>
  );
};
