import create from "zustand";

type state = {
  showQueryMenu: boolean;
  hideDetail: boolean;
};

export const guiStateStore = create<state>(() => ({
  showQueryMenu: false,
  hideDetail: false,
}));
