import Course from "../components/course/Course";
import CoursePage from "../components/course/CoursePage";
function GitGithub() {
  return (
    <Course course_title="Git and Github">
      <CoursePage pageNumber={1}>
        <h1 className="text-center p-5 text-[5rem]">Hello Page 1!</h1>
      </CoursePage>
      <CoursePage pageNumber={2}>
        <h1 className="text-center p-5 text-[5rem]">Hello Page 2!</h1>
      </CoursePage>
    </Course>
  );
}

export default GitGithub;
