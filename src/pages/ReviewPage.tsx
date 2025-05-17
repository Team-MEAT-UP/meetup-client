import PlaceCard from "@/shared/ui/PlaceCard";
import { mockPlaceItems } from "@/shared/model/mocks/mockPlaceList";
import { useNavigate, useParams } from "react-router-dom";
import { SmallButton, Title } from "@/features/review/ui";
import { CloseHeader } from "@/widgets/headers";

const ReviewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen-dvh">
      <CloseHeader url="/history" />
      <div className="flex flex-col justify-between h-full p-5 pt-4">
        <div className="flex flex-col gap-8">
          <Title title="박승광해물손칼국수 진점점dddddd 박승광해물" />
          <div className="flex flex-col gap-3 items-center">
            <PlaceCard {...mockPlaceItems[0]} /> {/* 임시 데이터 추가 */}
            <p className="text-sm font-semibold text-gray-30">실제로 가신 곳인지 확인해주세요.</p>
          </div>
        </div>
        <div className="w-full flex gap-2">
          <SmallButton
            isVisit={false}
            onClick={() => {
              navigate(`/notVisited/${id}`);
            }}>
            다른 곳에 갔어요
          </SmallButton>
          <SmallButton
            isVisit={true}
            onClick={() => {
              navigate(`/visited/${id}`);
            }}>
            갔어요
          </SmallButton>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
