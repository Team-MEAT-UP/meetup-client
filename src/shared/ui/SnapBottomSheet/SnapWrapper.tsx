import { forwardRef } from "react";

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SnapWrapper = forwardRef<HTMLDivElement, WrapperProps>(({ children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className="fixed left-1/2 bottom-0 transform -translate-x-1/2 z-[1000] bg-white rounded-t-3xl shadow-bt01 flex flex-col w-full max-w-[600px]"
      {...props}>
      {children}
    </div>
  );
});
