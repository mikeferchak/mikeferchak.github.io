import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Resume } from "./Resume";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Resume />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;
