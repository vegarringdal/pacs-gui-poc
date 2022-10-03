import React from "react";
import { MainHamburger } from "./MainHamburger";

export function Header() {
  return (
    <div className="flex bg-gray-900">
      <MainHamburger />
      <div className="m-auto text-3xl text-gray-200 font-semibold p-2">
        PACS
      </div>
    </div>
  );
}
