import { motion } from "framer-motion";
import {
  FaCloud,
  FaCode,
  FaDesktop,
  FaHeadset,
  FaLock,
  FaNetworkWired,
  FaReact,
  FaServer,
  FaSitemap,
  FaTools,
  FaUserAlt,
} from "react-icons/fa";
import { useInView } from "react-intersection-observer";

function Section2() {
  const { ref: containerRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
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

  return (
    <div
      id="section2"
      className="max-w-4xl mx-auto min-h-screen flex flex-col justify-center px-4 md:px-8"
      ref={containerRef}
    >
      <motion.div
        className="flex flex-col items-center justify-center space-y-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="text-center"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-6">
            I am a skilled Software Engineer and Network Administrator with
            years of experience in designing, developing, testing, and deploying
            scalable software solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={itemVariants}
        >
          <div className="flex items-start">
            <FaNetworkWired className="mr-4 text-2xl text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">Networking & Hardware</h3>
              <p>Expertise in network architecture, analysis, and security.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaDesktop className="mr-4 text-2xl text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">Operating Systems & Software</h3>
              <p>Strong knowledge of operating systems, software applications, and networking protocols.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaHeadset className="mr-4 text-2xl text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">Customer Support</h3>
              <p>Proficient in providing comprehensive IT support and customer service.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaCloud className="mr-4 text-2xl text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">Cloud Computing</h3>
              <p>Skilled in AWS, Docker, Jenkins, Heroku, and related tools.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaCode className="mr-4 text-2xl text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">Programming Languages</h3>
              <p>Proficient in JavaScript, Solidity, HTML5, jQuery, CSS3, Python.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaReact className="mr-4 text-2xl text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">Web Frameworks</h3>
              <p>Experienced in React, Vue, Tailwind, Material UI.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaServer className="mr-4 text-2xl text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">Backend Technologies</h3>
              <p>Proficient in Node.js, Express, MongoDB, MySQL.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaLock className="mr-4 text-2xl text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">DevSecOps</h3>
              <p>Skilled in Snyk, Docker, Jenkins, CI/CD.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaTools className="mr-4 text-2xl text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">Technical Skills</h3>
              <p>Skilled in Microsoft Office, IT technical support, risk assessment, and system hardening.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaUserAlt className="mr-4 text-2xl text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">Human-Computer Interaction</h3>
              <p>Knowledgeable in user experience and interface design.</p>
            </div>
          </div>

          <div className="flex items-start">
            <FaSitemap className="mr-4 text-2xl text-blue-600" />
            <div>
              <h3 className="font-semibold text-lg">Networking Protocols</h3>
              <p>Strong knowledge of TCP/IP, DNS, DHCP, and VLANs.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Section2;
