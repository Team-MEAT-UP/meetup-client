import { Photo, PlaceInfo, Review } from "@/features/detail/ui";
import { Empty } from "@/features/detail/ui";
import Button from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ShareModal } from "@/shared/ui";
import { DetailHeader } from "@/widgets/headers";

// @TODO 백엔드 데이터 구조에 따라 아래와 같은 type 설정 후 props로 관리하는 구조로 변경해야 함!
interface Review {
  username: string;
  profileImg: string;
  date: string;
  text: string;
}

const images = [
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
];

const DetailPage = () => {
  const navigate = useNavigate();
  const isReview = true;
  const isComplete = true; // 약속 장소 확정 유무
  const isMeetingPlace = true; // 약속 장소인지 유무
  const [isOpenShareModal, setIsOpenShareModal] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    navigate(-1);
  };

  const shareContent = {
    title: "여기 어때요?",
    description: "스타벅스 병점역앞던킨도너츠점", // 수정되어야하는 부분
    imageUrl: "https://www.pickspot.co.kr/image/KT3.webp",
    links: [
      { label: "내 경로 보기", url: `https://www.pickspot.co.kr/` }, // 변경해야함
      { label: "모임 장소 보기", url: `https://www.pickspot.co.kr/` }, // 변경해야함
    ],
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      setIsScrolled(scrollRef.current.scrollTop > 0);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative flex flex-col h-screen-dvh">
      <DetailHeader backClick={handleClick} shareClick={() => setIsOpenShareModal(true)} isScrolled={isScrolled} />
      <div className="flex-1 overflow-y-auto" ref={scrollRef}>
        <Photo images={images} />
        <PlaceInfo />
        <div className="w-full h-2 bg-gray-5" />
        {isReview ? <Review /> : <Empty />}
      </div>

      <div className={`px-5 py-4 ${isReview ? "sticky bottom-0" : ""}`}>
        <Button disabled={isMeetingPlace}>
          {isComplete ? (isMeetingPlace ? "이미 선택한 장소에요" : "모임장소 바꾸기") : "여기에서 만나기"}
        </Button>
        {/* 이미 선택된 장소에요 버튼명 수정해야함 */}
      </div>
      {isOpenShareModal && (
        <ShareModal
          onClose={() => setIsOpenShareModal(false)}
          title="모임장소가 정해졌어요!"
          description="멤버들에게 알려주세요"
          shareContent={shareContent}
        />
      )}
    </div>
  );
};

export default DetailPage;
