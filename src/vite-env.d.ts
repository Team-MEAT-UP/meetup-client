/// <reference types="vite/client" />

interface KakaoStatic {
  init: (key: string) => void;
  isInitialized: () => boolean;
  Link?: any;
}

interface Window {
  Kakao: KakaoStatic;
}
