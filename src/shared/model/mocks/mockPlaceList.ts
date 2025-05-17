interface PlaceItemProps {
  id: number;
  placeName: string;
  distance: number;
  image?: string;
  openingHours?: string;
  review?: {
    score: number;
    chips: string[];
  };
}

export const mockPlaceItems: PlaceItemProps[] = [
  {
    id: 1,
    placeName: "스타벅스 방배카페거리점",
    distance: 215,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
    openingHours: "07:30 ~ 22:00",
    review: {
      score: 4.5,
      chips: ["콘센트 많음", "좌석 많음"],
    },
  },
  {
    id: 2,
    placeName: "이디야커피 신촌점",
    distance: 350,
    openingHours: "08:00 ~ 23:00",
    review: {
      score: 4.2,
      chips: ["콘센트 많음", "좌석 많음"],
    },
  },
  {
    id: 3,
    placeName: "투썸플레이스 연남점",
    distance: 120,
    openingHours: "09:00 ~ 22:00",
  },
  {
    id: 4,
    placeName: "빽다방 신촌역점",
    distance: 180,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
    openingHours: "07:00 ~ 23:30",
  },
  {
    id: 5,
    placeName: "작은 카페 무명",
    distance: 500,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80",
    review: {
      score: 4.2,
      chips: ["콘센트 많음", "좌석 많음"],
    },
  },
  {
    id: 6,
    placeName: "커피빈 강남역점",
    distance: 260,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80",
  },
];
