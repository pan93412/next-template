import type { ReactNode } from "react";

export interface FieldsGroupProps {
  children: ReactNode;
}

export default function FieldsGroup({ children }: FieldsGroupProps) {
  return (
    <div className="flex justify-around p-8 w-full">
      { children }
    </div>
  );
}
