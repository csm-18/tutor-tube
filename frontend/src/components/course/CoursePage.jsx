import React, { useContext } from "react";
import { CourseContext } from "../../courseContext";

function CoursePage({ moduleName, pageNumber, children }) {
  const { currentPage } = useContext(CourseContext);

  return (
    <div
      className={`course-page overflow-y-auto w-full h-full page${pageNumber} ${
        currentPage === pageNumber ? "" : "hidden"
      }`}
    >
      {children}
    </div>
  );
}

export default CoursePage;
