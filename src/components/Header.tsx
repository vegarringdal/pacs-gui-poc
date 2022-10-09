import React from "react";
import { useLocation } from "react-router-dom";
import { HamburgerIcon } from "../pages/start/HamburgerIcon";

export function Header() {
  const location = useLocation();

  const projectCode = "007586";
  const pageName =
    location.pathname.replaceAll("/", "").toUpperCase() || "WELCOME";
  const title = `${projectCode} - ${pageName}`;
  document.title = `${title}`;

  return (
    <div className="flex bg-gray-900 w-full h-full overflow-hidden">
      <HamburgerIcon />
      <div className="m-auto text-2xl text-gray-200 font-semibold p-2">
        {title}
      </div>
    </div>
  );
}
