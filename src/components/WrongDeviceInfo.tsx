import React from "react";

export function WrongDeviceInfo() {
  return (
    <div className="toSmallinfo fixed top-0 left-0 right-0 bottom-0 bg-gray-900 z-[99999] hidden">
      <div className="w-full h-full flex text-3xl">
        <div className="m-auto">Page not not made for this device </div>
      </div>
    </div>
  );
}
