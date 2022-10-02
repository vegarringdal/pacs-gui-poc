import React, { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

export class ScrollController {
  rows: { key: number; no: number }[];
  time: any;
  setScrollToNo: number | null;
  rowHeight: number;
  datasetSize: number;
  lastScrollTop = 0;
  minNumRows: number;

  constructor(rowheight: number, datasetSize: number, minNumRows = 25) {
    this.rowHeight = rowheight;
    this.minNumRows = minNumRows;
    this.datasetSize = datasetSize;
    this.rows = this.createRowContext();
    this.time = null;
    this.setScrollToNo = null;
  }

  private createRowContext() {
    const y = [];
    for (let i = 0; i < this.minNumRows; i++) {
      y.push({ key: i, no: i });
    }
    return y;
  }

  setScrollTo(row: number | null) {
    this.setScrollToNo = row;
  }
}

export function createScrollbodyController(
  rowheight: number,
  datasetSize: number
) {
  return new ScrollController(rowheight, datasetSize);
}

export function ScrollBody(props: {
  rowRenderCallback: (row: { key: number; no: number }) => any;
  headerRenderCallback: () => any;
  scrollController: ScrollController;
}) {
  const sc = props.scrollController;
  const [update, setUpdate] = useState(false);
  const [top, setTop] = useState(sc.lastScrollTop);
  const rowHeight = sc.rowHeight;
  const length = sc.datasetSize;
  const ref = useRef(null);

  /**
   * this helps scrolling if not needed
   * if row is widthin view port
   * if it isnt we then we want to move, so user does not need to look for what he selected
   */

  if (sc.setScrollToNo !== null) {
    clearTimeout(sc.time);
    sc.time = setTimeout(() => {
      if (typeof sc.setScrollToNo === "number") {
        sc.lastScrollTop = sc.setScrollToNo * rowHeight;
        const el = ref.current as unknown as HTMLElement;
        if (el) {
          if (sc.setScrollToNo === 0) {
            sc.rows.forEach((row, i) => {
              row.no = i;
            });
            setUpdate(update ? false : true);
          }

          // we use half offsetHeight to try and get closer to the middle..
          if (sc.lastScrollTop > el.scrollTop + el.offsetHeight) {
            setTop(sc.lastScrollTop - el.offsetHeight / 2);
          }

          if (sc.lastScrollTop < el.scrollTop) {
            setTop(sc.lastScrollTop - el.offsetHeight / 2);
          }
        }

        sc.setScrollToNo = null;
      }
    });
  }

  useEffect(() => {
    /**
     * need to reset scrolltop, since context is of sometimes
     */
    const el = ref.current as unknown as HTMLElement;
    if (el) {
      el.scrollTop = top;
    }
  });

  /**
   * on scroll handler
   * @param event
   */
  function onscroll(event: any) {
    flushSync(() => {
      const el = event.target as HTMLElement;
      const currentTop = Math.floor(el.scrollTop / rowHeight);

      const isDownScroll = el.scrollTop > sc.lastScrollTop;
      const largeScroll = true;
      sc.lastScrollTop = el.scrollTop;

      if (!isDownScroll) {
        sc.rows.sort((a, b) => {
          if (a.no < b.no) {
            return 1;
          } else {
            return -1;
          }
        });
      } else {
        sc.rows.sort((a, b) => {
          if (a.no < b.no) {
            return -1;
          } else {
            return 1;
          }
        });
      }

      if (largeScroll) {
        // large scroll will break logic on moving one and one, why bother
        sc.rows.forEach((row, i) => {
          row.no = currentTop + i;
        });
      }

      /**
       * just to trigger rerender
       */
      setUpdate(update ? false : true);
      // need to set top, so when rerender triggers it stays at same location
      setTop(el.scrollTop);
    });
  }

  return (
    /*   this is the container */
    <div className="relative w-full h-full">
      <div className="absolute top-0 bottom-0 right-0 left-0">
        <div
          ref={ref}
          onScroll={onscroll}
          style={{ overflowY: "scroll" }}
          className="border-l border-b border-gray-700  scrollbar pointer-events-auto w-full h-full"
        >
          <div className="sticky top-0 z-20">
            {props.headerRenderCallback()}
          </div>
          <div
            style={{
              height: `${length * rowHeight}px`,
              overflow: "hidden",
              position: "relative",
            }}
          >
            {sc.rows.map((row) => {
              /**
               * styles for row, so it keeps correct heigt and position(top)
               */
              const styles = {
                position: "absolute" as any,
                transform: `translate3d(0px, ${row.no * rowHeight}px, 0px)`,
                height: `${rowHeight}px`,
                display: "block",
                overflow: "hidden",
                width: "100%",
              };

              return (
                <div
                  key={row.key}
                  style={styles}
                  className="flex border-b border-gray-700 pointer-events-none"
                >
                  {props.rowRenderCallback(row)}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
