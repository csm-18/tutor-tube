import "./App.css";
import React, { useEffect, useState } from "react";
<<<<<<< HEAD
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
import Aboutpage from "./components/Aboutpage.jsx";
=======
import { Routes, Route } from "react-router-dom";

import Ai from "./views/Ai";
import Angular from "./views/Angular";
import AutoCourseBuilder from "./views/AutoCourseBuilder";
import BootStrap from "./views/BootStrap";
import C from "./views/C";
import ComputerScienceBasics from "./views/ComputerScienceBasics";
import Courses from "./views/Courses";
import CPlusPlus from "./views/CPlusPlus";
import CSharp from "./views/CSharp";
import Css from "./views/Css";
import CyberSecurity from "./views/CyberSecurity";
import DataScience from "./views/DataScience";
import Deno from "./views/Deno";
import Docker from "./views/Docker";
import DSA from "./views/DSA";
import Electron from "./views/Electron";
import Figma from "./views/Figma";
import FinancialLiteracy from "./views/FinancialLiteracy";
import Flutter from "./views/Flutter";
import GitGithub from "./views/GitGithub";
import Golang from "./views/Golang";
import GraphQL from "./views/GraphQL";
import Haskell from "./views/Haskell";
import Home from "./views/Home";
import Html from "./views/Html";
import Java from "./views/Java";
import JQuery from "./views/JQuery";
import Js from "./views/Js";
import Kotlin from "./views/Kotlin";
import LinuxTerminal from "./views/LinuxTerminal";
import MERN from "./views/MERN";
import MEVN from "./views/MEVN";
import MongoDB from "./views/MongoDB";
import Networking from "./views/Networking";
import NEXT from "./views/NEXT";
import NodeJs from "./views/NodeJs";
import NUXT from "./views/NUXT";
import PHP from "./views/PHP";
import PowerShell from "./views/PowerShell";
import Python from "./views/Python";
import ReactCourse from "./views/ReactCourse";
import Ruby from "./views/Ruby";
import Rust from "./views/Rust";
import SASS from "./views/SASS";
import SoftSkills from "./views/SoftSkills";
import SolidJs from "./views/SolidJs";
import Sql from "./views/Sql";
import Svelte from "./views/Svelte";
import Swift from "./views/Swift";
import Tailwind from "./views/Tailwind";
import TypeScript from "./views/TypeScript";
import VSCode from "./views/VSCode";
import Vue from "./views/Vue";

>>>>>>> 986661df9490affa24ddd548eabe2945f1c61a15
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
      <Route path="/about" element={<Aboutpage />} />
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

      {/* new ones */}
      <Route path="/courses/ai" element={<Ai />} />
      <Route path="/courses/bootstrap" element={<BootStrap />} />
      <Route path="/courses/c" element={<C />} />
      <Route path="/courses/cs-basics" element={<ComputerScienceBasics />} />
      <Route path="/courses/cpp" element={<CPlusPlus />} />
      <Route path="/courses/c-sharp" element={<CSharp />} />
      <Route path="/courses/cyber-security" element={<CyberSecurity />} />
      <Route path="/courses/data-science" element={<DataScience />} />
      <Route path="/courses/deno" element={<Deno />} />
      <Route path="/courses/docker" element={<Docker />} />
      <Route path="/courses/dsa" element={<DSA />} />
      <Route path="/courses/electron" element={<Electron />} />
      <Route
        path="/courses/financial-literacy"
        element={<FinancialLiteracy />}
      />
      <Route path="/courses/flutter" element={<Flutter />} />
      <Route path="/courses/golang" element={<Golang />} />
      <Route path="/courses/graphql" element={<GraphQL />} />
      <Route path="/courses/jquery" element={<JQuery />} />
      <Route path="/courses/kotlin" element={<Kotlin />} />
      <Route path="/courses/mern" element={<MERN />} />
      <Route path="/courses/mevn" element={<MEVN />} />
      <Route path="/courses/networking" element={<Networking />} />
      <Route path="/courses/next" element={<NEXT />} />
      <Route path="/courses/nuxt" element={<NUXT />} />
      <Route path="/courses/php" element={<PHP />} />
      <Route path="/courses/power-shell" element={<PowerShell />} />
      <Route path="/courses/ruby" element={<Ruby />} />
      <Route path="/courses/rust" element={<Rust />} />
      <Route path="/courses/sass" element={<SASS />} />
      <Route path="/courses/solid-js" element={<SolidJs />} />
      <Route path="/courses/svelte" element={<Svelte />} />
      <Route path="/courses/swift" element={<Swift />} />
      <Route path="/courses/tailwind" element={<Tailwind />} />
      <Route path="/courses/vscode" element={<VSCode />} />
    </Routes>
  );
}

export default App;
