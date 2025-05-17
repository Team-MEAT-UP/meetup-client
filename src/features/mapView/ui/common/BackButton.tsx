import { useEventStore } from "@/shared/stores";
import Arrow from "@/assets/icon/leftArrow.svg";

const BackButton = () => {
  const toggleDetail = useEventStore(state => state.toggleDetail);

  return (
    <button
      className="absolute top-5 left-5 flex justify-center items-center w-10 h-10 bg-white rounded-[30px] shadow-bt01 z-10"
      onClick={() => toggleDetail()}>
      <img src={Arrow} alt="arrow" className="w-6 h-6" />
    </button>
  );
};

export default BackButton;
