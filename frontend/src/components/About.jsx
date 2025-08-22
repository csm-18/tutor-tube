import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="about px-5 py-10 text-center dark:bg-slate-900 dark:text-white">
      {/* Heading */}
      <motion.h2
        className="text-4xl font-bold uppercase font-raleway font-[900] py-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Stop Scrolling. Start Learning. 🚀
      </motion.h2>

      {/* Paragraphs with staggered fade-in */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 },
          },
        }}
      >
        {[
          "The internet is full of free knowledge—but who has time to dig through it all?",
          "That’s where we come in.",
          "TutorTube takes the best of YouTube tutorials and turns them into easy-to-follow courses that help you build real skills in coding, design, and more.",
          "With guided progress tracking and organized resources, you’ll gain the clarity and consistency needed to turn free knowledge into real-world expertise.",
          "No paywalls. No fluff. Just the good stuff. Your next skill upgrade is only a tap away. 🔑✨",
        ].map((text, index) => (
          <motion.p
            key={index}
            className="text-lg max-w-2xl mx-auto mb-6 font-raleway"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="flex justify-center gap-4 mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <Link
          to="/get-started"
          className="px-6 py-2 bg-blue-500 text-white rounded-full shadow-md shadow-blue-500/50 
                     hover:bg-blue-600 transform hover:scale-110 transition duration-300 ease-in-out"
        >
          Get Started
        </Link>
        <Link
          to="/courses"
          className="px-6 py-2 bg-blue-500 text-white rounded-full shadow-md shadow-blue-500/50 
                     hover:bg-blue-600 transform hover:scale-110 transition duration-300 ease-in-out"
        >
          Browse Courses
        </Link>
      </motion.div>
    </div>
  );
}

export default About;
