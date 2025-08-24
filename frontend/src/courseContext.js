import { createContext } from "react";

export const CourseContext = createContext({
  currentPage: 1,
  setCurrentPage: () => {}, // default empty function
});
