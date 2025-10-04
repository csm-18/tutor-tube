import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CoursePreview from "../components/CoursePreview";

function Courses({ theme, setTheme }) {
  return (
    <div className="min-h-screen bg-indigo-50 dark:bg-gradient-to-b dark:from-indigo-950 dark:via-neutral-950 dark:to-black flex flex-col justify-between">
      {/* Navbar */}
      <Nav theme={theme} setTheme={setTheme} />

      {/* Page Heading */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-400 mt-10">
        Courses
      </h2>

      {/* Courses Section */}
      <div className="flex-1 w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10 sm:py-12 md:py-16 space-y-16">
        {/* === Fundamentals === */}
        <section>
          <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-6 text-center sm:text-left">
            Fundamentals
          </h3>
          <div
            className="
              grid
              grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
              gap-6 sm:gap-8 lg:gap-10
              place-items-center
            "
          >
            <CoursePreview name="CS Basics" image="/cs-basics.jpg" route_link="/courses/cs-basics" />
            <CoursePreview name="HTML" image="/html.jpg" route_link="/courses/html" />
            <CoursePreview name="CSS" image="/css-logo.jpg" route_link="/courses/css" />
            <CoursePreview name="JavaScript" image="/js-logo.jpg" route_link="/courses/js" />
            <CoursePreview name="VS Code" image="/vscode.png" route_link="/courses/vscode" />
            <CoursePreview name="Git and GitHub" image="/github-img.jpg" route_link="/courses/git-github" />
          </div>
        </section>

        {/* === Frontend === */}
        <section>
          <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-6 text-center sm:text-left">
            Frontend
          </h3>
          <div
            className="
              grid
              grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
              gap-6 sm:gap-8 lg:gap-10
              place-items-center
            "
          >
            <CoursePreview name="React" image="/react.jpg" route_link="/courses/react" />
            <CoursePreview name="Vue" image="/vue.png" route_link="/courses/vue" />
            <CoursePreview name="Angular" image="/angular.png" route_link="/courses/angular" />
            <CoursePreview name="Svelte" image="/svelte.png" route_link="/courses/svelte" />
            <CoursePreview name="Solid.js" image="/solid-js.png" route_link="/courses/solid-js" />
            <CoursePreview name="Next.js" image="/next.png" route_link="/courses/next" />
            <CoursePreview name="Nuxt.js" image="/nuxt.png" route_link="/courses/nuxt" />
            <CoursePreview name="jQuery" image="/jquery.png" route_link="/courses/jquery" />
            <CoursePreview name="Flutter" image="/flutter.png" route_link="/courses/flutter" />
          </div>
        </section>

        {/* === Styling Frameworks === */}
        <section>
          <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-6 text-center sm:text-left">
            Styling Frameworks
          </h3>
          <div
            className="
              grid
              grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
              gap-6 sm:gap-8 lg:gap-10
              place-items-center
            "
          >
            <CoursePreview name="SASS" image="/sass.png" route_link="/courses/sass" />
            <CoursePreview name="Tailwind" image="/tailwind.png" route_link="/courses/tailwind" />
            <CoursePreview name="Bootstrap" image="/bootstrap.png" route_link="/courses/bootstrap" />
            <CoursePreview name="Figma Design" image="/figma.png" route_link="/courses/figma" />
          </div>
        </section>

        {/* === Programming Languages === */}
        <section>
          <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-6 text-center sm:text-left">
            Programming Languages
          </h3>
          <div
            className="
              grid
              grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
              gap-6 sm:gap-8 lg:gap-10
              place-items-center
            "
          >
            <CoursePreview name="TypeScript" image="/typescript.png" route_link="/courses/typescript" />
            <CoursePreview name="Python" image="/python.jpg" route_link="/courses/python" />
            <CoursePreview name="C" image="/c.png" route_link="/courses/c" />
            <CoursePreview name="C++" image="/cpp.png" route_link="/courses/cpp" />
            <CoursePreview name="C#" image="/c-sharp.png" route_link="/courses/c-sharp" />
            <CoursePreview name="Java" image="/java.png" route_link="/courses/java" />
            <CoursePreview name="Kotlin" image="/kotlin.png" route_link="/courses/kotlin" />
            <CoursePreview name="Swift" image="/swift.png" route_link="/courses/swift" />
            <CoursePreview name="Haskell" image="/haskell.png" route_link="/courses/haskell" />
            <CoursePreview name="Ruby" image="/ruby.png" route_link="/courses/ruby" />
            <CoursePreview name="Rust" image="/rust.jpg" route_link="/courses/rust" />
          </div>
        </section>

        {/* === Backend & Servers === */}
        <section>
          <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-6 text-center sm:text-left">
            Backend & Servers
          </h3>
          <div
            className="
              grid
              grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
              gap-6 sm:gap-8 lg:gap-10
              place-items-center
            "
          >
            <CoursePreview name="Node.js" image="/node-js.jpg" route_link="/courses/node-js" />
            <CoursePreview name="Deno" image="/deno.png" route_link="/courses/deno" />
            <CoursePreview name="PHP" image="/php.png" route_link="/courses/php" />
            <CoursePreview name="Golang" image="/golang.png" route_link="/courses/golang" />
            <CoursePreview name="GraphQL" image="/graphql.png" route_link="/courses/graphql" />
            <CoursePreview name="Linux Terminal" image="/linux-logo.jpg" route_link="/courses/linux-terminal" />
            <CoursePreview name="PowerShell" image="/power-shell.png" route_link="/courses/power-shell" />
            <CoursePreview name="Docker" image="/docker.png" route_link="/courses/docker" />
          </div>
        </section>

        {/* === Full Stack === */}
        <section>
          <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-6 text-center sm:text-left">
            Full Stack
          </h3>
          <div
            className="
              grid
              grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
              gap-6 sm:gap-8 lg:gap-10
              place-items-center
            "
          >
            <CoursePreview name="MERN" image="/mern.png" route_link="/courses/mern" />
            <CoursePreview name="MEVN" image="/mevn.png" route_link="/courses/mevn" />
            <CoursePreview name="Electron" image="/electron.png" route_link="/courses/electron" />
          </div>
        </section>

        {/* === Data, Security & Networking === */}
        <section>
          <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-6 text-center sm:text-left">
            Data, Security & Networking
          </h3>
          <div
            className="
              grid
              grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
              gap-6 sm:gap-8 lg:gap-10
              place-items-center
            "
          >
            <CoursePreview name="SQL" image="/sql.jpg" route_link="/courses/sql" />
            <CoursePreview name="MongoDB" image="/mongodb.png" route_link="/courses/mongodb" />
            <CoursePreview name="DSA" image="/dsa.png" route_link="/courses/dsa" />
            <CoursePreview name="Data Science" image="/data-science.jpg" route_link="/courses/data-science" />
            <CoursePreview name="Cyber Security" image="/cyber-security.jpg" route_link="/courses/cyber-security" />
            <CoursePreview name="Networking" image="/networking.jpg" route_link="/courses/networking" />
          </div>
        </section>

        {/* === Other Skills === */}
        <section>
          <h3 className="text-2xl sm:text-3xl font-semibold text-indigo-600 mb-6 text-center sm:text-left">
            Other Skills
          </h3>
          <div
            className="
              grid
              grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4
              gap-6 sm:gap-8 lg:gap-10
              place-items-center
            "
          >
            <CoursePreview name="Financial Literacy" image="/financial-literacy.png" route_link="/courses/financial-literacy" />
            <CoursePreview name="AI" image="/ai.png" route_link="/courses/ai" />
            <CoursePreview name="Soft Skills" image="/soft-skills.png" route_link="/courses/soft-skills" />
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Courses;