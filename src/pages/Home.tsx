import Footer from "./components/footer";
import Languages from "./components/languages";
import Projects from "./components/projects";
import Skills from "./components/skills";

function HomePage() {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll no-scrollbar">
        <section className="snap-start h-screen flex flex-col justify-center items-center">
          <div className="sm:max-w-5xl mx-auto sm:p-6 lg:p-8 sm:mt-[30px] flex flex-col sm:flex-row items-center justify-center">
            <h1 className="lg:text-[3rem] sm:text-[2.25rem] font-[700] text-center sm:mr-6">
              Empowering Technology, Enhancing Security, and Innovating
              Solutions Across IT, Cloud, DevOps, Blockchain, and Web
              Development
            </h1>
            <img
              src="/resumewebsite/mypic.jpg"
              className="h-[23rem] max-w-[23rem] rounded-3xl mt-6 sm:mt-0"
            />
          </div>
        </section>
        <section id="programing-languages" className="snap-start">
          <Languages />
        </section>
        <section id="skills" className="snap-start">
          <Skills />
        </section>
        <section id="projects" className="snap-start">
          <Projects />
        </section>
        <section className="snap-start">
          <Footer />
        </section>
      </div>
    </>
  );
}

export default HomePage;
