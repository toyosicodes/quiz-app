import "./App.css";
import Homepage from "./components/Homepage";
import Quiz from "./components/Quiz";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route path="quiz" element={<Quiz />}></Route>
      </Routes>
    </div>
  );
}

export default App;
