import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Drum } from "./drum/Drum";
import { Progres } from "./progress/Progress";
import { Start } from "./start/Start";
import { Tag } from "./tag/Tag";
import { Workpack } from "./workpack/Workpack";

declare var BASE_PATH: any;

function Hook() {
  const location = useLocation();

  console.log(location.pathname);
  return null;
}

export function Router() {
  return (
    <BrowserRouter>
      <Hook />
      <div className="grid grid-cols-1 grid-rows-16 h-full">
        <div className="row-start-1 row-end-2">
          <Header />
        </div>

        <div className="row-start-2 row-end-16">
          <Routes>
            <Route path="*" element={<Start />}></Route>
            <Route path="progress/*" element={<Progres />}></Route>
            <Route path="workpack/*" element={<Workpack />}></Route>
            <Route path="drum/*" element={<Drum />}></Route>
            <Route path="tag/*" element={<Tag />}></Route>
          </Routes>
        </div>

        <div className="row-start-16">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
