import create from "zustand";

type state = {
  showQueryMenu: boolean;
};

export const guiStateStore = create<state>(() => ({
  showQueryMenu: false,
}));
