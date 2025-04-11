// src/shared/model/kakao.maps.d.ts
declare global {
    interface Window {
      kakao: {
        maps: {
          load: (callback: () => void) => void;
          Map: new (container: HTMLElement, options: {
            center: any;
            level: number;
          }) => {
            setBounds: (bounds: any) => void;
          };
          LatLng: new (lat: number, lng: number) => any;
          LatLngBounds: new () => {
            extend: (latLng: any) => void;
          };
          Marker: new (options: {
            position: any;
            map: any;
            title?: string;
          }) => {
            setMap: (map: any) => void;
          };
          Polyline: new (options: {
            path: any[];
            strokeWeight: number;
            strokeColor: string;
            strokeOpacity: number;
            map: any;
          }) => {
            setMap: (map: any) => void;
          };
          event: {
            addListener: (target: any, type: string, handler: () => void) => void;
            removeListener: (target: any, type: string, handler: () => void) => void;
          };
        };
      };
      polylines: any[];
    }
  }
  
  export {};