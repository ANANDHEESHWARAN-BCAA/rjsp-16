import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>My React Website</h1>
        <nav>
          <Link to="/">|Home|</Link>
          <Link to="/aboutus">|About| </Link>
          <Link to="/contactus">|Contact|</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/contactus" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;