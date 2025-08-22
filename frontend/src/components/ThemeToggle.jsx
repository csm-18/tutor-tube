import { useEffect, useState } from "react";

export default function ThemeToggle({ theme, setTheme }) {
  useEffect(() => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-2 py-1 rounded-full dark:bg-gray-51 text-black bg-gray-700 dark:text-white transition"
    >
      {theme === "dark" ? (
        <span className="text-[1.2rem]">☀️</span>
      ) : (
        <span className="text-[1.2rem]">🌙</span>
      )}
    </button>
  );
}
