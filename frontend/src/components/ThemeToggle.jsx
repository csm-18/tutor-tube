import { useEffect } from "react";

export default function ThemeToggle({ theme, setTheme }) {
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-2 py-0 md:px-2 md:py-1 rounded-full bg-gray-700 text-black dark:bg-gray-50 dark:text-white transition"
    >
      {theme === "dark" ? (
        <span className="text-[1.2rem]">☀️</span>
      ) : (
        <span className="text-[1.2rem]">🌙</span>
      )}
    </button>
  );
}
