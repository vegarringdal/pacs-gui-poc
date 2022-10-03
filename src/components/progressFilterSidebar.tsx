import React from "react";
import { guiStateStore } from "../state/gui";
import { FilterDouble } from "./FilterDouble";

export function ProgressFilterSidebar() {
  const guiState = guiStateStore();

  if (!guiState.showQueryMenu) {
    return null;
  }

  return (
    <div className="fixed left-0 z-[9999] bg-gray-800 bottom-0 top-0 drop-shadow-2xl  border-r-2  border-gray-700">
      <div className="text-2xl bg-gray-700 w-full flex p-2">
        <div className="m-auto ">Query DB</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 right-2 absolute text-indigo-500"
          onClick={() => {
            guiStateStore.setState({ showQueryMenu: false });
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div className="flex flex-col p-2">
        <FilterDouble title="Forman" />
        <hr className="mt-5 border-gray-500"></hr>
        <FilterDouble title="Workpack" />
        <hr className="mt-5 border-gray-500"></hr>
        <FilterDouble title="Tag" />
        <hr className="mt-5 border-gray-500"></hr>
        <FilterDouble title="Operation Code" />
        <hr className="mt-5 border-gray-500"></hr>
        <div className="flex m-2">
          <button className="w-[10rem] bg-indigo-700 mt-3 m-auto p-1">
            Find all
          </button>
        </div>
      </div>
    </div>
  );
}
