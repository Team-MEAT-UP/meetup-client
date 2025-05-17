interface ContentProps {
  children: React.ReactNode;
}

export const SnapContent = ({ children }: ContentProps) => {
  return (
    <div
      className="flex-1 min-h-0 overflow-y-auto scrollbar-hidden"
      style={{
        WebkitOverflowScrolling: "touch",
        overscrollBehavior: "contain",
        touchAction: "pan-y",
      }}
      data-scrollable="true">
      {children}
    </div>
  );
};
