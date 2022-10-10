import React from "react";
import { useLocation } from "react-router-dom";
import { guiStateStore } from "../state/gui";

export function SearchIcon() {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8 fixed top-2 left-2 text-indigo-600"
      onClick={() => {
        guiStateStore.setState({
          showQueryMenu: guiStateStore.getState().showQueryMenu ? false : true,
        });
      }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
}
