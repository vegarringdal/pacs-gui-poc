import React from "react";

export function ProgressDetails() {
  return (
    <>
      <div className="flex flex-col m-1 p-1">
        <label className="m-1 mb-0">Drum no:</label>
        <input className="bg-gray-700 p-1 m-1 mt-0 outline-none border border-gray-700 focus:border-gray-500"></input>
      </div>
      <div className="flex flex-col m-1 p-1">
        <label className="m-1 mb-0">Meter High:</label>
        <input className="bg-gray-700 p-1 m-1 mt-0 outline-none border border-gray-700 focus:border-gray-500"></input>
      </div>
      <div className="flex flex-col m-1 p-1">
        <label className="m-1 mb-0">Meter Low:</label>
        <input className="bg-gray-700 p-1 m-1 mt-0 outline-none border border-gray-700 focus:border-gray-500"></input>
      </div>
      <div className="flex flex-col m-1 p-1">
        <label className="m-1 mb-0">Foreman:</label>
        <input className="bg-gray-700 p-1 m-1 mt-0 outline-none border border-gray-700 focus:border-gray-500"></input>
      </div>
      <div className="flex flex-col m-1 p-1">
        <label className="m-1 mb-0">Date:</label>
        <input
          className="bg-gray-700 p-1 m-1 mt-0 outline-none border border-gray-700 focus:border-gray-500"
          type="date"
        ></input>
      </div>
      <div className="flex flex-col m-1 p-1">
        <button className="p-1 m-1  bg-indigo-700">Report Progress</button>
      </div>
    </>
  );
}
