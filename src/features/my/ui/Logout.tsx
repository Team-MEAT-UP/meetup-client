import { useLogout } from "../hooks";
import LogoutIcon from "@/assets/icon/logout.svg";

export const Logout = () => {
  const { mutate } = useLogout();

  const handleClick = async () => {
    mutate();
  };

  return (
    <button
      className="w-full h-[44px] flex gap-2 items-center justify-center bg-gray-5 rounded-xl"
      onClick={handleClick}>
      <img src={LogoutIcon} alt="logout" className="w-4 h-4" />
      <p className="text-md font-medium text-gray-60">로그아웃</p>
    </button>
  );
};
