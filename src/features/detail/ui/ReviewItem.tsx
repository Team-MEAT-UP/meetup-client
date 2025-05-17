export const ReviewItem = () => {
  return (
    <div className="p-5 pl-6 flex flex-col gap-2 border-t border-t-gray-5">
      <div className="flex items-center gap-1 text-sm font-medium">
        <img src="https://github.com/shadcn.png" alt="profileImg" className="mr-[2px] rounded-full w-5 h-5" />
        <p className="text-gray-90">현비</p>
        <p className="text-gray-40">·</p>
        <p className="text-gray-40">04.26 토</p>
      </div>
      <p className="text-md font-medium text-gray-70">
        회의하기 너무 적합한 곳이에요. 콘센트도 많고 좋아요! 좌석도 충분해요.
      </p>
    </div>
  );
};
