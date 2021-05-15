import type { ReactNode } from "react";

export interface PopupGroupProps {
  children: ReactNode;
}

export default function PopupGroup({ children }: PopupGroupProps) {
  return (
    <div className="fixed left-5 bottom-5 space-y-2">
      { children }
    </div>
  );
}
