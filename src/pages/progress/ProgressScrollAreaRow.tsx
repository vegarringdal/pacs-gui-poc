import React from "react";
import { ScrollBodyRowEvent } from "../../components/ScrollBody";
import { getDummyData } from "../../dummyData";

export function ProgressScrollAreaRow(props: { row: ScrollBodyRowEvent }) {
  const row = props.row;

  const data = getDummyData()[row.no];
  if (!data) {
    return null;
  }

  let defaultRowClass =
    "bg-gray-600 w-full h-full grid grid-cols-19 grid-rows-3 box-border border-gray-800/50 ";
  if (row.no % 2 === 0) {
    defaultRowClass =
      "bg-gray-700/90 w-full h-full grid grid-cols-19 grid-rows-3 box-border border-gray-600 ";
  }

  return (
    <div className={defaultRowClass}>
      <div className="col-span-5 row-span-3 border border-1 border-gray-800/50  flex justify-center items-center">
        {data.tag}
      </div>
      <div className="col-span-1 row-span-3 border border-1 border-gray-800/50  flex justify-center items-center">
        {data.op}
      </div>
      <div className="col-span-2 border border-1 border-gray-800/50  p-1">
        {data.planned}
      </div>
      <div className="col-span-5 border border-1 border-gray-800/50  p-1">
        {data.fromTag}
      </div>
      <div className="col-span-3 border border-1 border-gray-800/50  p-1">
        {data.workpack}
      </div>
      <div className="col-span-3 border border-1 border-gray-800/50  p-1">
        {data.forman}
      </div>
      <div className="col-span-2 border border-1 border-gray-800/50  p-1">
        {data.installed}
      </div>
      <div className="col-span-5 border border-1 border-gray-800/50  p-1">
        {data.toTag}
      </div>
      <div className="col-span-6 border border-1 border-gray-800/50  p-1">
        {data.description}
      </div>
      <div className="col-span-2 border border-1 border-gray-800/50  p-1">
        {data.mc}
      </div>
      <div className="col-span-11 border border-1 border-gray-800/50  p-1">
        {data.comment}
      </div>
    </div>
  );
}
