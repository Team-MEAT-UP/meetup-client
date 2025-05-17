import { useUserStore } from "@/shared/stores";
import { useNavigate } from "react-router-dom";
import Logo from "@/assets/icon/logo.svg";

export const MapHeader = () => {
  const navigate = useNavigate();
  const profileImg = useUserStore(state => state.profileImageUrl);

  const handleLogoClick = () => {
    if (profileImg) {
      navigate("/history");
    } else {
      navigate("/");
    }
  };

  return (
    <header className="flex justify-between items-center py-3 px-5 bg-white w-full z-[101] relative">
      <img src={Logo} alt="logo" className="w-[72px] h-5" onClick={handleLogoClick} />
      {profileImg ? (
        <button onClick={() => navigate("/my")}>
          <img src={profileImg} alt="프로필 이미지" className="w-8 h-8 rounded-full" />
        </button>
      ) : (
        <button onClick={() => navigate("/")} className="font-semibold text-gray-80 text-md rounded-full">
          로그인
        </button>
      )}
    </header>
  );
};
