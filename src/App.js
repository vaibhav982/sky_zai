import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import Layout from "./components/layout/Layout";

// Pages
import Home from "./pages/Home";
import Vision from "./pages/Vision";
import Mission from "./pages/Mission";
import Objectives from "./pages/Objectives";
import Strategies from "./pages/Strategies";
import About from "./pages/About";
import Join from "./pages/Join";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/objectives" element={<Objectives />} />
          <Route path="/strategies" element={<Strategies />} />
          <Route path="/about" element={<About />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;