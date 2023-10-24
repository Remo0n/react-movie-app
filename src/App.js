// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Search from "./pages/Search/Search";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/search/:keyword" element={<Search />} />

        <Route path="/details/:media_type/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
