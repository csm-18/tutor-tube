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
          name="Git and GitHub"
          image="/github-img.jpg"
          route_link="/courses/git-github"
        />

        <CoursePreview
          name="HTML5"
          image="/html-logo.png"
          route_link="/courses/html"
        />

        <CoursePreview name="?" image="./html.jpg" />
        <CoursePreview name="?" image="./html.jpg" />
        <CoursePreview name="?" image="./html.jpg" />
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
