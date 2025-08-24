import Course from "../components/course/Course";
import CoursePage from "../components/course/CoursePage";
function GitGithub() {
  return (
    <Course course_title="Git and Github">
      <CoursePage
        moduleName="MODULE 1 : Core Principles of Version Control"
        pageNumber={1}
      >
        <h1 className="text-center p-5 text-[3rem]">
          MODULE 1 : Core Principles of Version Control
        </h1>
      </CoursePage>
      <CoursePage
        moduleName="MODULE 2: Getting Started with Git"
        pageNumber={2}
      >
        <h1 className="text-center p-5 text-[3rem]">
          MODULE 2: Getting Started with Git
        </h1>
      </CoursePage>
    </Course>
  );
}

export default GitGithub;
