import { useState, useRef, useEffect } from "react";
import { CourseContext } from "../../courseContext";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

const TRANSITION_MS = 300;

function Course({ course_title, children }) {
  const [mounted, setMounted] = useState(true);
  const [open, setOpen] = useState(true);
  const timerRef = useRef(null);

  const toggleMenu = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (open) {
      setOpen(false);
      timerRef.current = setTimeout(() => {
        setMounted(false);
        timerRef.current = null;
      }, TRANSITION_MS);
    } else {
      setMounted(true);
      requestAnimationFrame(() => {
        setOpen(true);
      });
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const [progress, setProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Array.isArray(children) ? children.length : 1;

  return (
    <div className="flex min-h-screen">
      {mounted && (
        <div
          id="course-menu"
          className={`
            shadow-lg bg-[#ebe7fb] rounded-md
            overflow-hidden flex flex-col items-start gap-8
            transition-all duration-300 ease-in-out
            ${
              open
                ? "w-[25rem] p-6 opacity-100 border-l-4 border-blue-500"
                : "w-0 p-0 opacity-0 border-l-0"
            }
          `}
          aria-hidden={!open}
        >
          <Link
            to="/"
            className="font-bold text-[var(--violet)] flex flex-row text-[1.2rem]"
          >
            <img className="mr-3" src="/arrow_back.svg" alt="back-icon" />
            Go to Home
          </Link>
          <ProgressBar value={progress} max={100} />
        </div>
      )}

      <div className="flex flex-col flex-1 items-center">
        <div className="p-5 pt-3 flex justify-start w-full">
          <button id="menu-btn" onClick={toggleMenu} aria-expanded={open}>
            <img
              className="w-auto h-8"
              src="/menu_violet.svg"
              alt="menu-icon"
            />
          </button>
          <h1 className="text-[1.5rem] text-[var(--violet)] font-bold ml-10">
            {course_title}
          </h1>
        </div>

        <div className="flex-1 w-full flex flex-col">
          <CourseContext.Provider value={{ currentPage, setCurrentPage }}>
            {children}
          </CourseContext.Provider>
        </div>

        <div className="w-full flex justify-between my-20">
          <button
            className="ml-28 w-40 text-white py-2 bg-[var(--violet)] rounded-md"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <button
            className="mr-28 w-40 text-white py-2 bg-[var(--violet)] rounded-md"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Course;
