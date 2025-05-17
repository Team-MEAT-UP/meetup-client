export const loadKakaoMapSdk = (): Promise<void> => {
    return new Promise((resolve) => {
      if (window.kakao && window.kakao.maps && window.kakao.maps.services) {
        resolve();
        return;
      }
  
      const existingScript = document.querySelector(`script[src*="dapi.kakao.com"]`);
      if (existingScript) {
        existingScript.addEventListener("load", () => {
          window.kakao.maps.load(resolve);
        });
        return;
      }
  
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY}&autoload=false&libraries=services`;
      script.async = true;
      script.onload = () => {
        window.kakao.maps.load(resolve);
      };
      document.head.appendChild(script);
    });
  };
  