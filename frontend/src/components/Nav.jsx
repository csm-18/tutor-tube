import { useState } from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Nav() {
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
      className="w-screen p-1 flex flex-col md:h-[4.5rem] md:flex-row md:justify-between bg-white 
"
    >
      <div className="flex justify-between">
        <Link to="/">
          <img
            className="ml-1 h-[3.5rem] md:ml-5 md:h-[4rem]"
            src="/logo3.png"
            alt="logo"
          />
        </Link>
        <button onClick={menuToggle} className="mr-2 md:hidden">
          <img className="w-auto h-10" src="./menu.svg" alt="menu-icon" />
        </button>
      </div>
      <div
        id="menu"
        className="hidden flex-col p-3 items-center gap-6 text-[1.2rem] md:flex md:flex-row"
      >
        <Link className="block" to="/get-started">
          Get Started
        </Link>
        <Link className="block" to="/courses">
          Courses
        </Link>
        <Link className="block" to="/dashboard">
          Dashboard
        </Link>
        <ThemeToggle className="block" />
      </div>
    </nav>
  );
}

export default Nav;
