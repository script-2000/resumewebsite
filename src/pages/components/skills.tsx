import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  {
    name: "Full Stack Developer",
    icon: "/fullstack.webp",
    description:
      "Throughout my career as a Full Stack Developer, I have been using a bunch of overlapping skills that help me to handle both the front-end and back-end of a web application. This includes (UX) user interface design, building and maintaining micro to large scale databases plus creating rich internet APIs and integrating various services such as payment systems, email clients, messenger systems etc. into applications which serve multiple purposes and are most efficient. Building web applications involves the use of many different languages and frameworks that enable me come up with specific solutions tailored for every project.",
  },
  {
    name: "DevSecOps Engineer",
    icon: "/devsecops.png",
    description:
      "I adopt security at every stage of software development – from planning, coding and testing as well as deployment. Automation with continuous monitoring is important in safeguarding against any attacks on applications or infrastructure. My emphasis when developing software lies on secure coding practices, threat modelling and compliance standards, leading to strong, reliable and secure systems.",
  },
  {
    name: "System Hardening & Cyber Security",
    icon: "/hardening.png",
    description:
      "System Hardening and Cyber Security work hand in hand to safeguard computer systems and networks. System Hardening focuses on reducing vulnerabilities by configuring systems to minimize risks, applying security patches, and disabling unnecessary services. Cyber Security encompasses a broader range of practices, including threat detection, response strategies, and implementing defensive measures to protect against cyber threats and unauthorized access. Together, these approaches fortify the infrastructure, ensuring a robust defense against potential attacks and enhancing the overall security posture.",
  },
  {
    name: "Cloud Computing",
    icon: "/cloud.jpg",
    description:
      "Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet  to offer faster innovation, flexible resources, and economies of scale. I have experience in cloud computing services such as Amazon Web Services , Microsoft Azure. I have worked on cloud-based projects that involve cloud storage, cloud security, cloud migration, cloud networking, and cloud monitoring.",
  },
  {
    name: "IT Support",
    icon: "/support.jpg",
    description:
      "I provide technical support to users who need assistance with their computer hardware or software. I am able to troubleshoot and diagnose computer problems, install software and hardware, and maintain computer systems. I am also able to provide support for network issues, including setting up and maintaining network connections and troubleshooting network problems.",
  },
];

function Section2() {
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div
      id="section2"
      className="max-w-4xl mx-auto min-h-screen flex flex-col justify-center px-4 md:px-8"
      ref={containerRef}
    >
      <motion.div
        className="flex flex-col items-center justify-center space-y-8 mt-6"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="text-center" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 gap-4 sm:gap-6 md:gap-8 w-full"
          variants={itemVariants}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-4 sm:p-6"
              variants={itemVariants}
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={skill.icon}
                className="rounded-lg h-[80px] sm:h-[100px] mb-4"
              />
              <div className="text-center">
                <h3 className="font-bold text-lg mb-2 text-gray-600">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Section2;
