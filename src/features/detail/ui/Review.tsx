import { ProgressBar } from "./ProgressBar";
import { ReviewItem } from "./ReviewItem";
import { Tag } from "./Tag";

export const Review = () => {
  return (
    <>
      <div className="px-5 pt-4 pb-6 flex flex-col gap-4">
        <span className="text-lg font-semibold text-gray-90">방문자 리뷰</span>
        <div className="px-5 py-[22px] flex flex-col gap-[14px] rounded-2xl border border-gray-5">
          <ProgressBar type="morning" congestion={0} />
          <ProgressBar type="afternoon" congestion={3} />
          <ProgressBar type="evening" congestion={5} />
        </div>
        <div className="flex gap-[6px] w-full">
          <Tag type="plug" score={2} />
          <Tag type="seat" score={1} />
        </div>
      </div>
      <ReviewItem />
    </>
  );
};
