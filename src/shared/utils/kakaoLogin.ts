export const kakaoLogin = () => {
  const kakaoAuthUrl = "https://api.pickspot.co.kr/oauth2/authorization/kakao";
  window.location.href = kakaoAuthUrl;
};
