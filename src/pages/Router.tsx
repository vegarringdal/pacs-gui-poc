import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Drum } from "./Drum";
import { Progres } from "./Progress";
import { Start } from "./Start";
import { Tag } from "./Tag";
import { Workpack } from "./Workpack";

declare var BASE_PATH: any;

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <div className="flex-1">
        <Routes>
          <Route path="*" element={<Start />}></Route>
          <Route path="progress/*" element={<Progres />}></Route>
          <Route path="workpack/*" element={<Workpack />}></Route>
          <Route path="drum/*" element={<Drum />}></Route>
          <Route path="tag/*" element={<Tag />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
