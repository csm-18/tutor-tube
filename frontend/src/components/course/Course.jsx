import { useState, useRef, useEffect } from "react";
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

  return (
    <div className="flex min-h-screen">
      {mounted && (
        <div
          id="course-menu"
          className={`
            p-[2rem]
            shadow-lg bg-[#ebe7fb] rounded-md
            overflow-hidden flex flex-col items-start gap-[2rem]
            transition-all duration-300 ease-in-out
            ${
              open
                ? "w-[25rem] p-6 opacity-100 border-l-4 border-blue-500"
                : "w-0 p-0 opacity-0 border-l-0"
            }
          `}
          aria-hidden={!open}
        >
          {/* <p
            className={`transition-opacity duration-200 ${
              open ? "opacity-100" : "opacity-0"
            } text-[2rem]`}
          >
            Index and Progress
          </p> */}
          <Link
            to="/"
            className="font-bold text-[var(--violet)] flex flex-row text-[1.2rem]"
          >
            <img className="mr-3" src="/arrow_back.svg" />
            Go to Home
          </Link>
          <ProgressBar value={progress} max={100} />
        </div>
      )}

      <div className="flex flex-col flex-1 items-center">
        <div className="p-5 pt-3 flex justify-start w-[100%]">
          <button
            className=""
            id="menu-btn"
            onClick={toggleMenu}
            aria-expanded={open}
          >
            <img
              className="w-auto h-8"
              src="/menu_violet.svg"
              alt="menu-icon"
            />
          </button>
          <h1 className="text-[1.5rem] text-[var(--violet)] font-bold ml-[2.5rem]">
            {course_title}
          </h1>
        </div>
        <div className="flex-1"></div>
        <div className="w-full flex justify-between my-[5rem]">
          <button className="ml-[7rem] w-40 text-white py-2 bg-[var(--violet)] rounded-md">
            Previous
          </button>
          <button className="mr-[7rem] w-40 text-white py-2 bg-[var(--violet)] rounded-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Course;
