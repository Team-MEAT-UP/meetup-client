import { OpenMapProps } from "../model";

export const openTMAP = ({ endPoint, endLat, endLng }: OpenMapProps) => {
  const tMapUrl = `tmap://route?goalname=${endPoint}&goalx=${endLng}&goaly=${endLat}`;
  const appStoreUrl = "https://apps.apple.com/kr/app/t-map/id431589174";

  window.open(tMapUrl, "_blank");

  // TMAP이 설치되지 않으면 APP store로 리다이렉트
  setTimeout(() => {
    if (!document.hidden) {
      window.open(appStoreUrl, "_blank");
    }
  }, 2000);
};
