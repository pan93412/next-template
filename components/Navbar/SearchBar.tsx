import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export interface SearchBarProps {
  onSubmit: (content: string) => void;
}

export default function SearchBar() {
  return (
    <div className="space-x-2 md:w-96 h-2 p-4 bg-gray-100 text-gray-900 rounded font-sans flex content-center items-center">
      <div>
        <FontAwesomeIcon icon={faSearch} />
      </div>
      <div className="w-full">
        <input
          type="text"
          className="bg-transparent w-full"
          placeholder="大家都在搜：新冠肺炎 停課"
        ></input>
      </div>
    </div>
  );
}
