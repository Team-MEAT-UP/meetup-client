import Plug from "@/assets/icon/plug.svg";
import Seat from "@/assets/icon/seat.svg";

export const TagTypeInfo = {
  plug: {
    label: "콘센트",
    iconSrc: Plug,
    scoreText: {
      5: "아주 많아요",
      4: "많아요",
      3: "적당해요",
      2: "부족해요",
      1: "없어요",
    },
  },
  seat: {
    label: "좌석",
    iconSrc: Seat,
    scoreText: {
      5: "아주 많아요",
      4: "많아요",
      3: "적당해요",
      2: "부족해요",
      1: "많이 부족해요",
    },
  },
} as const;
