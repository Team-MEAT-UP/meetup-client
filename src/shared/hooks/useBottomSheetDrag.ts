import { useState, useCallback, useRef, useEffect } from "react";

interface UseBottomSheetDragProps {
  minHeightPx: number;
  maxHeightPx?: number;
}

export const useBottomSheetDrag = ({ minHeightPx, maxHeightPx = 800 }: UseBottomSheetDragProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentHeight, setCurrentHeight] = useState(minHeightPx);

  // 스크롤 가능한 영역을 ref로 저장
  const scrollableRef = useRef<HTMLElement | null>(null);

  // 컴포넌트 마운트 시 한 번만 스크롤 가능한 영역을 찾음
  useEffect(() => {
    scrollableRef.current = document.querySelector("[data-scrollable]");
  }, []);

  const handleDragStart = useCallback((event: React.TouchEvent | React.MouseEvent) => {
    const clientY = "touches" in event ? event.touches[0].clientY : event.clientY;

    // ref로 저장된 스크롤 가능한 영역의 위치 확인
    if (scrollableRef.current && scrollableRef.current.scrollTop > 0) {
      return;
    }

    setIsDragging(true);
    setStartY(clientY);
  }, []);

  const handleDragMove = useCallback(
    (event: TouchEvent | MouseEvent) => {
      if (!isDragging) return;

      const clientY = "touches" in event ? (event as TouchEvent).touches[0].clientY : (event as MouseEvent).clientY;
      const delta = startY - clientY;
      const newHeight = currentHeight + delta;

      setCurrentHeight(Math.min(Math.max(newHeight, maxHeightPx), maxHeightPx));
      setStartY(clientY);
    },
    [isDragging, startY, currentHeight, minHeightPx, maxHeightPx]
  );

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // 이벤트 핸들러 등록/해제
  const bindDragEvents = useCallback(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleDragMove);
      window.addEventListener("mouseup", handleDragEnd);
      window.addEventListener("touchmove", handleDragMove);
      window.addEventListener("touchend", handleDragEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleDragMove);
      window.removeEventListener("mouseup", handleDragEnd);
      window.removeEventListener("touchmove", handleDragMove);
      window.removeEventListener("touchend", handleDragEnd);
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  // 화면 크기 변경 시 높이 조정
  const handleResize = useCallback(() => {
    setCurrentHeight(minHeightPx);
  }, [minHeightPx]);

  return {
    currentHeight,
    isDragging,
    handlers: {
      onMouseDown: handleDragStart,
      onTouchStart: handleDragStart,
    },
    bindDragEvents,
    handleResize,
  };
};
