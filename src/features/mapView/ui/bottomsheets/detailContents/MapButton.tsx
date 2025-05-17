interface MapButtonProps {
  src: string;
  alt: string;
  onClick: () => void;
}

export const MapButton = ({ src, alt, onClick }: MapButtonProps) => {
  return (
    <button key={alt} onClick={onClick}>
      <img src={src} alt={alt} className="w-6 h-6" />
    </button>
  );
};
