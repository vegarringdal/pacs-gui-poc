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
      <div className="overlapping row-start-1 row-end-10 col-start-1 col-end-9 z-10">
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
      <div className="row-start-10 col-start-1 col-end-9">
        <ProgressBottomAction />
      </div>
      <div className="col-start-9 col-end-11 row-start-1 row-end-11 ">
        <ProgressDetails />
      </div>
      <ProgressSlideInFilter />
    </div>
  );
}
