/* eslint-disable no-unused-vars */
// Home.jsx — Modern Theme (Responsive + Theme-aware)
import { motion } from "framer-motion";
import me from "../assets/me/65887.jpg";
import jastel from "../assets/logoCompany/jastel.png";
import vansales from "../assets/logoCompany/vansales.png";
import nsm from "../assets/logoCompany/NSM.png";
import jas from "../assets/logoCompany/logo-orange.svg";
import Card from "./Card";

function Home() {
  return (
    <section id="home" className="min-h-[70vh] sm:min-h-[80vh] flex items-center">
      {/* Container layout */}
      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 justify-center items-stretch w-full">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full md:w-[280px] lg:w-[300px] flex-shrink-0"
        >
          <Card className="text-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="flex flex-col items-center justify-start h-full pt-2 sm:pt-4"
            >
              <div
                className="w-32 h-32 sm:w-40 sm:h-40 mb-4 sm:mb-5 rounded-2xl overflow-hidden shadow-lg"
                style={{ border: "2px solid var(--border-color)" }}
              >
                <img
                  src={me}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2
                className="text-xl sm:text-2xl font-bold"
                style={{ color: "var(--text-primary)" }}
              >
                Nontakorn Khanaphol
              </h2>
              <div
                className="mt-3 space-y-1 text-sm"
                style={{ color: "var(--text-secondary)" }}
              >
                <p>📅 Age : 28 years old</p>
                <p>🇹🇭 Nationality : Thai</p>
                <p>📞 Tel : 090-9319022</p>
                <p>✉️ nontakorn.joe01@gmail.com</p>
              </div>
            </motion.div>
          </Card>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="w-full flex-1 flex flex-col gap-6"
        >
          <Card className="w-full h-auto flex flex-col justify-start items-start p-4 sm:p-6">
            <div className="space-y-4 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                <span className="chip">👋 Hello There!</span>
                <h1
                  className="text-2xl sm:text-3xl md:text-4xl font-bold mt-4 sm:mt-5 leading-tight section-heading"
                  style={{ color: "var(--text-primary)" }}
                >
                  I'm Nontakorn Khanaphol,{" "}
                  <br className="hidden md:block" />
                  <span className="gradient-text">an IT engineer</span>{" "}
                  specializing in infrastructure systems.
                </h1>
                <p
                  className="mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base"
                  style={{ color: "var(--text-secondary)" }}
                >
                  I am highly interested in pursuing a career in roles such as
                  Cloud Engineer, DevOps Engineer, System Engineer, IT
                  Infrastructure Specialist, and Backend Developer.
                </p>
              </motion.div>
            </div>
          </Card>

          {/* Company Logos Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            className="w-full"
          >
            <Card className="w-full h-auto flex flex-col items-start p-4 sm:p-6 overflow-hidden">
              <div className="space-y-3 sm:space-y-4 w-full">
                <p
                  className="text-base sm:text-lg font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Companies I have worked with
                </p>

                <div className="relative w-full overflow-hidden mt-2">
                  <motion.div
                    className="flex gap-8 sm:gap-16 w-max"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 18,
                      ease: "linear",
                    }}
                  >
                    <div className="flex gap-8 sm:gap-16 items-center">
                      <img
                        src={nsm}
                        alt="NSM"
                        className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] hover:scale-105 transition rounded-lg p-2"
                        style={{ background: "var(--logo-bg)" }}
                      />
                      <img
                        src={vansales}
                        alt="Vansales"
                        className="w-[150px] h-[60px] sm:w-[200px] sm:h-[80px] md:w-[300px] md:h-[100px] hover:scale-105 transition rounded-lg p-2"
                        style={{ background: "var(--logo-bg)" }}
                      />
                      <img
                        src={jastel}
                        alt="Jastel"
                        className="w-[140px] h-[60px] sm:w-[180px] sm:h-[80px] md:w-[280px] md:h-[100px] hover:scale-105 transition rounded-lg p-2"
                        style={{ background: "var(--logo-bg)" }}
                      />
                      <img
                        src={jas}
                        alt="JAS"
                        className="w-[140px] h-[60px] sm:w-[180px] sm:h-[80px] md:w-[280px] md:h-[100px] hover:scale-105 transition rounded-lg p-2"
                        style={{ background: "var(--logo-bg)" }}
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
