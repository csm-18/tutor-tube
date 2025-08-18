import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about p-5">
      <h2>Stop Scrolling. Start Learning. 🚀</h2>
      <p>
        The internet is full of free knowledge—but who has time to dig through
        it all?
      </p>
      <p>That’s where we come in.</p>
      <p>
        Tutor-Tube takes the best of YouTube tutorials and turns them into
        easy-to-follow courses that help you build real skills in coding,
        design, and more.
      </p>
      <p>
        With guided progress tracking and organized resources, you’ll gain the
        clarity and consistency needed to turn free knowledge into real-world
        expertise.
      </p>
      <p>
        No paywalls. No fluff. Just the good stuff. Your next skill upgrade is
        only a tap away. 🔑✨
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <Link
          to="/get-started"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          Get Started
        </Link>
        <Link
          to="/courses"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
        >
          Browse Courses
        </Link>
      </div>
    </div>
  );
}

export default About;
