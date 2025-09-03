import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Courses from "./views/Courses";
import GitGithub from "./views/GitGithub";
import AutoCourseBuilder from "./views/AutoCourseBuilder.jsx"; // ✅ new
import React, { useEffect, useState } from "react";
import Html from "./views/Html.jsx";
import Css from "./views/Css.jsx";
import Js from "./views/Js.jsx";
import LinuxTerminal from "./views/LinuxTerminal.jsx";
import TypeScript from "./views/TypeScript.jsx";
import MongoDB from "./views/MongoDB.jsx";
import Python from "./views/Python.jsx";
import Sql from "./views/Sql.jsx";
import NodeJs from "./views/NodeJs.jsx";
import Figma from "./views/Figma.jsx";
import SoftSkills from "./views/SoftSkills.jsx";
import ReactCourse from "./views/ReactCourse.jsx";
import Vue from "./views/Vue.jsx";
import Angular from "./views/Angular.jsx";
import Haskell from "./views/Haskell.jsx";
import Java from "./views/Java.jsx";
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
      <Route path="/courses/js" element={<Js />} />
      <Route path="/courses/typescript" element={<TypeScript />} />

      <Route path="/courses/linux-terminal" element={<LinuxTerminal />} />
      <Route path="/courses/mongodb" element={<MongoDB />} />
      <Route path="/courses/python" element={<Python />} />
      <Route path="/courses/sql" element={<Sql />} />
      <Route path="/courses/node-js" element={<NodeJs />} />
      <Route path="/courses/figma" element={<Figma />} />
      <Route path="/courses/soft-skills" element={<SoftSkills />} />
      <Route path="/courses/react" element={<ReactCourse />} />
      <Route path="/courses/vue" element={<Vue />} />
      <Route path="/courses/angular" element={<Angular />} />
      <Route path="/courses/haskell" element={<Haskell />} />
      <Route path="/courses/java" element={<Java />} />
    </Routes>
  );
}

export default App;
