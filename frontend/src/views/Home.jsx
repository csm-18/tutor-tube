import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import CoursePreview from "../components/CoursePreview";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Home({ theme, setTheme }) {
  const slides = [
    {
      id: 1,
      title: "Stop Scrolling. Start Learning!",
      subtitle: "Free, curated courses to help you learn faster and smarter.",
      image:
        "https://i.pinimg.com/736x/36/21/b4/3621b4083e2d0aa575fa89cadbb82e17.jpg",
    },
    {
      id: 2,
      title: "Learn Anytime, Anywhere",
      subtitle: "Quality tutorials turned into structured courses.",
      image:
        "https://i.pinimg.com/736x/a2/45/76/a24576e70468314b2ff92794cfa44026.jpg",
    },
    {
      id: 3,
      title: "Your Skills, Your Future",
      subtitle: "Practical knowledge without paywalls or distractions.",
      image:
        "https://i.pinimg.com/1200x/6b/39/cc/6b39cc9de0365d668cc69801ea99c8b9.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-white text-gray-900 dark:bg-neutral-950 dark:text-white transition-colors duration-500 flex flex-col min-h-screen">
      <Nav theme={theme} setTheme={setTheme} />

      {/* Hero Section (Image Slider) */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[current].image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Text content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
              <motion.h1
                className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {slides[current].title}
              </motion.h1>
              <motion.p
                className="text-lg md:text-2xl text-gray-200 max-w-2xl mb-8 drop-shadow"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {slides[current].subtitle}
              </motion.p>
              <motion.a
                href="/courses"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl shadow-lg font-semibold hover:bg-indigo-700 transition-transform transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Courses →
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === current ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrent(index)}
            ></button>
          ))}
        </div>

        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent z-10"></div>
      </section>

      {/* Popular Courses Preview */}
      <motion.section
        className="py-20 px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-indigo-500">
          Popular Courses
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <CoursePreview
            name="CS Basics"
            image="/cs-basics.jpg"
            route_link="/courses/cs-basics"
          />
          <CoursePreview
            name="HTML"
            image="/html.jpg"
            route_link="/courses/html"
          />
          <CoursePreview
            name="CSS"
            image="/css-logo.jpg"
            route_link="/courses/css"
          />
          <CoursePreview
            name="JavaScript"
            image="/js-logo.jpg"
            route_link="/courses/js"
          />
          <CoursePreview
            name="React"
            image="/react.jpg"
            route_link="/courses/react"
          />
          <CoursePreview
            name="Python"
            image="/python.jpg"
            route_link="/courses/python"
          />
        </div>

        <div className="text-center mt-12">
          <motion.a
            href="/courses"
            className="bg-indigo-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Browse All Courses →
          </motion.a>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="bg-indigo-50 dark:bg-neutral-900 py-20 px-6 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-500">
          Your Next Skill Upgrade Awaits ✨
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          From fundamentals to advanced frameworks, TutorTube helps you unlock
          skills that matter.
        </p>
        <motion.button
          className="bg-indigo-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started Free
        </motion.button>
      </motion.section>

      <Footer />
    </div>
  );
}

export default Home;
