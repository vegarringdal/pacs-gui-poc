import React from "react";
import { useNavigate } from "react-router-dom";

export function Start() {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div className="m-auto mt-20">
        <button
          className="bg-gray-500 hover:bg-gray-600 m-2 p-2 w-28"
          onClick={() => navigate("/tag")}
        >
          Tag
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-600 m-2 p-2 w-28"
          onClick={() => navigate("/drum")}
        >
          Drum
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-600 m-2 p-2 w-28"
          onClick={() => navigate("/workpack")}
        >
          Workpack
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-600 m-2 p-2 w-28"
          onClick={() => navigate("/progress")}
        >
          Progress
        </button>
      </div>
    </div>
  );
}
