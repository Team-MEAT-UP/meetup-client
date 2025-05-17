import { useEffect, useRef } from "react";
import { Portal } from "./Portal";

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <Portal>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 max-w-[600px] w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-[1001]">
        <div ref={modalRef} className="w-[264px] bg-white shadow-pin01 rounded-[20px]">
          {children}
        </div>
      </div>
    </Portal>
  );
};
