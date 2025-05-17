interface OverlayProps {
  onClick?: () => void;
  isBlur?: boolean;
}

export const Overlay = ({ onClick, isBlur = true }: OverlayProps) => {
  return (
    <div
      className={`fixed top-0 left-1/2 -translate-x-1/2 max-w-[600px] w-full h-full bg-black/50 duration-200 transition-opacity z-[102] ${isBlur ? "backdrop-blur-sm" : ""}`}
      onClick={onClick}
    />
  );
};
