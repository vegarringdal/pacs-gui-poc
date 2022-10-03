import React from "react";
import { useLocation } from "react-router-dom";
import { guiStateStore } from "../state/gui";

export function MainHamburger() {
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
      className="w-8 h-8 m-3  text-indigo-700"
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
  );
}
