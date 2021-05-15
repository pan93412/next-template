import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactNode } from "react";

export interface FieldProps {
  title: string;
  actions: {
    icon: IconDefinition,
    action: () => void;
  }[];
  children: ReactNode;
};

export default function Field({title, actions, children}: FieldProps) {
  return (
    <div className="field">
      <div className="title-bar flex justify-between pb-4">
        <div>
          <h2 className="text-lg">{ title }</h2>
          </div>
        <div>
          { actions.map(({ icon, action }, index) => {
            return (
              <FontAwesomeIcon icon={icon} onClick={action} key={index} />
            );
          }) }
        </div>
      </div>
      { children }
    </div>
  );
}
