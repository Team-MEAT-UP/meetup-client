import { mockPlaceItems } from "@/shared/model/mocks/mockPlaceList";
import PlaceCard from "@/shared/ui/PlaceCard";
import { FilterChips } from ".";
import { useNavigate } from "react-router-dom";

export const RecommendList = () => {
  const navigate = useNavigate(); // 추후 id를 넘길 것
  return (
    <div className="h-full flex flex-col bg-gray-5">
      <FilterChips />
      <div className="flex-1 overflow-y-auto px-5 pb-3">
        <div className="flex flex-col gap-3">
          {mockPlaceItems.map(item => (
            <PlaceCard
              key={item.id}
              placeName={item.placeName}
              distance={item.distance}
              openingHours={item.openingHours}
              image={item.image}
              review={item.review}
              onClick={() => navigate("/detail")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
