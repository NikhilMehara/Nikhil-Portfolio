import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import NavBar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/project" element={<Projects />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/blog" element={<Blogs />}></Route>
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
