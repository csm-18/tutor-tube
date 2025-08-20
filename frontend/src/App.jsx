import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Courses from "./views/Courses";
import GitGithub from "./views/GitGithub";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/git-github" element={<GitGithub />} />
    </Routes>
  );
}

export default App;
