import React from "react";

export function FilterDouble(props: { title: string }) {
  return (
    <div className="flex flex-col">
      <label className="m-1 mb-0 ">{props.title}:</label>
      <input className="bg-gray-700 p-1 m-1 mt-0 outline-none border border-gray-700 focus:border-gray-500"></input>
      <div className="flex w-full">
        <button className="flex-1 bg-indigo-700 mt-2 m-1 p-1 w-full">
          Find {props.title}
        </button>
      </div>
    </div>
  );
}
