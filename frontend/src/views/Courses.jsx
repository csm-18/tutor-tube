import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CoursePreview from "../components/CoursePreview";

function Courses({ theme, setTheme }) {
  return (
    <div className="min-h-screen bg-indigo-50 dark:bg-gradient-to-b dark:from-indigo-950 dark:via-neutral-950 dark:to-black flex flex-col justify-between">
      <Nav theme={theme} setTheme={setTheme} />
      <h2 className="text-center text-[5rem] bold pt-5 font-bold text-indigo-400">
        Courses
      </h2>
      <div className="grid grid-cols-3 gap-[6rem] flex-1 p-[8rem] pt-[4rem]">
        <CoursePreview
          name="React"
          image="/react.jpg"
          route_link="/courses/react"
        />

        <CoursePreview
          name="Git and GitHub"
          image="/github-img.jpg"
          route_link="/courses/git-github"
        />

        <CoursePreview
          name="HTML"
          image="/html-logo.png"
          route_link="/courses/html"
        />

        <CoursePreview
          name="CSS"
          image="./css-logo.jpg"
          route_link="/courses/css"
        />
        <CoursePreview
          name="JavaScript"
          image="./js-logo.jpg"
          route_link="/courses/js"
        />

        <CoursePreview
          name="Figma Design"
          image="./figma.png"
          route_link="/courses/figma"
        />

        <CoursePreview
          name="Soft Skills"
          image="./soft-skills.png"
          route_link="/courses/soft-skills"
        />

        <CoursePreview
          name="TypeScript"
          image="./typescript-logo.svg"
          route_link="/courses/typescript"
        />
        <CoursePreview
          name="Linux Terminal"
          image="./linux-logo.jpg"
          route_link="/courses/linux-terminal"
        />

        <CoursePreview
          name="Node.js"
          image="./node-js.png"
          route_link="/courses/node-js"
        />

        <CoursePreview
          name="MongoDB"
          image="./mongodb.png"
          route_link="/courses/mongodb"
        />
        <CoursePreview
          name="Python"
          image="./python.jpg"
          route_link="/courses/python"
        />
        <CoursePreview name="SQL" image="./sql.jpg" route_link="/courses/sql" />
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
