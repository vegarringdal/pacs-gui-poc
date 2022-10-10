import React from "react";
import { ProgressSlideInFilter } from "./ProgressSlideInFilter";
import { ProgressScrollAreaRow } from "./ProgressScrollAreaRow";
import { ProgressScrollAreaHeader } from "./ProgressScrollAreaHeader";
import { ProgressDetails } from "./ProgressDetails";
import { ProgressBottomAction } from "./ProgressBottomAction";
import { ScrollBody } from "../../components/ScrollBody";
import { progressScrollController } from "./progressScrollController";
import { guiStateStore } from "../../state/gui";

export function Progres() {
  const guiState = guiStateStore()
  
  /**
   * default classes we need to edit to hide detail area
   */
  let defaultClassScrollArea = "row-start-1 row-end-10 col-start-1 col-end-9";
  let defaultClassActionArea = "row-start-10 col-start-1 col-end-9";
  let defaultClassDetailArea = "col-start-9 col-end-11 row-start-1 row-end-11";

  if (guiState.hideDetail) {
    defaultClassScrollArea = defaultClassScrollArea.replace(
      "col-end-9",
      "col-end-11"
    );
    defaultClassActionArea = defaultClassActionArea.replace(
      "col-end-9",
      "col-end-11"
    );
    defaultClassDetailArea = "hidden";
  }

  return (
    <div className="grid grid-cols-10 grid-rows-10 h-full">
      <div className={defaultClassScrollArea}>
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

      <div className={defaultClassActionArea}>
        <ProgressBottomAction />
      </div>

      <div className={defaultClassDetailArea}>
        <ProgressDetails />
      </div>

      <ProgressSlideInFilter />
    </div>
  );
}
