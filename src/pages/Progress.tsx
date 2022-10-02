import React from "react";
import { FilterDouble } from "../components/FilterDouble";
import {
  createScrollbodyController,
  ScrollBody,
} from "../components/ScrollBody";

const scrollbodyController = createScrollbodyController(50, 5000);

export function Progres() {
  return (
    <div className="flex h-full">
      <div className="pl-2">
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
            Query DB with all
          </button>
        </div>
      </div>
      <div className="flex flex-1 flex-col m-2">
        <div className="p-2 flex flex-col w-full border border-gray-700 flex-1">
          <ScrollBody
            scrollController={scrollbodyController}
            headerRenderCallback={() => {
              return (
                <div
                  className="bg-gray-700 w-full flex"
                  style={{ height: "90px" }}
                >
                  <div className="m-auto">my header</div>
                </div>
              );
            }}
            rowRenderCallback={(row) => {
              return (
                <div className="bg-gray-600 w-full h-full flex">
                  <div className="m-auto">Row no: {row.no + 1}</div>
                </div>
              );
            }}
          ></ScrollBody>
        </div>

        <div className="w-full">
          <div className="flex items-center m-2">
            <button className="w-[10rem] bg-indigo-700 mt-3 m-auto p-1">
              Simple Row
            </button>
            <button className="w-[10rem] bg-indigo-700 mt-3  m-auto p-1">
              Advance Row
            </button>
            <button className="w-[10rem] bg-indigo-700 mt-3  m-auto p-1">
              Hero Row 🥳
            </button>
          </div>
        </div>
        <div>
          <div className="flex m-2">
            <button className="w-[10rem] bg-indigo-700 mt-3 m-auto p-1">
              Show releated
            </button>
            <button className="w-[10rem] bg-indigo-700 mt-3 m-auto p-1">
              Edit progress
            </button>
            <button className="w-[10rem] bg-indigo-700 mt-3 m-auto p-1">
              Toggle complete
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-col m-1 p-1">
          <label className="m-1">Drum no:</label>
          <input className="bg-gray-700 p-1 m-1 l outline-gray-500"></input>
        </div>
        <div className="flex flex-col m-1 p-1">
          <label className="m-1">Meter High:</label>
          <input className="bg-gray-700 p-1 m-1 l outline-gray-500"></input>
        </div>
        <div className="flex flex-col m-1 p-1">
          <label className="m-1">Meter Low:</label>
          <input className="bg-gray-700 p-1 m-1  outline-gray-500"></input>
        </div>
        <div className="flex flex-col m-1 p-1">
          <label className="m-1">Foreman:</label>
          <input className="bg-gray-700 p-1 m-1  outline-gray-500"></input>
        </div>
        <div className="flex flex-col m-1 p-1">
          <label className="m-1">Date:</label>
          <input
            className="bg-gray-700 p-1 m-1  outline-gray-500"
            type="date"
          ></input>
        </div>
        <div className="flex flex-col m-1 p-1">
          <button className="p-1 m-1  bg-indigo-700">Report Progress</button>
        </div>
      </div>
    </div>
  );
}
