import { useNavigate } from "react-router-dom";
import Close from "@/assets/icon/close.svg";

interface CloseHeaderProps {
  url?: string;
  onClick?: () => void;
}

export const CloseHeader = ({ url, onClick }: CloseHeaderProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (url) {
      navigate(url);
    }
  };

  return (
    <header className="w-full px-5 py-3 flex justify-end">
      <button onClick={handleClick}>
        <img src={Close} alt="close" className="w-6 h-6" />
      </button>
    </header>
  );
};
