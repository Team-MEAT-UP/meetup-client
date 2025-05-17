import { ConfirmedCard, RecommendCard, RecommendList } from "@/features/place/ui";
import { mockPlaceItems } from "@/shared/model/mocks/mockPlaceList";
import { PlainHeader } from "@/widgets/headers";
import { useNavigate } from "react-router-dom";

const PlacePage = () => {
  const mockData = mockPlaceItems[0];
  const isConfirmed = false; // 여기서 장소의 확정 상태를 받아온다면
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen-dvh overflow-hidden">
      <div className="flex-none px-5">
        <PlainHeader title="장소 추천" url="/mapview" />
      </div>
      <div className="flex-none mt-3 px-5">
        {!isConfirmed && <RecommendCard place="동대문역사문화공원역" onClick={() => navigate("/detail")} />}
        {isConfirmed && (
          <ConfirmedCard
            placeName="동대문 역사문화공원역"
            distance={mockData.distance}
            image={mockData.image}
            openingHours={mockData.openingHours}
            review={mockData.review}
            onClick={() => navigate("/detail")}
          />
        )}
      </div>
      <div className="flex-1 mt-3 min-h-0 relative">
        <RecommendList />
      </div>
    </div>
  );
};

export default PlacePage;
