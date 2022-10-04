import React from "react";
import { ProgressSlideInFilter } from "./ProgressSlideInFilter";
import { ProgressScrollAreaRow } from "./ProgressScrollAreaRow";
import { ProgressScrollAreaHeader } from "./ProgressScrollAreaHeader";
import { ProgressDetails } from "./ProgressDetails";
import { ProgressBottomAction } from "./ProgressBottomAction";
import { ScrollBody } from "../../components/ScrollBody";
import { progressScrollController } from "./progressScrollController";

export function Progres() {
  return (
    <div className="flex h-full">
      <ProgressSlideInFilter />
      <div className="flex flex-1 flex-col p-2">
        <div className="flex flex-col w-full border border-gray-900 flex-1">
          <ScrollBody
            scrollController={progressScrollController}
            headerRenderCallback={() => {
              return <ProgressScrollAreaHeader />;
            }}
            rowRenderCallback={(row) => {
              return <ProgressScrollAreaRow row={row} />;
            }}
          ></ScrollBody>
        </div>
        <div className="w-full flex p-2">
          <ProgressBottomAction />
        </div>
      </div>
      <div className="flex flex-col ">
        <ProgressDetails />
      </div>
    </div>
  );
}
