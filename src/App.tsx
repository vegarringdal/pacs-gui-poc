import React from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Router } from "./pages/Router";

export function App() {
  return (
    <div className="flex flex-col bg-gray-800 absolute top-0 bottom-0 left-0 right-0 text-gray-200">
      <Header />
      <div className="flex-1">
        <Router />
      </div>
      <Footer />
    </div>
  );
}
export default App;
