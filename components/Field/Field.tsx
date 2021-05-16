import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import type { ReactNode } from "react";

export interface FieldProps {
  title: string;
  actions?: {
    icon: IconDefinition;
    action: () => void;
  }[];
  children: ReactNode;
}

export default function Field({ title, actions, children }: FieldProps) {
  return (
    <div className="field w-full">
      <div className="title-bar flex justify-between pb-4">
        <div>
          <h2 className="text-lg">{title}</h2>
        </div>
        <div>
          {actions &&
            actions.map(({ icon, action }, index) => {
              return (
                <FontAwesomeIcon
                  icon={icon}
                  onClick={action}
                  key={`${title}-action-${index + 1}-icon`}
                />
              );
            })}
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
