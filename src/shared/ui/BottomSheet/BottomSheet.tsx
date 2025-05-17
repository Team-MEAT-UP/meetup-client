import { useEffect } from "react";
import { useBottomSheetDrag } from "@/shared/hooks/useBottomSheetDrag";
import { Content } from "./Content";
import { Portal } from "..";
import { motion } from "framer-motion";

interface BottomSheetProps {
  children: React.ReactNode;
  minHeightPx?: number;
  maxHeightPx?: number;
  isVisible?: boolean;
}

export const BottomSheet = ({ children, minHeightPx = 330, maxHeightPx = 330, isVisible = true }: BottomSheetProps) => {
  const { currentHeight, isDragging, handlers, bindDragEvents, handleResize } = useBottomSheetDrag({
    minHeightPx,
    maxHeightPx,
  });

  useEffect(() => {
    const cleanup = bindDragEvents();
    return () => cleanup();
  }, [bindDragEvents]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <Portal type="bottomSheet">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: isVisible ? 0 : "100%" }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.3 }}
        style={{
          height: currentHeight,
          transition: isDragging ? "none" : "height 0.3s ease-out",
        }}
        className="fixed bottom-0 left-0 w-full z-[1000] bg-white rounded-t-3xl shadow-bt01"
        {...handlers}>
        {children}
      </motion.div>
    </Portal>
  );
};

BottomSheet.Content = Content;
