import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer"
// NEW: Import motion from Framer Motion for animations
import { motion } from "framer-motion";
// NEW: Import icons from React Icons
import { FaSearch, FaBookOpen, FaRocket, FaChartLine, FaCheckCircle, FaUnlock, FaBriefcase } from 'react-icons/fa';

// NEW: Data is moved into arrays for easier management and scalability
const howItWorksSteps = [
  {
    icon: <FaSearch className="w-8 h-8 mb-4 text-blue-500" />,
    title: "Discover",
    description: "Find the best tutorials for coding, design, and more—all curated for you."
  },
  {
    icon: <FaBookOpen className="w-8 h-8 mb-4 text-blue-500" />,
    title: "Learn",
    description: "Follow step-by-step courses with guided progress tracking for clarity and consistency."
  },
  {
    icon: <FaRocket className="w-8 h-8 mb-4 text-blue-500" />,
    title: "Apply",
    description: "Turn your skills into real-world projects and gain practical experience."
  }
];

const features = [
  {
    icon: <FaChartLine className="w-10 h-10 mx-auto mb-4 text-blue-500" />,
    title: "Guided Learning",
    description: "Track your progress and stay motivated with structured courses."
  },
  {
    icon: <FaCheckCircle className="w-10 h-10 mx-auto mb-4 text-green-500" />,
    title: "Curated Content",
    description: "Only the best tutorials, selected for clarity and quality."
  },
  {
    icon: <FaUnlock className="w-10 h-10 mx-auto mb-4 text-yellow-500" />,
    title: "No Paywalls",
    description: "Access learning materials without distractions or hidden costs."
  },
  {
    icon: <FaBriefcase className="w-10 h-10 mx-auto mb-4 text-purple-500" />,
    title: "Real Skills",
    description: "Apply your knowledge with practical exercises and projects."
  }
];

// Animation variants for Framer Motion
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Aboutpage = ({ theme, setTheme }) => {
  return (
    // Added transition-colors for smoother theme switching
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <Nav theme={theme} setTheme={setTheme} />

      {/* Hero Section */}
      <section className="relative bg-blue-500 dark:bg-blue-700 text-white py-20 px-5 text-center overflow-hidden">
        {/* Subtle background element for depth */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-600 dark:bg-blue-800 opacity-20 transform -skew-y-3"></div>
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
            The internet is full of free knowledge—but who has time to dig through it all? 
            TutorTube takes the best of YouTube tutorials and turns them into easy-to-follow courses.
          </p>
          <motion.button 
            className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
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
              className="mx-auto max-w-xl w-full h-auto drop-shadow-2xl"
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
        <h2 className="text-3xl md:text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {/* NEW: Mapping over the data array */}
          {howItWorksSteps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-8 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-white dark:bg-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {step.icon}
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="bg-gray-50 dark:bg-gray-800 py-20 px-5 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Why Choose TutorTube</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* NEW: Mapping over the features array */}
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="p-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Next Skill Upgrade is Just a Tap Away 🔑✨</h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Turn free knowledge into real-world expertise with TutorTube.
        </p>
        <motion.button 
          className="bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
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