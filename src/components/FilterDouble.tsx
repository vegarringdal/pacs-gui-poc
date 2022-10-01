import React from "react";

export function FilterDouble(props: { title: string }) {
  return (
    <div className="flex flex-col">
      <label className="m-1">{props.title}:</label>
      <input className="bg-gray-700 p-1 m-1 outline-gray-500 "></input>
      <div className="flex w-full">
        <button className="flex-1 bg-indigo-700 mt-3 m-1 p-1 w-full">
          Query DB
        </button>
        <button className="flex-1 bg-indigo-700 mt-3 m-1 p-1 w-full">
          Filter
        </button>
      </div>
    </div>
  );
}
