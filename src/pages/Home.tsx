import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { Box } from "@mui/material";
import Cookies from "js-cookie";
import { useState } from "react";
import Section2 from "./components/section2";
import Skills from "./components/skills";

function HomePage() {
  const [isdarkmode] = useState(() => {
    return Cookies.get("darkmode") === "true";
  });

  const gotoSection2 = () => {
    const section2 = document.getElementById("section2");
    if (section2) {
      section2.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll no-scrollbar">
        <section className="snap-start h-screen flex flex-col justify-center items-center">
          <div className="sm:max-w-5xl mx-auto sm:p-6 lg:p-8 sm:mt-[30px] flex flex-col justify-center">
            <div className="flex items-center justify-evenly gap-4">
              <div className="flex flex-col flex-grow items-center justify-evenly gap-4">
                <h1 className="lg:text-[3rem] sm:text[2.25rem] font-[700] text-center">
                  Building Better Software Writing Better Code Helping Developers
                </h1>
              </div>
              <div>
                <img
                  src="/mypic.jpg"
                  className="h-[23rem] max-w-[23rem] rounded-3xl"
                />
              </div>
            </div>
            <Box
              sx={{
                display: "flex",
                height: "50px",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "150px",
              }}
            >
              <button onClick={gotoSection2}>
                <ArrowCircleDownIcon
                  fontSize="large"
                  sx={{
                    marginTop: "50px",
                    color: isdarkmode ? "black" : "white",
                    backgroundColor: isdarkmode ? "white" : "black",
                    borderRadius: "50%",
                    padding: "10px",
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: isdarkmode ? "#6a4646" : "#f0f0f0",
                      color: isdarkmode ? "white" : "black",
                    },
                  }}
                />
              </button>
            </Box>
          </div>
        </section>
        <section id="section2" className="snap-start">
          <Section2 />
        </section>
        <section id="skills" className="snap-start">
          <Skills />
        </section>
      </div>
    </>
  );
}

export default HomePage;
