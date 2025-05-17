export interface RawLocation {
  id: string;
  place_name: string;
  address_name: string;
  road_address_name: string;
  x: string;
  y: string;
}

export interface StartPointResponse {
  result: string;
  data: {
    documents: RawLocation[];
    meta: {
      total_count: number;
      pageable_count: number;
      is_end: boolean;
      same_name: {
        region: string[];
        keyword: string;
        selected_region: string;
      };
    };
  };
  error: {
    code: string;
    message: string;
  };
}

export interface StartPoint {
  id: string;
  name: string;
  address: string;
  roadAddress: string;
  latitude: number;
  longitude: number;
}
