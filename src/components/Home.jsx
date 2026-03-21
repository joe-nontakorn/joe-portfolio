/* eslint-disable no-unused-vars */
// Home.jsx — MATRIX THEME
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import me from "../assets/me/65887.jpg";
import jastel from "../assets/logoCompany/jastel.png";
import vansales from "../assets/logoCompany/vansales.png";
import nsm from "../assets/logoCompany/NSM.png";
import jas from "../assets/logoCompany/logo-orange.svg";
import Card from "./Card";

function Home() {
  const fullText = "> hello_world.exe";
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typing);
        setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 500);
      }
    }, 100);

    return () => clearInterval(typing);
  }, []);

  return (
    <section id="home" className="home-section">
      <h1 className="text-green-400 text-lg md:text-2xl lg:text-3xl font-bold font-matrix neon-green-subtle">
        {text}
        <span className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}>
          █
        </span>
      </h1>
      <br />
      <br />
      {/* Container layout */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-auto"
        >
          <Card className="md:h-[520px] text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="flex flex-col items-center justify-start h-full pt-4"
            >
              <div className="w-44 h-44 mb-4 rounded-full overflow-hidden border-4 border-green-500 shadow-[0_0_20px_rgba(0,255,65,0.4)]">
                <img
                  src={me}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-green-400 neon-green-subtle">
                Nontakorn Khanaphol
              </h2>
              <p className="text-green-300/70 mt-1 text-center break-words font-matrix text-sm">
                Age : 28 years old <br />
                Nationality : Thai <br />
                Tel : 090-9319022 <br />
                Email : nontakorn.joe01@gmail.com
              </p>
            </motion.div>
          </Card>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-auto"
        >
          <Card className="w-full max-w-[840px] h-auto md:h-[300px] flex flex-col justify-start items-start p-6">
            <div className="text-green-300/80 space-y-2 w-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                <p className="mb-1 text-green-500/80 font-matrix">
                  {"//"} Hello There!
                </p>
                <br />
                <h1 className="text-2xl md:text-4xl font-semibold text-green-400">
                  I'm Nontakorn Khanaphol, an IT engineer specializing in
                  infrastructure systems.
                </h1>
                <br />
                <p className="font-matrix text-green-300/70">
                  I am highly interested in pursuing a career in roles such as
                  Cloud Engineer, DevOps Engineer, System Engineer, IT
                  Infrastructure Specialist, and Backend Developer.
                </p>
              </motion.div>
            </div>
          </Card>

          <br />

          {/* Company Logos Card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-auto"
          >
            <Card className="w-full max-w-[840px] h-auto md:h-[200px] flex flex-col items-start p-6 overflow-hidden">
              <div className="text-green-300/80 space-y-2 w-full">
                <p className="mb-1 text-xl font-semibold text-green-400">
                  Companies I have worked with
                </p>

                <div className="relative w-full overflow-hidden mt-4">
                  <motion.div
                    className="flex gap-16 w-max"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 18,
                      ease: "linear",
                    }}
                  >
                    <div className="flex gap-16 items-center">
                      <img
                        src={nsm}
                        alt="NSM"
                        className="w-[80px] h-[80px] md:w-[100px] md:h-[100px] hover:scale-105 transition"
                      />
                      <img
                        src={vansales}
                        alt="Vansales"
                        className="w-[200px] h-[80px] md:w-[300px] md:h-[100px] hover:scale-105 transition"
                      />
                      <img
                        src={jastel}
                        alt="Jastel"
                        className="w-[180px] h-[80px] md:w-[280px] md:h-[100px] hover:scale-105 transition"
                      />
                      <img
                        src={jas}
                        alt="JAS"
                        className="w-[180px] h-[80px] md:w-[280px] md:h-[100px] hover:scale-105 transition"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
