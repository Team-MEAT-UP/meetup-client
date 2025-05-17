import { kakaoLogin } from "@/shared/utils";
import Kakao from "@/assets/icon/kakao.svg";

export const KakaoLogin = () => {
  return (
    <button
      className="flex gap-2 w-full h-14 justify-center items-center bg-kakao-yellow text-kakao-black text-lg font-semibold rounded-2xl"
      onClick={kakaoLogin}>
      <img src={Kakao} alt="kakao" className="w-5 h-5" />
      카카오 로그인
    </button>
  );
};
