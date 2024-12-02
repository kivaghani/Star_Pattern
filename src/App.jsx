import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import First from "./component/Star/First";
import Second from "./component/Star/Second";
import Third from "./component/Star/Third";
import Four from "./component/Star/Four";
import Five from "./component/Star/Five";
import Six from "./component/Star/Six";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/star1" element={<First />} />
        <Route path="/star2" element={<Second />} />
        <Route path="/star3" element={<Third />} />
        <Route path="/star4" element={<Four />} />
        <Route path="/star5" element={<Five />} />
        <Route path="/star6" element={<Six />} />
      </Routes>
    </BrowserRouter>
  );
}
