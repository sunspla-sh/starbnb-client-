import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
       <Route path="/" element={ <HomePage/> } />
       <Route path="/signup" element={ <SignupPage/> } />
      </Routes>
    </div>
  );
}

export default App;
