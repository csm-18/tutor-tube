import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav
      className="nav w-screen h-[6.5rem] p-1 flex items-center justify-between bg-white
"
    >
      <div className="flex justify-between">
        <img className="ml-5 h-[15rem]" src="./logo2.png" alt="logo" />
        <button className="menu-btn hidden">
          <img className="w-auto h-10" src="./menu.svg" alt="menu-icon" />
        </button>
      </div>
      <div className="menu-links flex gap-8 text-2xl p-1 mr-5">
        <Link to="/get-started">Get Started</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/dashboard">Dashboard</Link>
        <button>Theme</button>
      </div>
    </nav>
  );
}

export default Nav;
