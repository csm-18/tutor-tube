import React, { useState, useRef, useEffect } from "react";
import { CourseContext } from "../../courseContext";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

const TRANSITION_MS = 300;
const getStorageKey = (title) => `courseProgress_${title}`;

// Helper function to get the initial state from localStorage.
const getInitialState = (courseTitle) => {
  const courseKey = getStorageKey(courseTitle);
  const savedProgress = localStorage.getItem(courseKey);
  if (savedProgress) {
    const parsedProgress = parseInt(savedProgress, 10);
    return { progress: parsedProgress, currentPage: parsedProgress };
  }
  return { progress: 0, currentPage: 1 };
};

function Course({ course_title, children }) {
  const [mounted, setMounted] = useState(true);
  const [open, setOpen] = useState(true);
  const timerRef = useRef(null);

  const totalPages = Array.isArray(children) ? children.length : 1;

  const [{ progress, currentPage }, setState] = useState(() =>
    getInitialState(course_title)
  );

  useEffect(() => {
    const courseKey = getStorageKey(course_title);
    localStorage.setItem(courseKey, progress.toString());
  }, [progress, course_title]);

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

  const handlePageChange = (pageNumber) => {
    setState((prev) => ({
      ...prev,
      currentPage: pageNumber,
    }));
  };

  const handleNext = () => {
    const nextPage = Math.min(currentPage + 1, totalPages);
    setState((prev) => ({
      progress: Math.max(prev.progress, nextPage),
      currentPage: nextPage,
    }));
  };

  const handleLinkClick = (pageNumber) => {
    setState((prev) => ({
      ...prev,
      currentPage: pageNumber,
    }));
  };

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
                ? "fixed top-0 left-0 h-screen overflow-y-auto w-[23rem] p-6 opacity-100 border-l-4 border-blue-500"
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
          <ProgressBar value={progress} max={totalPages} />
          <div className="index flex flex-col w-[20rem] p-2 gap-6">
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child)) {
                const isCurrent = child.props.pageNumber === currentPage;
                // NEW: Check if this page link is the progress one.
                const isProgress = child.props.pageNumber === progress;

                return (
                  <div
                    className="index-item p-2 pl-3 pr-full bg-[var(--violet-medium)] rounded-md cursor-pointer"
                    onClick={() => handleLinkClick(child.props.pageNumber)}
                  >
                    {/* NEW: Apply conditional classes for highlighting. */}
                    <h2
                      className={`font-[500] ${
                        isCurrent
                          ? "text-blue-500"
                          : isProgress
                          ? "text-[var(--violet)]"
                          : ""
                      }`}
                    >
                      {child.props.moduleName}
                    </h2>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}

      <div
        className="flex flex-col flex-1 items-center"
        style={
          open
            ? {
                marginLeft: "23rem",
              }
            : {}
        }
      >
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
          <CourseContext.Provider
            value={{ currentPage, setCurrentPage: handlePageChange }}
          >
            {children}
          </CourseContext.Provider>
        </div>

        <div className="w-full flex justify-between my-20">
          <button
            className="ml-28 w-40 text-white py-2 bg-[var(--violet)] rounded-md"
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          <button
            className="mr-28 w-40 text-white py-2 bg-[var(--violet)] rounded-md"
            onClick={handleNext}
          >
            {currentPage === totalPages ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Course;
