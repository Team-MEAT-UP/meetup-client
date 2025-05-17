import { useEventStore, useUserStore } from "@/shared/stores";
import { useState } from "react";
import { ShareModal } from "@/shared/ui";
import { useNavigate, useSearchParams } from "react-router-dom";
import AddUser from "@/assets/icon/addUser.svg";
import Share from "@/assets/icon/share.svg";
import { LoginModal } from "../..";
import { UserCard } from "./UserCard";

export const BottomSheetContent = () => {
  const eventData = useEventStore(state => state.eventData);
  const toggleDetail = useEventStore(state => state.toggleDetail);
  const setDetailEventData = useEventStore(state => state.setDetailEventData);

  return (
    <div className="h-full flex flex-col">
      <div className="mx-5 pb-[80px]">
        {eventData?.routeResponse.map(user => (
          <UserCard
            key={user.id}
            isTransit={user.isTransit}
            name={user.nickname}
            startStation={user.startName}
            totalTime={user.totalTime}
            onClick={() => {
              toggleDetail();
              setDetailEventData(user);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export const GroupAverageTime = () => {
  const eventData = useEventStore(state => state.eventData);
  return (
    <div className="mx-5">
      <div>
        <h1 className="text-gray-80 text-lg font-bold pb-[2px]">{eventData?.meetingPoint.endStationName}</h1>
        <p className="text-gray-40 text-md pb-3">평균 {eventData?.averageTime}분</p>
      </div>
    </div>
  );
};

export const FixedButtons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
  const eventId = new URLSearchParams(window.location.search).get("eventId");
  const eventData = useEventStore(state => state.eventData);
  const nickname = useUserStore(state => state.nickname);

  let title = "";
  if (!eventData?.eventMaker && !nickname) {
    title = "모임을 생성했어요";
  } else if (!eventData?.eventMaker) {
    title = `${nickname}님이 모임을 생성했어요`;
  } else {
    title = `${eventData?.eventMaker}님이 모임을 생성했어요`;
  }

  const shareContent = {
    title: title,
    description: "",
    imageUrl: "https://www.pickspot.co.kr/image/KT2.webp",
    links: [
      { label: "내 출발지 입력", url: `https://www.pickspot.co.kr/find?eventId=${eventId}` },
      { label: "중간지점 보기", url: `https://www.pickspot.co.kr/mapView?eventId=${eventId}` },
    ],
  };
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const eventIdParam = searchParams.get("eventId");

  const handleAddMemberClick = () => {
    if (nickname) {
      navigate(`/find?eventId=${eventIdParam}`);
    } else {
      setIsOpenLoginModal(true);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-5">
      <div className="flex flex-row gap-2">
        <button
          className="flex flex-row items-center justify-center gap-2 rounded-xl bg-sub-sub h-[40px] text-white font-semibold text-sm w-full"
          onClick={handleAddMemberClick}>
          <img src={AddUser} alt="addUser" className="w-[27px] h-4" />
          <span>멤버 추가하기</span>
        </button>
        <button className="flex justify-center items-center bg-gray-5 w-[40px] h-[40px] rounded-xl">
          <img src={Share} alt="share" onClick={() => setIsOpen(true)} className="w-6 h-6" />
        </button>
      </div>
      {isOpen && <ShareModal onClose={() => setIsOpen(false)} title="이벤트 공유하기" shareContent={shareContent} />}
      {isOpenLoginModal && <LoginModal />}
    </div>
  );
};
