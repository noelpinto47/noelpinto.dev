import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Resume from "./views/Resume";
import Journal from "./views/Journal";
import ArticleDetail from "./views/ArticleDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/:id" element={<ArticleDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
