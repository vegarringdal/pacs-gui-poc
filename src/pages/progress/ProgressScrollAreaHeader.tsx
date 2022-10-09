import React from "react";
import { ScrollBodyRowEvent } from "../../components/ScrollBody";
import { getDummyData } from "../../dummyData";

export function ProgressScrollAreaHeader() {
  return (
    <div className="bg-gray-800 w-full h-full grid grid-cols-19 grid-rows-3 box-border border-gray-700/50  font-semibold">
      <div className="col-span-5 row-span-3 border-l border-b border-gray-700/50 flex justify-center items-center">
        Tag
      </div>
      <div className="col-span-1 row-span-3 border-l border-b border-gray-700/50  flex justify-center items-center">
         Op
      </div>
      <div className="col-span-2 border-l border-b border-gray-700/50 p-1">Planned</div>
      <div className="col-span-5 border-l border-b border-gray-700/50 p-1">From Tag</div>
      <div className="col-span-3 border-l border-b border-gray-700/50 p-1">Workpack</div>
      <div className="col-span-3 border-l border-b border-gray-700/50 p-1">Foreman</div>
      <div className="col-span-2 border-l border-b border-gray-700/50 p-1">Installed</div>
      <div className="col-span-5 border-l border-b border-gray-700/50 p-1">To tag</div>
      <div className="col-span-6 border-l border-b border-gray-700/50 p-1">Description</div>
      <div className="col-span-2 border-l border-b border-gray-700/50 p-1">Mc Pkg</div>
      <div className="col-span-11 border-l border-b border-gray-700/50 p-1">Comment</div>
    </div>
  );
}
