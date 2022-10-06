import React from "react";

export function ProgressBottomAction() {
  return (
    <div className="flex justify-center items-center h-full gap-2">
      <button className="w-[9rem] bg-indigo-700 ">Standard Layout</button>
      <button className="w-[9rem] bg-indigo-700 ">Advance Layout</button>
      <button className="w-[9rem] bg-indigo-700 ">Show releated</button>
      <button className="w-[9rem] bg-indigo-700 ">Edit progress</button>
      <button className="w-[9rem] bg-indigo-700">Toggle complete</button>
      <button className="w-[9rem] bg-indigo-700 ">Scroll top</button>
    </div>
  );
}
