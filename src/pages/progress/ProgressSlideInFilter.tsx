import React from "react";
import { guiStateStore } from "../../state/gui";
import { DummyFilterWithLabel } from "../../components/DummyFilterWithLabel";

export function ProgressSlideInFilter() {
  const guiState = guiStateStore();

  if (!guiState.showQueryMenu) {
    return null;
  }

  return (
    <div className="row-start-1 row-end-11 col-start-1 col-end-11 z-20 grid grid-cols-10 grid-rows-10 bg-gray-400/30">
      <div className="row-start-1 row-end-11 col-start-1 col-end-3 bg-gray-800 shadow-2xl flex flex-col">
        <div className="bg-gray-900 w-full flex p-2 ">
          <div className="m-auto ">Query DB</div>
        </div>
        <div className="flex flex-col p-2 flex-1">
          <DummyFilterWithLabel title="Forman" />
          <div className="mt-7"></div>
          <DummyFilterWithLabel title="Workpack" />
          <div className="mt-7 "></div>
          <DummyFilterWithLabel title="Tag" />
          <div className="mt-7 "></div>
          <div className="flex-1"></div>
          <div className="flex m-2">
            <button className="w-[10rem] bg-indigo-700 mt-3 m-auto p-1">
              Find all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
