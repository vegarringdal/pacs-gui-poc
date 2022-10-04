import React from "react";
import { guiStateStore } from "../state/gui";
import { FilterDouble } from "./FilterDouble";

export function ProgressFilterSidebar() {
  const guiState = guiStateStore();

  if (!guiState.showQueryMenu) {
    return null;
  }

  return (
    <div className="fixed left-0 z-[9999] bottom-0 top-0   right-0">
      <div className="flex h-full">
        <div className="flex flex-col bg-gray-800 drop-shadow-2xl   min-w-[16rem]">
          <div className="min-h-[3rem] bg-gray-900 w-full flex p-2 ">
            <div className="m-auto ">Query DB</div>
          </div>
          <div className="flex flex-col p-2">
            <FilterDouble title="Forman" />
            <div className="mt-7"></div>
            <FilterDouble title="Workpack" />
            <div className="mt-7 "></div>
            <FilterDouble title="Tag" />
            <div className="mt-7 "></div>
            <FilterDouble title="Operation Code" />
            <div className="mt-7 "></div>
            <div className="flex m-2">
              <button className="w-[10rem] bg-indigo-700 mt-3 m-auto p-1">
                Find all
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 bg-gray-800/50 items-center ">
          <div className="min-w-[5rem] bg-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-10 text-indigo-700 m-auto"
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
        </div>
      </div>
    </div>
  );
}
