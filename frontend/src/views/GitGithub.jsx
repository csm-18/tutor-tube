import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ProgressBar from "../components/course/ProgressBar";

const TRANSITION_MS = 300;

function GitGithub() {
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

      <div className="p-5 pt-3 flex flex-col flex-1 items-center">
        <div className="flex justify-start w-[100%]">
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
            Git and Github
          </h1>
        </div>

        <p className="text-[1.7rem]">The Essentials</p>

        <iframe
          className="h-[26rem] w-[46rem] mt-[4rem] rounded-md"
          src="https://www.youtube.com/embed/apGV9Kg7ics"
          title="Complete Git and GitHub Tutorial"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default GitGithub;
