import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>
          {/* <Route exact path="/home" element={<Dashboard />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
