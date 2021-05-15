import { faExclamationTriangle, faInfoCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode, useState } from "react";

export enum PopupLevel {
  WARN,
  INFO,
}

export interface PopupProps {
  level: PopupLevel;
  children: ReactNode;
}

const levelColor = [
  "bg-red-500",
  "bg-blue-500",
];

const levelIcon = [
  faExclamationTriangle,
  faInfoCircle,
];

export default function Popup({ level, children }: PopupProps) {
  const [ hide, setHide ] = useState(false);

  return hide ? null : (
    <div className={`w-96 ${levelColor[level]} text-white px-5 py-4 flex content-center items-center justify-between rounded overflow-hidden`}>
      <div className="flex space-x-2 mr-10">
        <div className="mr-4"><FontAwesomeIcon icon={levelIcon[level]} /></div>
        <div>{ children }</div>
      </div>
      <div onClick={() => setHide(true)}><FontAwesomeIcon icon={faTimes} /></div>
    </div>
  );
}
