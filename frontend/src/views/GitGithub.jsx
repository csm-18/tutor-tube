import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div className="flex min-h-screen">
      {mounted && (
        <div
          id="course-menu"
          className={`
            p-[2rem]
            shadow-lg bg-blue-100 text-blue-900 rounded-md
            overflow-hidden flex items-start
            transition-all duration-300 ease-in-out
            ${
              open
                ? "w-[20rem] p-6 opacity-100 border-l-4 border-blue-500"
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
        </div>
      )}

      <div className="p-8 pt-6 flex flex-col flex-1 items-center">
        <div className="self-start">
          <button id="menu-btn" onClick={toggleMenu} aria-expanded={open}>
            <img className="w-auto h-10" src="/menu.svg" alt="menu-icon" />
          </button>
        </div>

        <h1 className="text-[4.2rem]">Git and Github</h1>
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
