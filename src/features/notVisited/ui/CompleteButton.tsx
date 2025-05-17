type CompleteButtonProps = {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const CompleteButton = ({ label, onClick, disabled }: CompleteButtonProps) => {
  return (
    <button
      className={`w-full h-[56px] text-white transition text-lg font-semibold rounded-xl
    ${disabled ? "bg-gray-10 text-gray-30 cursor-not-allowed" : "bg-gray-90"}
  `}
      disabled={disabled}
      onClick={onClick}>
      {label}
    </button>
  );
};
