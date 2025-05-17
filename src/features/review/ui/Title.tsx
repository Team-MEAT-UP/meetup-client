interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <div className="text-2xl font-semibold text-gray-70">
      <div className="flex">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap text-sub-sub">{title}</div>에
      </div>
      <p>가셨나요?</p>
    </div>
  );
};
