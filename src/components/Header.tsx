import React from "react";
import { guiStateStore } from "../state/gui";

export function Header() {
  return (
    <div className="flex bg-gray-900">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-8 h-8 m-3  text-indigo-600"
        onClick={() => {
          guiStateStore.setState({ showQueryMenu: true });
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      <div className="m-auto text-3xl text-gray-200 font-semibold p-2">
        PACS
      </div>
    </div>
  );
}
