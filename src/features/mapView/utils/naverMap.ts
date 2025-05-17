import { OpenMapProps } from "../model";

interface OpenNaverMapProps extends OpenMapProps {
  startPoint: string;
  startLat: number;
  startLng: number;
}

export const openNaverMap = ({ startPoint, startLat, startLng, endPoint, endLat, endLng }: OpenNaverMapProps) => {
  const naverMapUrl = `https://map.naver.com/index.nhn?slng=${startLng}&slat=${startLat}&stext=${startPoint}&elng=${endLng}&elat=${endLat}&etext=${endPoint}&menu=route`;
  window.open(naverMapUrl, "_blank");
};
