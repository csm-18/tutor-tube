import Course from "../components/course/Course";
import CoursePage from "../components/course/CoursePage";
import CoursePageHeading from "../components/course/CoursePageHeading";
import CoursePageParagraph from "../components/course/CoursePageParagraph";
import CoursePageVideo from "../components/course/CoursePageVideo";
import BulletList from "../components/course/BulletList";
import { Children } from "react";
import QuizQuestion from "../components/course/QuizQuestion";
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
        <CoursePageParagraph>
          The first module establishes the fundamentals of version control—the
          practice of tracking and managing changes to code over time. This
          process is enabled by Version Control Systems (VCS), which document
          project history and ensure efficient collaboration.
          <br />
          <br />
          Without version control, teams resort to saving multiple file versions
          (e.g., version1, version2), leading to confusion, conflicting changes,
          and no reliable way to revert to a stable state. In contrast, a VCS
          provides a structured, branched history that supports collaboration,
          accountability, and recovery.
          <br />
          <br />A key distinction introduced early is between Git and GitHub:
        </CoursePageParagraph>
        <BulletList
          items={[
            "Git – an open-source, distributed version control tool (developed in 2005) that records changes with unique commit identifiers.",
            "GitHub – a web-based hosting service for Git repositories, enabling seamless sharing and collaboration.",
          ]}
        />
        <CoursePageParagraph>
          To prevent common beginner confusion, the module presents these
          concepts separately with dedicated video explanations. Rather than
          starting with commands, learners first explore the problem of no
          version control and then see Git/GitHub as the industry-standard
          solution. This approach builds a strong mental model, enabling
          learners to understand workflows, debug issues, and collaborate
          effectively.
          <br />
          <br />
          Conceptual Contrast:
        </CoursePageParagraph>
        <BulletList
          items={[
            {
              text: "Without Version Control",
              children: [
                "Single mutable file, no change tracking",
                "Collaboration chaos with multiple local copies",
                "No reliable recovery or history",
              ],
            },
            {
              text: "With Git",
              children: [
                "Staging area for controlled snapshots",
                "Branching/merging for organized collaboration",
                "Commit logs with SHA-1 hashes for rollback and inspection",
              ],
            },
          ]}
        />
      </CoursePage>

      <CoursePage moduleName="QUIZ - 1" pageNumber={2}>
        <CoursePageHeading heading="QUIZ - 1" />
        <QuizQuestion
          questionId={1}
          question="1. What is the main purpose of a Version Control System (VCS)?"
          options={[
            "To compile code faster",
            "To track and manage changes to code over time",
            "To increase file size",
            "To delete old files",
          ]}
          correctAnswer="To track and manage changes to code over time"
        />

        <QuizQuestion
          questionId={2}
          question="2. Which of the following is true about Git and GitHub?"
          options={[
            "GitHub is a version control tool, Git is a web-based platform",
            "Git is a version control tool, GitHub is a web-based hosting service",
            "Both are the same thing",
            "GitHub replaces Git",
          ]}
          correctAnswer="Git is a version control tool, GitHub is a web-based hosting service"
        />
        <QuizQuestion
          questionId={3}
          question=""
          options={["", "", "", ""]}
          correctAnswer=""
        />
        <QuizQuestion
          questionId={4}
          question=""
          options={["", "", "", ""]}
          correctAnswer=""
        />
      </CoursePage>

      <CoursePage
        moduleName="MODULE 2: Getting Started with Git"
        pageNumber={3}
      >
        <CoursePageHeading heading="MODULE 2: Getting Started with Git" />
      </CoursePage>
    </Course>
  );
}

export default GitGithub;
