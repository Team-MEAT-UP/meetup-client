export {}; // 모듈로 인식되도록 설정

declare global {
  interface Window {
    kakao: typeof kakao;
    polylines: kakao.maps.Polyline[];
  }

  namespace kakao {
    namespace maps {
      class LatLng {
        constructor(lat: number, lng: number);
      }

      class LatLngBounds {
        extend(latlng: LatLng): void;
      }

      class Map {
        constructor(container: HTMLElement, options: { center: LatLng; level: number });
        setBounds(bounds: LatLngBounds, padding?: number): void;
      }

      class Marker {
        constructor(options: { position: LatLng; map: Map; title?: string; image?: MarkerImage });
        setMap(map: Map | null): void;
      }

      class MarkerImage {
        constructor(src: string, size: Size, options?: { offset?: Point });
      }

      class Size {
        constructor(width: number, height: number);
      }

      class Point {
        constructor(x: number, y: number);
      }

      class Polyline {
        constructor(options: {
          path: LatLng[];
          strokeWeight: number;
          strokeColor: string;
          strokeOpacity: number;
          strokeStyle: string;
          map: Map;
        });
        setMap(map: Map | null): void;
      }

      class CustomOverlay {
        constructor(options: { position: LatLng; content: HTMLElement; yAnchor?: number });
        setMap(map: Map | null): void;
      }

      namespace event {
        function addListener(target: any, type: string, handler: () => void): void;

        function removeListener(target: any, type: string, handler: () => void): void;
      }

      function load(callback: () => void): void;

      namespace services {
        const Status: {
          OK: string;
          ZERO_RESULT: string;
          ERROR: string;
        };

        class Geocoder {
          coord2Address(longitude: number, latitude: number, callback: (result: any, status: string) => void): void;
        }
      }
    }
  }
}
