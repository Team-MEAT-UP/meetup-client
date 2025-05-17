import { useEffect } from "react";
import Polygon from "@/assets/icon/polygon.svg";
import MeetingSpot from "@/assets/icon/meeting-spot.svg";

interface MeetingMarkerProps {
  map: kakao.maps.Map;
  position: {
    lat: number;
    lng: number;
  };
  title: string;
}

export function MeetingMarker({ map, position, title }: MeetingMarkerProps) {
  useEffect(() => {
    if (!map) return;

    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.alignItems = "center";
    wrapper.style.gap = "0";

    // 레이블 컨테이너
    const labelContainer = document.createElement("div");
    labelContainer.style.display = "flex";
    labelContainer.style.flexDirection = "column";
    labelContainer.style.alignItems = "center";

    // 이름 레이블
    const label = document.createElement("div");
    label.textContent = title;
    label.style.backgroundColor = "#007AFF";
    label.style.color = "white";
    label.style.padding = "2px 6px";
    label.style.borderRadius = "6px";
    label.style.fontSize = "12px";
    label.style.fontWeight = "600";
    label.style.lineHeight = "150%";
    label.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    label.style.whiteSpace = "nowrap";
    labelContainer.appendChild(label);

    // 폴리곤 이미지
    const polygon = document.createElement("img");
    polygon.src = Polygon;
    polygon.style.width = "12px";
    polygon.style.height = "6px";
    polygon.style.marginTop = "0px";
    labelContainer.appendChild(polygon);

    wrapper.appendChild(labelContainer);

    // 마커 이미지 컨테이너
    const container = document.createElement("div");
    container.style.position = "relative";
    container.style.width = "56px";
    container.style.height = "56px";
    container.style.marginTop = "-15px";

    // 마커 이미지
    const markerImg = document.createElement("img");
    markerImg.src = MeetingSpot;
    markerImg.style.width = "100%";
    markerImg.style.height = "100%";
    container.appendChild(markerImg);
    wrapper.appendChild(container);

    const overlay = new window.kakao.maps.CustomOverlay({
      position: new window.kakao.maps.LatLng(position.lat, position.lng),
      content: wrapper,
      yAnchor: 0.7,
    });

    overlay.setMap(map);

    return () => {
      overlay.setMap(null);
    };
  }, [map, position, title]);

  return null;
}
