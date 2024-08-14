import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const languages = [
  {
    name: "React",
    icon: "/resumewebsite/react.png",
  },
  {
    name: "Vue",
    icon: "/resumewebsite/vue.png",
  },
  {
    name: "HTML",
    icon: "/resumewebsite/html.png",
  },
  {
    name: "Python",
    icon: "/resumewebsite/python.png",
  },
  {
    name: "Javascript",
    icon: "/resumewebsite/javascript.png",
  },
  {
    name: "Solidity",
    icon: "/resumewebsite/solidity.png",
  },
];

function Languages() {

  const { ref: containerRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1, // Trigger when 10% of the element is visible
  });



  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div
    id="languages"
    className="p-4 md:p-8 h-screen flex flex-col items-center justify-center"
    ref={containerRef}
  >
    <motion.div
      className="text-center mb-12"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Programming Languages</h2>
    </motion.div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
      {languages.map((language, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform hover:scale-105"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
          transition={{ delay: index * 0.1 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <div className="mb-4">
            <img src={language.icon} alt={language.name} className="w-16 h-16" />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">
            {language.name}
          </h3>
        </motion.div>
      ))}
    </div>
  </div>
  );
}

export default Languages;
