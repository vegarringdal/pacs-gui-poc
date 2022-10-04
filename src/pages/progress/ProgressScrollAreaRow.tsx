import React from "react";
import { ScrollBodyRowEvent } from "../../components/ScrollBody";
import { getDummyData } from "../../dummyData";

export function ProgressScrollAreaRow(props: { row: ScrollBodyRowEvent }) {
  const row = props.row;

  const data = getDummyData()[row.no];
  if (!data) {
    return null;
  }

  let defaultRowClass = "bg-gray-600 w-full h-full flex";
  if (row.no % 2 === 0) {
    defaultRowClass = "bg-gray-600/90 w-full h-full flex";
  }

  return (
    <div className={defaultRowClass}>
      <div className="flex items-center" style={{ width: "250px" }}>
        <div className="p-1">{data.tag}</div>
      </div>

      <div
        className="flex items-center border-l border-gray-500"
        style={{ width: "50px" }}
      >
        <div className="p-1">{data.op}</div>
      </div>

      <div
        className="flex flex-col border-l border-gray-500 items-end"
        style={{ width: "90px" }}
      >
        <div className="flex-1 p-1 pr-3"> {data.planned}</div>
        <hr className="w-full border-1 border-gray-500"></hr>
        <div className="flex-1 p-1 pr-3"> {data.installed}</div>
      </div>

      <div
        className="flex flex-col border-l border-gray-500 "
        style={{ width: "250px" }}
      >
        <div className="flex-1 p-1"> {data.fromTag}</div>
        <hr className="w-full border-1 border-gray-500"></hr>
        <div className="flex-1 p-1"> {data.toTag}</div>
      </div>

      <div className="flex flex-col border-l border-gray-500 flex-grow">
        <div className="flex-1 p-1"> {data.description}</div>
        <hr className="w-full border-1 border-gray-500"></hr>
        <div className="flex-1 p-1"> {data.comment}</div>
      </div>
    </div>
  );
}
