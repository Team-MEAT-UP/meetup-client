/// <reference types="vite/client" />
interface KakaoStatic {
  init: (key: string) => void;
  isInitialized: () => boolean;
  Link?: {
    sendDefault: (options: any) => void;
  };
}

interface Window {
  Kakao: KakaoStatic;
  dataLayer?: unknown[];
  // 앱인토스(토스 웹뷰)에서 토스 앱이 주입하는 네이티브 브릿지
  ReactNativeWebView?: {
    postMessage: (message: string) => void;
  };
  // GA4 gtag 함수 오버로드 (any/unknown 지양)
  gtag?: {
    (command: "js", target: Date): void;
    (command: "config", measurementId: string, params?: Record<string, string | number | boolean | undefined>): void;
    (command: "event", eventName: string, params?: Record<string, string | number | boolean | undefined>): void;
  };
}
