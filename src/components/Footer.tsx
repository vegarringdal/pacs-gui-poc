import React from "react";
import { DetailShowHideIcon } from "./DetailShowHideIcon";

export function Footer() {
  return (
    <div className="flex flex-col bg-gray-900 w-full h-full overflow-hidden">
      <div className="m-auto text-2xl text-gray-200 font-semibold p-2"> PTOC - Project Tag Operation Control</div>
      <DetailShowHideIcon/>
    </div>
  );
}
