import { useEffect } from "react";
import UserSpot from "@/assets/icon/user-spot.svg";
import DefaultImg from "@/assets/icon/default-profile.svg";

interface MapMarkerProps {
  map: kakao.maps.Map;
  position: { lat: number; lng: number };
  profileImg: string | null;
  name?: string;
  onClick?: () => void;
}

export const MapMarker = ({ map, position, profileImg, name, onClick }: MapMarkerProps) => {
  useEffect(() => {
    if (!map) return;

    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.flexDirection = "column";
    wrapper.style.alignItems = "center";
    wrapper.style.gap = "4px";

    const container = document.createElement("div");
    container.style.position = "relative";
    container.style.width = "40px";
    container.style.height = "40px";

    // 배경 아이콘
    const background = document.createElement("img");
    background.src = UserSpot;
    background.style.width = "100%";
    background.style.height = "100%";
    background.style.position = "absolute";
    background.style.top = "0";
    background.style.left = "0";
    container.appendChild(background);

    // 프로필 이미지
    const profile = document.createElement("img");
    profile.src = profileImg || DefaultImg;
    profile.style.width = "35px";
    profile.style.height = "35px";
    profile.style.position = "absolute";
    profile.style.top = "50%";
    profile.style.left = "50%";
    profile.style.transform = "translate(-50%, -50%)";
    profile.style.borderRadius = "50%";
    profile.style.objectFit = "cover";
    profile.style.zIndex = "1";
    container.appendChild(profile);

    wrapper.appendChild(container);

    // 이름 레이블
    if (name) {
      const label = document.createElement("div");
      label.textContent = name;
      label.style.backgroundColor = "white";
      label.style.padding = "4px 6px";
      label.style.borderRadius = "6px";
      label.style.fontSize = "10px";
      label.style.fontWeight = "700";
      label.style.lineHeight = "120%";
      label.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
      label.style.whiteSpace = "nowrap";
      wrapper.appendChild(label);
    }

    const overlay = new window.kakao.maps.CustomOverlay({
      position: new window.kakao.maps.LatLng(position.lat, position.lng),
      content: wrapper,
      yAnchor: 0.4, // 마커가 찍히는 수직위치
    });

    overlay.setMap(map);

    if (onClick) {
      wrapper.style.cursor = "pointer";
      wrapper.addEventListener("click", onClick);
    }

    return () => {
      overlay.setMap(null);
    };
  }, [map, position, profileImg, name, onClick]);

  return null;
};
