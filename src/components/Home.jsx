/* eslint-disable no-unused-vars */
// Home.jsx - Dark Luxury Gold Bento Grid Layout
import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCalendar,
  FiGlobe,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSettings,
} from "react-icons/fi";
import me from "../assets/me/65887.jpg";
import jastel from "../assets/logoCompany/jastel.png";
import vansales from "../assets/logoCompany/vansales.png";
import nsm from "../assets/logoCompany/NSM.png";
import jas from "../assets/logoCompany/logo-orange.svg";
import Card from "./Card";

function Home() {
  const profileDetails = [
    { icon: <FiCalendar size={17} />, label: "Age", value: "29" },
    { icon: <FiGlobe size={17} />, label: "Nationality", value: "Thai" },
    {
      icon: <FiPhone size={17} />,
      label: "Tel",
      value: "090-9319022",
      href: "tel:0909319022",
    },
    {
      icon: <FiMail size={17} />,
      label: "Email",
      value: "nontakorn.joe01@gmail.com",
      href: "mailto:nontakorn.joe01@gmail.com",
    },
  ];

  const focusAreas = [
    "Cloud Engineer",
    "DevOps Engineer",
    "System Engineer",
    "IT Infrastructure Specialist",
    "Backend Developer",
  ];

  const companyLogos = [
    { src: nsm, alt: "NSM" },
    { src: vansales, alt: "Vansales" },
    { src: jastel, alt: "Jastel" },
    { src: jas, alt: "JAS" },
  ];

  return (
    <section id="home" className="min-h-[calc(100vh-6rem)] flex items-center py-10 sm:py-14">
      <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 items-stretch">
        {/* LEFT: Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full"
        >
          <Card className="h-full flex flex-col p-6 sm:p-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.18 }}
              className="flex flex-col items-center text-center"
            >
              {/* Profile Image with Gold Frame */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-6">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "conic-gradient(from 0deg, var(--accent), var(--accent-2), var(--accent))",
                    padding: "3px",
                  }}
                >
                  <div className="w-full h-full rounded-full bg-[#1a1c20] p-1 overflow-hidden">
                    <img
                      src={me}
                      alt="Nontakorn Khanapol"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Name */}
              <h2
                className="mt-6 text-2xl sm:text-3xl font-bold section-heading"
                style={{ color: "var(--text-primary)" }}
              >
                Nontakorn
                <br />
                Khanapol
              </h2>

              {/* Details */}
              <div className="mt-6 w-full space-y-2">
                {profileDetails.map((item) => {
                  const content = (
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xs font-semibold uppercase" style={{ color: "var(--text-muted)" }}>
                        {item.label}
                      </span>
                      <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                        {item.value}
                      </span>
                    </div>
                  );

                  return (
                    <div key={item.label} className="py-2">
                      {content}
                    </div>
                  );
                })}
              </div>

              {/* Location Badge */}
              <div className="fine-panel mt-6 w-full p-3">
                <p className="text-xs font-semibold uppercase" style={{ color: "var(--text-muted)" }}>
                  Location
                </p>
                <p className="text-sm font-semibold mt-1" style={{ color: "var(--text-primary)" }}>
                  Bangkok, Thailand
                </p>
              </div>
            </motion.div>
          </Card>
        </motion.div>

        {/* CENTER: Main Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="md:col-span-1 w-full"
        >
          <Card className="flex flex-col h-full p-6 sm:p-8 md:p-10 justify-between">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.28 }}
            >
              <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--accent)" }}>
                Welcome
              </p>
              <h1
                className="mt-4 text-2xl sm:text-4xl font-bold section-heading leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Hello! I'm{" "}
                <span className="bg-gradient-to-r from-[#dfc299] via-[#c5a880] to-[#9a7b56] bg-clip-text text-transparent">
                  Nontakorn Khanapol
                </span>
                .
              </h1>
              <p className="mt-4 text-base sm:text-lg font-semibold" style={{ color: "var(--text-secondary)" }}>
                An{" "}
                <span className="bg-gradient-to-r from-[#dfc299] via-[#c5a880] to-[#9a7b56] bg-clip-text text-transparent">
                  IT Engineer
                </span>
                , specializing in{" "}
                <span className="bg-gradient-to-r from-[#dfc299] via-[#c5a880] to-[#9a7b56] bg-clip-text text-transparent">
                  Infrastructure Systems
                </span>
                .
              </p>
            </motion.div>

            {/* Passion & Focus Section */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.36 }}
              className="mt-8"
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
                My Passion & Future Focus
              </p>
              <div className="space-y-3">
                {focusAreas.map((area) => (
                  <div key={area} className="flex items-center gap-3">
                    <FiSettings size={16} style={{ color: "var(--accent)" }} />
                    <span className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.44 }}
              className="flex flex-col gap-3 mt-8"
            >
              <a href="#projects" className="btn-primary flex justify-center">
                View Projects
                <FiArrowUpRight size={18} />
              </a>
              <a
                href="#contact"
                className="contact-row justify-center px-4 py-3 font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Get In Touch
                <FiArrowUpRight size={17} />
              </a>
            </motion.div>
          </Card>
        </motion.div>

        {/* RIGHT: Companies */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.24 }}
          className="w-full"
        >
          <Card className="h-full flex flex-col p-6 sm:p-8">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.36 }}
              className="flex flex-col"
            >
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
                Experience
              </p>
              <h3
                className="mt-3 text-lg sm:text-xl font-bold section-heading"
                style={{ color: "var(--text-primary)" }}
              >
                Companies I have partnered with
              </h3>

              {/* Company Logos Grid */}
              <div className="mt-8 space-y-4">
                {companyLogos.map((logo) => (
                  <div
                    key={logo.alt}
                    className="logo-tile flex items-center justify-center h-20 sm:h-24 px-4 py-3"
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-auto h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;