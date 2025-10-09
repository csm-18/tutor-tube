import React, { useState, useEffect } from "react";
import { CourseContext } from "../../courseContext";
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

const getStorageKey = (title) => `courseProgress_${title}`;

const getInitialState = (courseTitle) => {
  const savedProgress = localStorage.getItem(getStorageKey(courseTitle));
  if (savedProgress) {
    const parsed = parseInt(savedProgress, 10);
    return { progress: parsed, currentPage: parsed };
  }
  return { progress: 0, currentPage: 1 };
};

function Course({ course_title, children }) {
  const [open, setOpen] = useState(false);
  const totalPages = Array.isArray(children) ? children.length : 1;

  const [{ progress, currentPage }, setState] = useState(() =>
    getInitialState(course_title)
  );

  useEffect(() => {
    localStorage.setItem(getStorageKey(course_title), progress.toString());
  }, [progress, course_title]);

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
    setOpen(false); // auto close mobile sidebar
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/** --- MOBILE SIDEBAR (OVERLAY) --- */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black opacity-40"
            onClick={() => setOpen(false)}
          ></div>

          <div className="absolute left-0 top-0 h-full w-4/5 max-w-xs shadow-lg bg-[#ebe7fb] p-6 flex flex-col gap-6 transition-transform duration-300 transform translate-x-0 rounded-r-lg">
            <Link
              to="/"
              className="font-bold text-[var(--violet)] flex flex-row items-center text-lg"
            >
              <img className="mr-3 w-6 h-6" src="/arrow_back.svg" alt="Back" />
              Go to Home
            </Link>

            <ProgressBar value={progress} max={totalPages} />

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

      {/* --- DESKTOP / TABLET SIDEBAR --- */}
<div className="hidden md:flex flex-col flex-shrink-0 w-[20rem] lg:w-[23rem] bg-[#ebe7fb] shadow-lg rounded-r-md p-6 gap-8 h-full">
  <Link
    to="/"
    className="font-bold text-[var(--violet)] flex flex-row items-center text-lg"
  >
    <img className="mr-3 w-6 h-6" src="/arrow_back.svg" alt="Back" />
    Go to Home
  </Link>

  <ProgressBar value={progress} max={totalPages} />

  {/* 👉 Make *only this list* scrollable when content overflows */}
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

      {/** --- MAIN CONTENT --- */}
      <div className="flex-1 flex flex-col items-center transition-all w-full">
        <div className="p-4 sm:p-6 flex justify-between items-center w-full border-b border-gray-200">
          <button
            id="menu-btn"
            onClick={() => setOpen(!open)}
            className="block md:hidden"
          >
            <img src="/menu_violet.svg" className="w-8 h-8" alt="menu" />
          </button>

          <h1 className="text-xl sm:text-2xl font-bold text-[var(--violet)] md:ml-2">
            {course_title}
          </h1>
        </div>

        <div className="flex-1 w-full px-4 sm:px-8 py-4">
          <CourseContext.Provider
            value={{ currentPage, setCurrentPage: handlePageChange }}
          >
            {children}
          </CourseContext.Provider>
        </div>

        <div className="w-full flex justify-between my-10 sm:my-16 px-6 sm:px-20">
          <button
            className="w-28 sm:w-40 text-white py-2 bg-[var(--violet)] rounded-md disabled:opacity-60"
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className="w-28 sm:w-40 text-white py-2 bg-[var(--violet)] rounded-md"
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