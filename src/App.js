// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Quiz from "./Quiz";
import Quiz1 from "./Quiz1";
import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz1" element={<Quiz1 />} />
      </Routes>
    </Router>
  );
}
export default App;
