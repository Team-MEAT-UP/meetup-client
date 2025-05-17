interface LocationInfo {
  address: string;
  roadAddress: string;
  placeName: string;
}

interface KakaoGeocoderAddress {
  address_name: string;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
  mountain_yn: string;
  main_address_no: string;
  sub_address_no: string;
  zip_code: string;
}

interface KakaoGeocoderRoadAddress {
  address_name: string;
  building_name: string;
}

interface KakaoGeocoderDocument {
  address: KakaoGeocoderAddress;
  road_address: KakaoGeocoderRoadAddress | null;
}

export const getLocationInfo = (latitude: number, longitude: number): Promise<LocationInfo> => {
  return new Promise((resolve, reject) => {
    if (!window.kakao || !window.kakao.maps) {
      reject(new Error("Kakao Maps SDK not loaded"));
      return;
    }

    window.kakao.maps.load(() => {
      const geocoder = new window.kakao.maps.services.Geocoder();

      geocoder.coord2Address(longitude, latitude, (result: KakaoGeocoderDocument[], status: string) => {
        if (status === window.kakao.maps.services.Status.OK) {
          if (result && result.length > 0) {
            const document = result[0];

            const address = document.address.address_name;
            const roadAddress = document.road_address?.address_name || address;

            // 도로명 주소가 존재하면 도로명 주소를 placeName으로, 없으면 지번 주소
            const placeName = document.road_address?.address_name ?? document.address.address_name;

            resolve({
              address,
              roadAddress,
              placeName,
            });
          } else {
            reject(new Error("주소를 찾을 수 없습니다"));
          }
        } else {
          reject(new Error(`Failed to get address from coordinates. Status: ${status}`));
        }
      });
    });
  });
};
