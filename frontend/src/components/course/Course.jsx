import React, { useState, useRef, useEffect } from "react";
import { CourseContext } from "../../courseContext";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

const TRANSITION_MS = 300;
const getStorageKey = (title) => `courseProgress_${title}`;

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
  // Detect mobile view on mount
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [mounted, setMounted] = useState(true);
  const [open, setOpen] = useState(!isMobile ? true : false);
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
  <div className="flex min-h-screen w-full overflow-x-hidden bg-white">
      {/* MENU BUTTON: always visible, outside sidebar for desktop, overlay for mobile */}
      <button
        id="menu-btn"
        onClick={toggleMenu}
        aria-expanded={open}
        className="fixed top-4 left-4 z-50 bg-white rounded-full shadow-lg p-2 border border-gray-200 md:block"
        style={{ display: 'block' }}
      >
        <img
          className="w-8 h-8"
          src="/menu_violet.svg"
          alt="menu-icon"
        />
      </button>
      {/* MOBILE OVERLAY SIDEBAR & DESKTOP SIDEBAR */}
      {mounted && (
        <div>
          {/* Desktop sidebar: only visible when open on md+ screens */}
          {open && (
            <div
              className="hidden md:flex flex-col flex-shrink-0 w-[20rem] lg:w-[23rem] bg-[#ebe7fb] shadow-lg rounded-r-md p-6 gap-6 h-screen fixed top-0 left-0 z-30"
              style={{ minWidth: '20rem' }}
            >
              <div className="flex items-center justify-between mb-2">
                <Link
                  to="/"
                  className="font-bold text-[var(--violet)] flex flex-row items-center text-lg pl-10"
                >
                  <img className="mr-3 w-6 h-6" src="/arrow_back.svg" alt="back-icon" />
                  Go to Home
                </Link>
              </div>
              <div className="w-full flex items-center justify-center mb-4">
                <div className="flex w-full justify-center">
                  <div className="w-full max-w-[10rem] lg:max-w-[13rem] px-2">
                    <ProgressBar value={progress} max={totalPages} />
                  </div>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto pr-2">
                <div className="flex flex-col gap-4">
                  {React.Children.map(children, (child) => {
                    if (!React.isValidElement(child)) return null;
                    const isCurrent = child.props.pageNumber === currentPage;
                    const isProgress = child.props.pageNumber === progress;
                    return (
                      <div
                        key={child.props.pageNumber}
                        className="p-2 bg-[var(--violet-medium)] rounded cursor-pointer"
                        onClick={() => handleLinkClick(child.props.pageNumber)}
                      >
                        <h2
                          className={`font-medium ${
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
                  })}
                </div>
              </div>
            </div>
          )}
          {/* Mobile overlay sidebar: only visible on mobile */}
          <div
            id="course-menu"
            className={`
              md:hidden
              shadow-lg bg-[#ebe7fb] rounded-md
              overflow-hidden flex flex-col items-start gap-6
              transition-all duration-300 ease-in-out z-40
              ${
                open
                  ? "fixed top-0 left-0 h-screen overflow-y-auto w-[85vw] max-w-xs p-4 sm:p-6 opacity-100 border-l-4 border-blue-500"
                  : "w-0 p-0 opacity-0 border-l-0"
              }
            `}
            aria-hidden={!open}
          >
            {/* Overlay to close menu when clicking outside */}
            {open && (
              <div
                className="fixed inset-0 bg-black opacity-40 z-30"
                onClick={toggleMenu}
                style={{ left: '0', top: '0', width: '100vw', height: '100vh', position: 'fixed' }}
              ></div>
            )}
            <div className="relative z-40">
              <Link
                to="/"
                className="font-bold text-[var(--violet)] flex flex-row items-center text-base sm:text-lg mb-2"
              >
                <img className="mr-2 w-5 h-5 sm:w-6 sm:h-6" src="/arrow_back.svg" alt="back-icon" />
                Go to Home
              </Link>
              <ProgressBar value={progress} max={totalPages} />
              <div className="index flex flex-col w-full gap-4 mt-2">
                {React.Children.map(children, (child) => {
                  if (React.isValidElement(child)) {
                    const isCurrent = child.props.pageNumber === currentPage;
                    const isProgress = child.props.pageNumber === progress;
                    return (
                      <div
                        className="index-item p-2 pl-2 pr-2 bg-[var(--violet-medium)] rounded-md cursor-pointer text-sm sm:text-base"
                        onClick={() => { handleLinkClick(child.props.pageNumber); toggleMenu(); }}
                      >
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
          </div>
        </div>
      )}

      <div
        className="flex flex-col flex-1 items-center"
        style={
          !isMobile && open ? { marginLeft: "23rem" } : {}
        }
      >
        {/* Menu button always visible on mobile */}
        <div className="p-4 pt-3 flex items-center w-full border-b border-gray-200">
          <h1 className="text-lg sm:text-xl font-bold text-[var(--violet)] ml-10 pl-8">
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

        <div className="w-full flex justify-between my-10 sm:my-16 px-4 sm:px-20">
          <button
            className="w-24 sm:w-40 text-white py-2 bg-[var(--violet)] rounded-md disabled:opacity-60 text-sm sm:text-base"
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="w-24 sm:w-40 text-white py-2 bg-[var(--violet)] rounded-md text-sm sm:text-base"
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