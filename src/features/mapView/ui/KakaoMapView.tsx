import { useEffect, useRef, useState } from "react";
import MapMarker from "./MapMarker";
import { mockLocationData } from "../../../shared/model";

function KakaoMapView() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);
  const [center, setCenter] = useState<any>(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!window.kakao || !window.kakao.maps) return;

      window.kakao.maps.load(() => {
        if (mapRef.current) {
          // mockLocationData의 midpoint를 초기 중심점으로 설정
          const centerLatLng = new window.kakao.maps.LatLng(
            mockLocationData.midpoint.lat,
            mockLocationData.midpoint.lng
          );
          setCenter(centerLatLng);
          
          const options = {
            center: centerLatLng,
            level: 3,
          };

          const kakaoMap = new window.kakao.maps.Map(mapRef.current, options);
          setMap(kakaoMap);

          // 모든 마커의 위치를 포함하는 LatLngBounds 객체 생성
          const bounds = new window.kakao.maps.LatLngBounds();
          
          // mockLocationData의 모든 위치를 bounds에 추가
          mockLocationData.locations.forEach(location => {
            bounds.extend(new window.kakao.maps.LatLng(location.lat, location.lng));
          });

          // 지도에 bounds 적용
          kakaoMap.setBounds(bounds);

          window.kakao.maps.event.addListener(kakaoMap, 'tilesloaded', () => {
            console.log("맵 로드 완료");
          });
        }
      });
    };

    if (document.getElementById("kakao-map-script")) {
      initializeMap(); // 이미 스크립트 로드된 경우
    } else {
      const script = document.createElement("script");
      script.id = "kakao-map-script";
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
        import.meta.env.VITE_KAKAO_JAVASCRIPT_KEY
      }&autoload=false&libraries=services,clusterer`;
      script.async = true;

      script.onload = () => {
        initializeMap(); // 스크립트가 로드된 후 초기화
      };

      document.head.appendChild(script);
    }
  }, []);

  // midpoint에서 각 마커까지의 Polyline을 그리는 함수
  const drawPolylines = () => {
    if (!map || !center) return;

    // 기존 Polyline 제거
    if (window.polylines) {
      window.polylines.forEach((polyline: any) => {
        polyline.setMap(null);
      });
    }

    // 새로운 Polyline 배열 생성
    window.polylines = [];

    // 각 마커 위치에서 midpoint까지 Polyline 그리기
    mockLocationData.locations.forEach(location => {
      const markerLatLng = new window.kakao.maps.LatLng(location.lat, location.lng);
      
      const polyline = new window.kakao.maps.Polyline({
        path: [markerLatLng, center],
        strokeWeight: 3,
        strokeColor: '#FF0000',
        strokeOpacity: 0.7,
        map: map
      });

      window.polylines.push(polyline);
    });
  };

  // map이나 center가 변경될 때마다 Polyline 다시 그리기
  useEffect(() => {
    drawPolylines();
  }, [map, center]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "500px",
        borderRadius: "8px",
      }}
    >
      {map && mockLocationData.locations.map((location) => (
        <MapMarker 
          key={location.id} 
          map={map} 
          position={{ lat: location.lat, lng: location.lng }}
          title={location.name}
        />
      ))}
    </div>
  );
}

export default KakaoMapView;
