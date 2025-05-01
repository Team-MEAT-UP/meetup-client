import { ConfirmedCard, RecommendCard, RecommendList } from "@/features/place/ui";
import { mockPlaceItems } from "@/shared/model/mocks/mockPlaceList";
import PlainHeader from "@/shared/ui/PlainHeader";

const PlacePage = () => {
  const mockData = mockPlaceItems[0];
  const isConfirmed = true; // 여기서 장소의 확정 상태를 받아온다면

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="flex-none px-5">
        <PlainHeader title="장소 추천" url="/mapview" />
      </div>
      <div className="flex-none mt-3 px-5">
        {!isConfirmed && <RecommendCard place="동대문역사문화공원역" />}
        {isConfirmed && (
          <ConfirmedCard
            placeName="동대문 역사문화공원역"
            distance={mockData.distance}
            image={mockData.image}
            openingHours={mockData.openingHours}
            review={mockData.review}
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
