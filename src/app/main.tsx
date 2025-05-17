import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { useEffect } from "react";

// 카카오 SDK를 초기화하는 함수
const initializeKakaoSDK = () => {
  const kakaoKey = import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY;
  const script = document.createElement("script");
  script.async = true;
  script.onload = () => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(kakaoKey);
    }
  };
  document.head.appendChild(script);
};

const Main = () => {
  useEffect(() => {
    initializeKakaoSDK();
  }, []);
  return <App />;
};

createRoot(document.getElementById("root")!).render(<Main />);
