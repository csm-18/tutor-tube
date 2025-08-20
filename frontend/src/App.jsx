import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Courses from "./views/Courses";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  );
}

export default App;
