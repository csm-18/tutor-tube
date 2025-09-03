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

        <CoursePreview name="Vue" image="/vue.png" route_link="/courses/vue" />
        <CoursePreview
          name="Angular"
          image="/angular.png"
          route_link="/courses/angular"
        />

        <CoursePreview
          name="Git and GitHub"
          image="/github-img.jpg"
          route_link="/courses/git-github"
        />

        <CoursePreview
          name="HTML"
          image="/html.jpg"
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
          image="./typescript.png"
          route_link="/courses/typescript"
        />
        <CoursePreview
          name="Linux Terminal"
          image="./linux-logo.jpg"
          route_link="/courses/linux-terminal"
        />

        <CoursePreview
          name="Node.js"
          image="./node-js.jpg"
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
        <CoursePreview
          name="Haskell"
          image="/haskell.png"
          route_link="/courses/haskell"
        />
        <CoursePreview
          name="Java"
          image="/java.png"
          route_link="/courses/java"
        />

        {/* new ones */}
        <CoursePreview name="AI" image="/ai.png" route_link="/courses/ai" />
        <CoursePreview
          name="Bootstrap"
          image="/bootstrap.png"
          route_link="/courses/bootstrap"
        />
        <CoursePreview name="C" image="/c.png" route_link="/courses/c" />
        <CoursePreview
          name="Computer Science Basics"
          image="/cs-basics.jpg"
          route_link="/courses/cs-basics"
        />
        <CoursePreview name="C++" image="/cpp.png" route_link="/courses/cpp" />
        <CoursePreview
          name="C#"
          image="/c-sharp.png"
          route_link="/courses/c-sharp"
        />
        <CoursePreview
          name="Cyber Security"
          image="/cyber-security.jpg"
          route_link="/courses/cyber-security"
        />
        <CoursePreview
          name="Data Science"
          image="/data-science.jpg"
          route_link="/courses/data-science"
        />
        <CoursePreview
          name="Deno"
          image="/deno.png"
          route_link="/courses/deno"
        />
        <CoursePreview
          name="Docker"
          image="/docker.png"
          route_link="/courses/docker"
        />
        <CoursePreview name="DSA" image="/dsa.png" route_link="/courses/dsa" />
        <CoursePreview
          name="Electron"
          image="/electron.png"
          route_link="/courses/electron"
        />
        <CoursePreview
          name="Financial Literacy"
          image="/financial-literacy.png"
          route_link="/courses/financial-literacy"
        />
        <CoursePreview
          name="Flutter"
          image="/flutter.png"
          route_link="/courses/flutter"
        />
        <CoursePreview
          name="Golang"
          image="/golang.png"
          route_link="/courses/golang"
        />
        <CoursePreview
          name="GraphQL"
          image="/graphql.png"
          route_link="/courses/graphql"
        />
        <CoursePreview
          name="jQuery"
          image="/jquery.png"
          route_link="/courses/jquery"
        />
        <CoursePreview
          name="Kotlin"
          image="/kotlin.png"
          route_link="/courses/kotlin"
        />
        <CoursePreview
          name="MERN"
          image="/mern.png"
          route_link="/courses/mern"
        />
        <CoursePreview
          name="MEVN"
          image="/mevn.png"
          route_link="/courses/mevn"
        />
        <CoursePreview
          name="Networking"
          image="/networking.jpg"
          route_link="/courses/networking"
        />
        <CoursePreview
          name="Next.js"
          image="/next.png"
          route_link="/courses/next"
        />
        <CoursePreview
          name="Nuxt.js"
          image="/nuxt.png"
          route_link="/courses/nuxt"
        />
        <CoursePreview name="PHP" image="/php.png" route_link="/courses/php" />
        <CoursePreview
          name="PowerShell"
          image="/power-shell.png"
          route_link="/courses/power-shell"
        />
        <CoursePreview
          name="Ruby"
          image="/ruby.png"
          route_link="/courses/ruby"
        />
        <CoursePreview
          name="Rust"
          image="/rust.jpg"
          route_link="/courses/rust"
        />
        <CoursePreview
          name="SASS"
          image="/sass.png"
          route_link="/courses/sass"
        />
        <CoursePreview
          name="Solid.js"
          image="/solid-js.png"
          route_link="/courses/solid-js"
        />
        <CoursePreview
          name="Svelte"
          image="/svelte.png"
          route_link="/courses/svelte"
        />
        <CoursePreview
          name="Swift"
          image="/swift.png"
          route_link="/courses/swift"
        />
        <CoursePreview
          name="Tailwind"
          image="/tailwind.png"
          route_link="/courses/tailwind"
        />
        <CoursePreview
          name="VS Code"
          image="/vscode.png"
          route_link="/courses/vscode"
        />
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
