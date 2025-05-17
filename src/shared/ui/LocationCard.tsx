import { ReactNode } from "react";

interface LocationCardProps {
  name: ReactNode;
  address: string;
  onClick?: () => void;
}

export const LocationCard = ({ name, address, onClick }: LocationCardProps) => {
  return (
    <div onClick={onClick} className="flex flex-col w-full hover:bg-gray-5 p-[8px] rounded-xl">
      <p className="text-gray-60 text-md" spellCheck={false}>
        {name}
      </p>
      <p className="text-gray-40 text-sm font-regular" spellCheck={false}>
        {address}
      </p>
    </div>
  );
};
