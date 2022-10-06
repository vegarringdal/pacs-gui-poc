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
    <div className="grid grid-cols-10 grid-rows-10 h-full">
      <ProgressSlideInFilter />

      <div className="row-start-1 row-end-10 col-span-8 ">
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
      <div className="row-start-10 col-span-8 ">
        <ProgressBottomAction />
      </div>
      <div className="col-start-9 col-span-2 row-start-1 row-end-9 ">
        <ProgressDetails />
      </div>
    </div>
  );
}
