import logo from "./logo.svg";
import "./App.css";

import Project from "./pages/project/project";
import Professional from "./pages/professional";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Project />} />
          <Route path="/prof" element={<Professional />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
