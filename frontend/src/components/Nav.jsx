function Nav() {
  return (
    <nav
      className="nav w-screen p-4 flex items-center justify-between bg-slate-50
"
    >
      <div className="flex justify-between">
        <h1 className="text-4xl">Tutor-Tube</h1>
        <button className="menu-btn hidden">
          <img className="w-auto h-10" src="./menu.svg" alt="menu-icon" />
        </button>
      </div>
      <ul className="menu-links flex gap-8 text-2xl p-3">
        <li>About</li>
        <li>Courses</li>
        <li>Dashboard</li>
        <button>Theme</button>
      </ul>
    </nav>
  );
}

export default Nav;
