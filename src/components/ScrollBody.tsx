import React, { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

/**
 * ScrollController
 */
export class ScrollController {
  rows: { key: number; no: number }[];
  time: any;
  setScrollToNo: number | null;
  rowHeight: number;
  datasetSize: number;
  lastScrollTop = 0;
  minNumRows: number;
  largeScrollTimer: any;

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
      y.push({ key: i, no: i, needsUpdate: false });
    }
    return y;
  }

  setScrollTo(row: number | null) {
    this.setScrollToNo = row;
  }
}

/**
 * createScrollbodyController
 */

export function createScrollbodyController(
  rowheight: number,
  datasetSize: number,
  minNumRows = 10
) {
  return new ScrollController(rowheight, datasetSize, minNumRows);
}

/**
 * ScrollBody
 */
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

          setTop(sc.lastScrollTop);
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
      const clientHeight = el.clientHeight;
      const currentTop = Math.floor(el.scrollTop / rowHeight);
      const currentTopEnd = Math.floor(
        (el.scrollTop + clientHeight) / rowHeight
      );

      const isDownScroll = el.scrollTop > sc.lastScrollTop;
      const scrolllength = Math.abs(sc.lastScrollTop - el.scrollTop);

      let largeScroll = false;
      console.log(scrolllength, scrolllength > 100);
      if (scrolllength > 100) {
        largeScroll = true;
      }
      sc.lastScrollTop = el.scrollTop;

      if (largeScroll) {
        // large scroll will break logic on moving one and one, why bother
        clearTimeout(sc.largeScrollTimer);
        sc.largeScrollTimer = setTimeout(() => {
          sc.rows.forEach((row, i) => {
            row.no = currentTop + i;
          });

          setUpdate(update ? false : true);
          setTop(el.scrollTop);
        }, 20);
      } else {
        const rowsWanted = new Set<number>();

        if (isDownScroll) {
          let count = currentTop - 1;
          sc.rows.forEach(() => {
            rowsWanted.add(count);
            count++;
          });
        } else {
          let countTop = currentTopEnd;
          let count = currentTopEnd + 1;
          sc.rows.forEach(() => {
            // I can prb improve this
            rowsWanted.add(count);
            count--;
          });
        }

        sc.rows.forEach((row) => {
          if (row.no <= currentTop) {
            row.no = -1;
          }
          if (row.no >= currentTopEnd) {
            row.no = -1;
          }
          if (row.no >= 0) {
            rowsWanted.delete(row.no);
          }
        });

        const rowsWantedArray = Array.from(rowsWanted);
        sc.rows.forEach((row) => {
          if (row.no < 0) {
            row.no = rowsWantedArray.pop() as any;
          }
        });

        setUpdate(update ? false : true);
        setTop(el.scrollTop);
      }
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
