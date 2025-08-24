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
          question=" What problem occurs when there is no version control?"
          options={[
            "Faster collaboration",
            "Clear project history",
            "Multiple conflicting file versions and difficulty in recovery",
            "Automatic backups",
          ]}
          correctAnswer="Multiple conflicting file versions and difficulty in recovery"
        />
        <QuizQuestion
          questionId={4}
          question="Which Git feature allows you to maintain organized development and collaborate safely?"
          options={[
            "Command history",
            "Staging area, branching/merging, and commit logs",
            "File compression",
            "Deleting old commits",
          ]}
          correctAnswer="Staging area, branching/merging, and commit logs"
        />
      </CoursePage>

      <CoursePage
        moduleName="MODULE 2: Getting Started with Git"
        pageNumber={3}
      >
        <CoursePageHeading heading="MODULE 2: Getting Started with Git" />
        <CoursePageVideo
          source="https://www.youtube.com/embed/2j7fD92g-gE"
          videoTitle="Git Installation On Windows | How To Install Git on Windows 10 | Git Installation | Simplilearn"
        />
        <CoursePageParagraph>
          Git is a distributed version control system that helps developers
          track code changes, collaborate seamlessly, and maintain a clear
          project history. Before using Git, you need to install it on your
          system.
          <br />
          <br />
          Installation Steps:
        </CoursePageParagraph>
        <BulletList
          items={[
            "Windows: Download the installer from git-scm.com, run it, and follow the setup wizard (choose Git Bash for command-line use).",
            "macOS: Use Homebrew ('brew install git') or download from git-scm.com.",
            "Linux: Install via package manager (e.g., 'sudo apt-get install git' for Ubuntu/Debian, 'sudo dnf install git' for Fedora).",
            "Verify installation: Run 'git --version' in your terminal to confirm.",
          ]}
        />
      </CoursePage>

      <CoursePage moduleName="Quiz-2" pageNumber={4}>
        <CoursePageHeading heading="Quiz-2" />
        <QuizQuestion
          questionId={1}
          question="What is Git primarily used for?"
          options={[
            "Compiling programs",
            "Tracking code changes and collaboration",
            "Increasing file size",
            "Deleting old files",
          ]}
          correctAnswer="Tracking code changes and collaboration"
        />
        <QuizQuestion
          questionId={2}
          question=" How can you verify that Git is installed on your system?"
          options={["git install", "git check", "git --version", "git status"]}
          correctAnswer="git --version"
        />
        <QuizQuestion
          questionId={3}
          question="Which command installs Git on macOS using Homebrew?"
          options={[
            "brew install git",
            "sudo apt-get install git",
            "git install",
            "brew git",
          ]}
          correctAnswer="brew install git"
        />
        <QuizQuestion
          questionId={4}
          question="On Windows, which application is commonly used to run Git commands after installation?"
          options={[
            "Git Bash",
            "Terminal.app",
            "Command Prompt only",
            "PowerShell only",
          ]}
          correctAnswer="Git Bash"
        />
      </CoursePage>

      <CoursePage moduleName="MODULE 3: Working with Commits" pageNumber={5}>
        <CoursePageHeading heading="MODULE 3: Working with Commits" />
        <CoursePageVideo
          source="https://www.youtube.com/embed/9DHjfDuXMGA"
          videoTitle="How To Git Commit And Push Changes"
        />
        <CoursePageParagraph>
          In Git, a commit is a snapshot of your project at a specific point in
          time. Commits allow you to track changes, document progress, and roll
          back to previous states if needed. Each commit has a unique SHA-1 hash
          and an associated message describing the change.
          <br />
          <br />
          Key Points:
        </CoursePageParagraph>
        <BulletList
          items={[
            {
              text: "Creating a Commit:",
              children: [
                "Stage changes with 'git add <file>' or 'git add .' for all files.",
                "Commit staged changes using 'git commit -m \"Your message\"'.",
              ],
            },
            {
              text: "Viewing History:",
              children: [
                "Use 'git log' to see a list of commits with details.",
              ],
            },
            {
              text: "Amending Commits:",
              children: [
                "Modify the last commit with 'git commit --amend' (useful for correcting messages or adding forgotten changes).",
              ],
            },
            {
              text: "Commit Best Practices:",
              children: [
                "Make small, focused commits.",
                "Write clear, descriptive commit messages.",
                "Commit frequently to maintain a reliable project history.",
              ],
            },
          ]}
        />
      </CoursePage>

      <CoursePage moduleName="QUIZ-3" pageNumber={6}>
        <CoursePageHeading heading="QUIZ-3" />
        <QuizQuestion
          questionId={1}
          question=" What is a commit in Git?"
          options={[
            "A backup of your operating system",
            "A snapshot of the project at a specific point in time",
            "A file containing installation instructions",
            "A branch name",
          ]}
          correctAnswer="A snapshot of the project at a specific point in time"
        />
        <QuizQuestion
          questionId={2}
          question="Which command stages all changes for the next commit?"
          options={[
            'git commit -m "message"',
            "git add .",
            "git log",
            "git status",
          ]}
          correctAnswer="git add ."
        />
        <QuizQuestion
          questionId={3}
          question="How can you view the history of commits in a repository?"
          options={["git status", "git log", "git branch", "git checkout"]}
          correctAnswer="git log"
        />
        <QuizQuestion
          questionId={4}
          question="Which practice is recommended for commits?"
          options={[
            "Make large, infrequent commits",
            "Avoid writing commit messages",
            "Make small, focused commits with descriptive messages",
            "Commit only at the end of the project",
          ]}
          correctAnswer="Make small, focused commits with descriptive messages"
        />
      </CoursePage>

      <CoursePage moduleName="MODULE 4: Branching & Merging" pageNumber={7}>
        <CoursePageHeading heading="MODULE 4: Branching & Merging" />
        <CoursePageVideo
          source="https://www.youtube.com/embed/uqeT0eqbLx0"
          videoTitle="Git Tutorial #10 - Git Branching and Merging | Git Branches Tutorial"
        />
        <CoursePageParagraph>
          Branching in Git allows you to create isolated lines of development
          within a project. This enables multiple features or fixes to be
          developed simultaneously without affecting the main codebase. Merging
          combines changes from one branch into another, integrating new work
          into the main project.
          <br />
          <br />
          Key Points:
        </CoursePageParagraph>
        <BulletList
          items={[
            {
              text: "Creating a Branch:",
              children: [
                "'git branch <branch-name>' creates a new branch.",
                "'git checkout <branch-name>' or 'git switch <branch-name>' to switch branches.",
              ],
            },
            {
              text: "Merging Branches:",
              children: [
                "'git merge <branch-name>' merges changes into the current branch.",
                "Conflicts may arise if the same lines were modified; these must be resolved manually.",
              ],
            },
            {
              text: "Branch Management:",
              children: [
                "List branches: 'git branch'",
                "Delete a branch: 'git branch -d <branch-name>'",
              ],
            },
            {
              text: "Best Practices:",
              children: [
                "Keep branches small and focused.",
                "Merge frequently to reduce conflicts.",
                "Use descriptive branch names (e.g., feature/login, bugfix/header).",
              ],
            },
          ]}
        />
      </CoursePage>

      <CoursePage moduleName="QUIZ-4" pageNumber={8}>
        <CoursePageHeading heading="QUIZ-4" />
        <QuizQuestion
          questionId={1}
          question="What is the main purpose of creating a branch in Git?"
          options={[
            "To delete old files",
            "To create isolated lines of development for features or fixes",
            "To compress the repository",
            "To merge two repositories",
          ]}
          correctAnswer="To create isolated lines of development for features or fixes"
        />
        <QuizQuestion
          questionId={2}
          question="Which command switches to an existing branch?"
          options={[
            "git branch <branch-name>",
            "git switch <branch-name>",
            "git merge <branch-name>",
            "git checkout -- <file>",
          ]}
          correctAnswer="git switch <branch-name>"
        />
        <QuizQuestion
          questionId={3}
          question="What happens during a merge if the same lines were modified in both branches?"
          options={[
            "Git automatically deletes the file",
            "A conflict arises that must be resolved manually",
            "Git ignores one branch",
            "The repository is duplicated",
          ]}
          correctAnswer="A conflict arises that must be resolved manually"
        />
        <QuizQuestion
          questionId={4}
          question="4. Which is a recommended best practice for branches?"
          options={[
            "Keep branches large and long-lived",
            "Use generic names like branch1",
            "Keep branches small, focused, and use descriptive names",
            "Avoid merging frequently",
          ]}
          correctAnswer="Keep branches small, focused, and use descriptive names"
        />
      </CoursePage>
    </Course>
  );
}

export default GitGithub;
