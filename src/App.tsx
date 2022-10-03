import React, { useEffect } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Router } from "./pages/Router";

export function App() {
  return (
    <div className="flex flex-col bg-gray-800 absolute top-0 bottom-0 left-0 right-0 text-gray-200">
      <div className="portraitinfo fixed top-0 left-0 right-0 bottom-0 bg-gray-900 z-[99999] hidden">
        <div className="w-full h-full flex text-3xl">
          <div className="m-auto"> Please put device in landscape mode</div>
        </div>
      </div>

      <div className="toSmallinfo fixed top-0 left-0 right-0 bottom-0 bg-gray-900 z-[99999] hidden">
        <div className="w-full h-full flex text-3xl">
          <div className="m-auto">Page not not made for this device </div>
        </div>
      </div>

      <Router />
    </div>
  );
}
export default App;
