import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Drum } from "./Drum";
import { Progres } from "./Progress";
import { Start } from "./Start";
import { Tag } from "./Tag";
import { Workpack } from "./Workpack";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Start />}></Route>
        <Route path="progress/*" element={<Progres />}></Route>
        <Route path="workpack/*" element={<Workpack />}></Route>
        <Route path="drum/*" element={<Drum />}></Route>
        <Route path="tag/*" element={<Tag />}></Route>
      </Routes>
    </BrowserRouter>
  );
}