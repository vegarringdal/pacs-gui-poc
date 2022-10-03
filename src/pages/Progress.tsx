import React from "react";
import { ProgressFilterSidebar } from "../components/progressFilterSidebar";
import {
  createScrollbodyController,
  ScrollBody,
} from "../components/ScrollBody";
import { getDummyData } from "../dummyData";

const scrollbodyController = createScrollbodyController(70, 5000, 16);

export function Progres() {
  return (
    <div className="flex h-full">
      <ProgressFilterSidebar />
      <div className="flex flex-1 flex-col m-2">
        <div className="flex flex-col w-full border border-gray-900 flex-1">
          <ScrollBody
            scrollController={scrollbodyController}
            headerRenderCallback={() => {
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
            }}
            rowRenderCallback={(row) => {
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
            }}
          ></ScrollBody>
        </div>

        <div className="w-full flex">
          <div className="flex m-auto">
            <button className="w-[10rem] bg-indigo-700 mt-3 ml-1 mr-1 p-1">
              Standard Layout
            </button>
            <button className="w-[10rem] bg-indigo-700 mt-3 ml-1 mr-1 p-1">
              Advance Row
            </button>
            <button className="w-[10rem] bg-indigo-700 mt-3 ml-1 mr-1  p-1">
              Hero Row 🥳
            </button>
          </div>

          <div className="flex m-auto">
            <button className="w-[10rem] bg-indigo-700 mt-3 ml-1 mr-1 p-1">
              Show releated
            </button>
            <button className="w-[10rem] bg-indigo-700 mt-3 ml-1 mr-1p-1">
              Edit progress
            </button>
            <button className="w-[10rem] bg-indigo-700 mt-3 ml-1 mr-1 p-1">
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
