// src/features/mapView/ui/MapMarker.tsx
import { useEffect } from 'react';

interface MapMarkerProps {
  map: any;
  position: {
    lat: number;
    lng: number;
  };
  title?: string;
  onClick?: () => void;
}

const MapMarker = ({ map, position, title, onClick }: MapMarkerProps) => {
  useEffect(() => {
    if (!map) return;

    const marker = new window.kakao.maps.Marker({
      position: new window.kakao.maps.LatLng(position.lat, position.lng),
      map: map,
      title: title
    });

    if (onClick) {
      window.kakao.maps.event.addListener(marker, 'click', onClick);
    }

    return () => {
      marker.setMap(null);
    };
  }, [map, position, title, onClick]);

  return null;
};

export default MapMarker;