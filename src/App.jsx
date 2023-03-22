import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Hello world</div>} />
        <Route path="/about" element={<div>about</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
