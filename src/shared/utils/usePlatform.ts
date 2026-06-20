import { useState } from "react";

/**
 * 현재 접속 환경이 앱인토스(토스 웹뷰)인지, 일반 웹 브라우저(디바이스)인지 구분하는 훅이에요.
 *
 * 토스 앱은 웹뷰에 네이티브 브릿지(`window.ReactNativeWebView`)를 주입해요.
 * 일반 웹 브라우저에는 이 객체가 존재하지 않으므로, 이를 기준으로 환경을 판별해요.
 *
 * @returns
 * - `isAppInToss`: 앱인토스 환경이면 `true`
 * - `isWeb`: 일반 웹 브라우저(디바이스) 환경이면 `true`
 */
export const usePlatform = () => {
  // 환경 값은 런타임 중 바뀌지 않으므로 최초 1회만 계산해요.
  const [isAppInToss] = useState(
    () =>
      typeof window !== "undefined" &&
      typeof window.ReactNativeWebView !== "undefined",
  );

  return {
    isAppInToss,
    isWeb: !isAppInToss,
  };
};
