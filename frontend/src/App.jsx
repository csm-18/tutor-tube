import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Courses from "./views/Courses";
import GitGithub from "./views/GitGithub";
import AutoCourseBuilder from "./views/AutoCourseBuilder.jsx"; // ✅ new
import { useEffect, useState } from "react";
import Html from "./views/Html.jsx";
import Css from "./views/Css.jsx";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  return (
    <Routes>
      <Route path="/" element={<Home theme={theme} setTheme={setTheme} />} />
      <Route
        path="/courses"
        element={<Courses theme={theme} setTheme={setTheme} />}
      />
      <Route path="/courses/git-github" element={<GitGithub />} />

      {/* ✅ new route */}
      <Route
        path="/autocourse"
        element={<AutoCourseBuilder theme={theme} setTheme={setTheme} />}
      />

      <Route path="/courses/html" element={<Html />} />
      <Route path="/courses/css" element={<Css />} />
    </Routes>
  );
}

export default App;
