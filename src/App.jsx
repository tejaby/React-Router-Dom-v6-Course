import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import User from "./pages/user";
import NotFound from "./pages/NotFound";
import DashBoard from "./pages/DashBoard";

import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="welcome" element={<p>welcome</p>}></Route>
          <Route path="goodbye" element={<p>goodbye</p>}></Route>
        </Route>
        <Route path="/users" element={<Users />} />
        <Route path="/usuarios" element={<Navigate to="/users" />} />
        <Route path="/user/:id/:user" element={<User />} />
        <Route path="/dashboard/*" element={<DashBoard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
