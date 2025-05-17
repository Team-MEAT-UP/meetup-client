import ReactDOM from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  type?: "modal" | "bottomSheet";
}

export const Portal = ({ children, type = "modal" }: PortalProps) => {
  const portalRoot = document.getElementById("portal-root");

  if (!portalRoot) return null;

  if (type === "bottomSheet") {
    return ReactDOM.createPortal(
      <div className="fixed inset-0 z-[1000]">
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full" style={{ maxWidth: "600px" }}>
          {children}
        </div>
      </div>,
      portalRoot
    );
  }

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-[1000]">
      <div style={{ maxWidth: "600px" }} className="w-full">
        {children}
      </div>
    </div>,
    portalRoot
  );
};
