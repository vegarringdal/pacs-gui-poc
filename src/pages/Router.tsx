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
