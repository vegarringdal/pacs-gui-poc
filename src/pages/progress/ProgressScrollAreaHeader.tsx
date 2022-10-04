import React from "react";
import { ScrollBodyRowEvent } from "../../components/ScrollBody";
import { getDummyData } from "../../dummyData";

export function ProgressScrollAreaHeader() {
  return (
    <div
      className="bg-gray-700 w-full flex font-semibold border-b border-gray-900"
      style={{ height: "70px" }}
    >
      <div className="flex items-center" style={{ width: "250px" }}>
        <div className="p-1 ">Tag</div>
      </div>
      <div
        className="flex items-center border-l border-gray-500"
        style={{ width: "50px" }}
      >
        <div className="p-1">OP</div>
      </div>
      <div
        className="flex flex-col  border-l border-gray-500  items-end"
        style={{ width: "90px" }}
      >
        <div className="flex-1 p-1"> Planned</div>
        <hr className="w-full border-1 border-gray-500"></hr>
        <div className="flex-1 p-1"> Installed</div>
      </div>
      <div
        className="flex flex-col border-l border-gray-500"
        style={{ width: "250px" }}
      >
        <div className="flex-1 p-1 pr-3"> From Tag</div>
        <hr className="w-full border-1 border-gray-500"></hr>
        <div className="flex-1 p-1 pr-3"> To Tag</div>
      </div>
      <div className="flex flex-col border-l border-gray-500 flex-grow">
        <div className="flex-1 p-1"> Description</div>
        <hr className="w-full border-1 border-gray-500"></hr>
        <div className="flex-1 p-1"> Comment</div>
      </div>
    </div>
  );
}
