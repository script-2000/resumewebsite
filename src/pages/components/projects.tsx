import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Project One',
    description: 'A responsive web application built with React and Tailwind CSS, featuring dynamic content and user interactions.',
    link: 'https://example.com/project-one',
    image: 'https://via.placeholder.com/600x400?text=Project+One' // Replace with actual image URL
  },
  {
    title: 'Project Two',
    description: 'An e-commerce site developed using Next.js and Stripe for seamless payments and product management.',
    link: 'https://example.com/project-two',
    image: 'https://via.placeholder.com/600x400?text=Project+Two' // Replace with actual image URL
  },
  {
    title: 'Project Three',
    description: 'A personal portfolio website showcasing various projects, built with Gatsby and GraphQL for fast performance.',
    link: 'https://example.com/project-three',
    image: 'https://via.placeholder.com/600x400?text=Project+Three' // Replace with actual image URL
  }
];

function Projects() {
  const { ref: containerRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
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
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Projects</h2>
        <p className="text-base md:text-lg">
          Here are some of the projects I've worked on. Each project showcases my skills and expertise.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-base text-gray-600 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
