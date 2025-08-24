import Course from "../components/course/Course";
import CoursePage from "../components/course/CoursePage";
import CoursePageHeading from "../components/course/CoursePageHeading";
import CoursePageVideo from "../components/course/CoursePageVideo";
function GitGithub() {
  return (
    <Course course_title="Git and Github">
      <CoursePage
        moduleName="MODULE 1 : Core Principles of Version Control"
        pageNumber={1}
      >
        <CoursePageHeading heading="MODULE 1 : Core Principles of Version Control" />
        <CoursePageVideo
          source="https://www.youtube.com/embed/Yc8sCSeMhi4"
          videoTitle="What Is Version Control? | Git Version Control | Version Control In Software Engineering|Simplilearn"
        />
      </CoursePage>

      <CoursePage
        moduleName="MODULE 2: Getting Started with Git"
        pageNumber={2}
      >
        <CoursePageHeading heading="MODULE 2: Getting Started with Git" />
        MODULE 2: Getting Started with Git
      </CoursePage>
    </Course>
  );
}

export default GitGithub;
