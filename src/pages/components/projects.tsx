import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Gallics",
    description:
      "A web3 social media IOS and Android platform built on the Ethereum blockchain with the capability of creating, sharing, and monetizing content as well as interacting with other users.",
    link: "",
    image: "/resumewebsite/logo.png",
    images: ["/resumewebsite/gallics2.png", "/resumewebsite/gallics6.jpeg"],
    video: "https://streamable.com/viszc4",
  },
  {
    title: "Miner Ants",
    description:
      "Start mining MANT tokens 24/7 without the need to be online or have any mining equipment. Earn high returns daily depending on your MinerAnt HashPower.",
    link: "",
    image: "/resumewebsite/minerant-logo.png",
    images: ["/resumewebsite/minerant1.png", "/resumewebsite/minerant2.png"],
  },
  {
    title: "Hygieiora App",
    description:
      "A mobile mental health app that helps users to schedule appointments with mental health professionals, track their mental health progress, and get access to mental health resources.",
    link: "",
    image: "/resumewebsite/hygieioraapp-logo.png",
    images: ["/resumewebsite/hygieioraapp1.png", "//resumewebsite/hygieioraapp2.png", "//resumewebsite/hygieioraapp3.png"],
  },
  {
    title: "Jadaad Technologies",
    description:
      "Jadaad Technologies is your unified platform for mastering skills in data analysis, programming, machine learning, artificial intelligence, product design, and more. We offer in-depth courses tailored to industry needs, crash courses for quick expertise, hands-on projects to build your portfolio, and internship opportunities with startups to gain valuable experience.",
    link: "",
    image: "/resumewebsite/jadaad-logo.png",
    images: ["/resumewebsite/jadaad1.png", "/resumewebsite/jadaad2.png"],
  },
];

function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { ref: containerRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const shuffleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div
      id="projects"
      className="p-4 md:p-8 min-h-screen flex flex-col items-center"
      ref={containerRef}
    >
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Real world projects i contributed to
        </h2>
        <h2 className="text-lg  ">
          Note: The projects listed below are just a sample and do not encompass
          all the work I have completed.
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-1 gap-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setHoveredProject(index)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 sm:h-48 object-contain rounded-lg mb-4"
            />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {hoveredProject !== null && (
          <motion.div
            className="fixed inset-0 flex justify-center bg-black bg-opacity-50 z-50 custom-scroll overflow-auto"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            onClick={() => setHoveredProject(null)}
          >
            <motion.div
              className="bg-white p-4 my-4 rounded-lg shadow-lg flex flex-col items-center text-center overflow-auto mx-4 sm:mx-6 max-w-4xl"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={shuffleVariants}
            >
              <div className="grid grid-cols-1 gap-4 w-full mb-4 justify-items-center">
                {projects[hoveredProject].images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Project ${idx + 1}`}
                    className="max-w-[400px] h-auto object-contain rounded-lg"
                  />
                ))}
                {projects[hoveredProject].video && (
                  <iframe
                    src={projects[hoveredProject].video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-64 md:w-full md:h-72 rounded-lg mb-4"
                    title={`Project ${hoveredProject} Video`}
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Projects;
