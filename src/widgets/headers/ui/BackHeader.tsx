import { useNavigate } from "react-router-dom";
import Back from "@/assets/icon/back.svg";

interface BackHeaderProps {
  url?: string;
  onClick?: () => void;
}

export const BackHeader = ({ url, onClick }: BackHeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="w-full px-5 py-3">
      <button
        onClick={() => {
          if (onClick) {
            onClick();
          } else if (url !== undefined) {
            navigate(url);
          } else {
            navigate(-1);
          }
        }}>
        <img src={Back} alt="back" className="w-6 h-6" />
      </button>
    </header>
  );
};
