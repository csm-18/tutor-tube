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

      <CoursePage
        moduleName="MODULE 5: Working with Remote Repositories"
        pageNumber={9}
      >
        <CoursePageHeading heading="MODULE 5: Working with Remote Repositories" />
        <CoursePageVideo
          source="https://www.youtube.com/embed/Thx5yerhlhs"
          videoTitle="GitHub: Working with Remote Repositories | Git Tutorials #13"
        />
        <CoursePageParagraph>
          Remote repositories are versions of your project hosted on platforms
          like GitHub, GitLab, or Bitbucket, enabling collaboration across
          multiple developers. They serve as the central source of truth for
          your code.
          <br />
          <br />
          Key Points:
        </CoursePageParagraph>
        <BulletList
          items={[
            {
              text: "Adding a Remote:",
              children: [
                "'git remote add origin <repository-URL>' links your local repo to a remote.",
              ],
            },
            {
              text: "Pushing Changes:",
              children: [
                "'git push origin <branch-name>' uploads local commits to the remote repository.",
              ],
            },
            {
              text: "Fetching and Pulling:",
              children: [
                "'git fetch' retrieves updates from the remote without merging.",
                "'git pull' fetches and merges changes from the remote into your local branch.",
              ],
            },
            {
              text: "Cloning a Repository:",
              children: [
                "'git clone <repository-URL>' creates a local copy of a remote repository.",
              ],
            },
            {
              text: "Best Practices:",
              children: [
                "Pull frequently to stay updated with the team.",
                "Push small, tested commits.",
                "Keep remote branches organized with clear names.",
              ],
            },
          ]}
        />
      </CoursePage>

      <CoursePage moduleName="QUIZ-5" pageNumber={10}>
        <CoursePageHeading heading="QUIZ-5" />
        <QuizQuestion
          questionId={1}
          question="What is the purpose of a remote repository in Git?"
          options={[
            "To run local scripts",
            "To serve as a central version of the project for collaboration",
            "To delete local files",
            "To compress the project",
          ]}
          correctAnswer="To serve as a central version of the project for collaboration"
        />
        <QuizQuestion
          questionId={2}
          question="Which command links a local repository to a remote repository?"
          options={[
            "git push origin",
            "git clone <repository-URL>",
            "git remote add origin <repository-URL>",
            "git fetch",
          ]}
          correctAnswer="git remote add origin <repository-URL>"
        />
        <QuizQuestion
          questionId={3}
          question="What is the difference between 'git fetch' and 'git pull'?"
          options={[
            "git fetch downloads changes without merging; git pull downloads and merges",
            "git fetch deletes files; git pull creates files",
            "Both do the same thing",
            "git pull only works on master branch",
          ]}
          correctAnswer="git fetch downloads changes without merging; git pull downloads and merges"
        />
        <QuizQuestion
          questionId={4}
          question="Which is a recommended best practice for working with remote repositories?"
          options={[
            "Push large, untested commits",
            "Pull frequently and keep remote branches organized",
            "Avoid pulling changes to prevent conflicts",
            "Rename the remote repository daily",
          ]}
          correctAnswer="Pull frequently and keep remote branches organized"
        />
      </CoursePage>

      <CoursePage moduleName="MODULE 6: GitHub & Collaboration" pageNumber={11}>
        <CoursePageHeading heading="MODULE 6: GitHub & Collaboration" />
        <CoursePageVideo
          source="https://www.youtube.com/embed/cn8l5bXhTBM"
          videoTitle="Master Git &amp; GitHub | Part 4 | Collaboration"
        />
        <CoursePageParagraph>
          GitHub is a web-based platform for hosting Git repositories, enabling
          seamless collaboration among developers worldwide. It provides tools
          for sharing code, reviewing changes, and managing projects.
          <br />
          <br />
          Key Points:
        </CoursePageParagraph>
        <BulletList
          items={[
            {
              text: "Forking & Cloning:",
              children: [
                "Fork creates a personal copy of someone else’s repository on GitHub.",
                "Clone downloads a repository to your local system for development.",
              ],
            },
            {
              text: "Pull Requests (PRs):",
              children: [
                "PRs propose changes from one branch or fork to be merged into another repository.",
                "Team members review, comment, and approve changes before merging.",
              ],
            },
            {
              text: "Collaboration Workflow:",
              children: [
                "Create a branch → Make changes → Commit → Push → Open Pull Request → Review & Merge.",
              ],
            },
            {
              text: "Managing Issues:",
              children: [
                "Track bugs, feature requests, or tasks using GitHub Issues.",
              ],
            },
            {
              text: "Best Practices:",
              children: [
                "Use descriptive PR titles and commit messages.",
                "Keep branches short-lived and focused.",
                "Regularly sync your fork or branch with the main repository.",
              ],
            },
          ]}
        />
      </CoursePage>
    </Course>
  );
}

export default GitGithub;
