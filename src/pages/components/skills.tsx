import { motion } from 'framer-motion';
import { FaCloud, FaCode, FaDesktop, FaHeadset, FaLock, FaNetworkWired, FaReact, FaServer, FaSitemap, FaTools, FaUserAlt } from 'react-icons/fa';
import { useInView } from "react-intersection-observer";

function Skills() {
  const skills = [
    { name: 'Networking & Hardware', icon: <FaNetworkWired className="text-blue-600 text-4xl" /> },
    { name: 'Operating Systems & Software', icon: <FaDesktop className="text-blue-600 text-4xl" /> },
    { name: 'Customer Support', icon: <FaHeadset className="text-blue-600 text-4xl" /> },
    { name: 'Cloud Computing', icon: <FaCloud className="text-blue-600 text-4xl" /> },
    { name: 'Programming Languages', icon: <FaCode className="text-blue-600 text-4xl" /> },
    { name: 'Web Frameworks', icon: <FaReact className="text-blue-600 text-4xl" /> },
    { name: 'Backend Technologies', icon: <FaServer className="text-blue-600 text-4xl" /> },
    { name: 'DevSecOps', icon: <FaLock className="text-blue-600 text-4xl" /> },
    { name: 'Technical Skills', icon: <FaTools className="text-blue-600 text-4xl" /> },
    { name: 'Human-Computer Interaction', icon: <FaUserAlt className="text-blue-600 text-4xl" /> },
    { name: 'Networking Protocols', icon: <FaSitemap className="text-blue-600 text-4xl" /> }
  ];

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
        ease: 'easeOut',
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <div id="skills" className="p-4 md:p-8 min-h-screen flex flex-col items-center" ref={containerRef}>
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Skills</h2>
        <p className="text-base md:text-lg">
          Here are some of the skills I've developed throughout my career.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform transition-transform hover:scale-105"
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={itemVariants}
            transition={{ delay: index * 0.2 }}
          >
            <div className="mb-4">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
