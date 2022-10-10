import React, { useEffect } from "react";
import "./App.css";
import { PutInLandScape } from "./components/PutInLandScape";
import { WrongDeviceInfo } from "./components/WrongDeviceInfo";
import { Router } from "./pages/Router";

export function App() {
  return (
    <div className="bg-gray-800 absolute top-0 bottom-0 left-0 right-0 text-gray-200 text-md">
      <PutInLandScape />
      <WrongDeviceInfo />
      <Router />
    </div>
  );
}
export default App;
