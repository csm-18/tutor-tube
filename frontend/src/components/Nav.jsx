import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Nav({ theme, setTheme }) {
  function menuToggle() {
    let menu = document.getElementById("menu");
    if (menu.style.display === "flex") {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
  }

  return (
    <nav
      className="w-screen p-1 flex flex-col md:h-[4.5rem] md:flex-row md:justify-between bg-white dark:bg-black 
"
    >
      <div className="flex justify-between">
        <Link to="/">
          {theme === "dark" ? (
            <img
              className="ml-1 h-[3.5rem] md:ml-5 md:h-[4rem]"
              src="logo3_transparent_white_text.png"
              alt="logo"
            />
          ) : (
            <img
              className="ml-1 h-[3.5rem] md:ml-5 md:h-[4rem]"
              src="logo3_transparent.png"
              alt="logo"
            />
          )}
        </Link>
        <button onClick={menuToggle} className="mr-2 md:hidden">
          <img className="w-auto h-10" src="/menu.svg" alt="menu-icon" />
        </button>
      </div>
      <div
        id="menu"
        className="hidden font-baloo font-bold flex-col p-3 items-center gap-6 md:gap-7 text-[1.5rem] md:text-[1.3rem] md:flex md:flex-row md:mr-2 text-blue-400"
      >
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/autocourse">
          Auto Course Builder
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/courses">
          Courses
        </Link>
        {/* <Link className="nav-link" to="/dashboard">
          Dashboard
        </Link> */}
        <ThemeToggle theme={theme} setTheme={setTheme} className="block" />
      </div>
    </nav>
  );
}

export default Nav;
