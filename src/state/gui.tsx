import create from "zustand";

type state = {
  todo: string;
};

export const guiStateStore = create<state>(() => ({
  todo: "todo",
}));
