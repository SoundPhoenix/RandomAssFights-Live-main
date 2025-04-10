import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import { createRoot } from "react-dom/client";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import FHS from "./Pages/FHS";
import Random from "./Pages/Random";
import Upload from "./Pages/Upload";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/Schools/Districts/FHS" element={<FHS />} />
          <Route path="/Other/Random" element={<Random />} />
          <Route path="/Other/Upload" element={<Upload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById("app");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
//Code made by Josh Severo me@joshsevero.dev