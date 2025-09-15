import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer"

// NEW: Import motion from Framer Motion for animations
import { motion } from "framer-motion";
import {
  FaSearch,
  FaBookOpen,
  FaRocket,
  FaChartLine,
  FaCheckCircle,
  FaUnlock,
  FaBriefcase,
} from "react-icons/fa";

// Steps
const howItWorksSteps = [
  {
    icon: <FaSearch className="w-8 h-8 mb-4 text-indigo-500" />,
    title: "Discover",
    description:
      "Find the best tutorials for coding, design, and more—all curated for you.",
  },
  {
    icon: <FaBookOpen className="w-8 h-8 mb-4 text-indigo-500" />,
    title: "Learn",
    description:
      "Follow step-by-step courses with guided progress tracking for clarity and consistency.",
  },
  {
    icon: <FaRocket className="w-8 h-8 mb-4 text-indigo-500" />,
    title: "Apply",
    description:
      "Turn your skills into real-world projects and gain practical experience.",
  },
];

// Features
const features = [
  {
    icon: <FaChartLine className="w-10 h-10 mx-auto mb-4 text-indigo-400" />,
    title: "Guided Learning",
    description: "Track your progress and stay motivated with structured courses.",
  },
  {
    icon: <FaCheckCircle className="w-10 h-10 mx-auto mb-4 text-green-400" />,
    title: "Curated Content",
    description: "Only the best tutorials, selected for clarity and quality.",
  },
  {
    icon: <FaUnlock className="w-10 h-10 mx-auto mb-4 text-yellow-400" />,
    title: "No Paywalls",
    description: "Access learning materials without distractions or hidden costs.",
  },
  {
    icon: <FaBriefcase className="w-10 h-10 mx-auto mb-4 text-purple-400" />,
    title: "Real Skills",
    description: "Apply your knowledge with practical exercises and projects.",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Aboutpage = ({ theme, setTheme }) => {
  return (
    <div className="bg-white text-gray-900 dark:bg-neutral-950 dark:text-white transition-colors duration-500">
      <Nav theme={theme} setTheme={setTheme} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-20 px-5 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Stop Scrolling. Start Learning. 🚀
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto drop-shadow">
            Knowledge belongs to everyone. TutorTube transforms free tutorials
            into structured, easy-to-follow courses—so you can truly grow.
          </p>
          <motion.button
            className="bg-white text-indigo-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Learning Now
          </motion.button>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src="/heroImage.png"
              alt="TutorTube Learning Illustration"
              className="mx-auto max-w-xl w-full h-auto drop-shadow-2xl rounded-2xl"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works */}
      <motion.section
        className="py-20 px-5 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-indigo-500">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {howItWorksSteps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-8 border border-indigo-100 dark:border-indigo-900 rounded-xl shadow-md hover:shadow-indigo-500/30 hover:-translate-y-2 transition-all duration-300 bg-white dark:bg-neutral-900"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {step.icon}
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="bg-indigo-50 dark:bg-neutral-900 py-20 px-5 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-indigo-500">
          Why Choose TutorTube
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-neutral-800 shadow-md hover:shadow-indigo-500/30 transition-transform transform hover:-translate-y-2"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-20 px-5 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-500">
          Your Next Skill Upgrade is Just a Tap Away 🔑✨
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Turn free knowledge into real-world expertise with TutorTube.
        </p>
        <motion.button
          className="bg-indigo-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started for Free
        </motion.button>
      </motion.section>
      <Footer />
    </div>
  );
};

export default Aboutpage;
