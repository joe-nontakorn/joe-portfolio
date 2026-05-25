/* eslint-disable no-unused-vars */
// GitHubContributions.jsx — GitHub Contribution Calendar
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { FiGithub } from "react-icons/fi";
import Card from "./Card";

function GitHubContributions() {
  const GITHUB_USERNAME = "joe-nontakorn";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for animation purposes
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleColorMap = (count) => {
    // Custom color mapping to match Dark Luxury Gold theme
    if (count === 0) return "var(--text-muted)";
    if (count < 5) return "rgba(197, 168, 128, 0.3)";
    if (count < 10) return "rgba(197, 168, 128, 0.5)";
    if (count < 20) return "rgba(197, 168, 128, 0.7)";
    return "var(--accent)";
  };

  const theme = {
    light: ["var(--bg-secondary)", "rgba(197, 168, 128, 0.3)", "rgba(197, 168, 128, 0.5)", "rgba(197, 168, 128, 0.7)", "var(--accent)"],
    dark: ["var(--bg-secondary)", "rgba(197, 168, 128, 0.3)", "rgba(197, 168, 128, 0.5)", "rgba(197, 168, 128, 0.7)", "var(--accent)"],
  };

  return (
    <section id="contributions" className="scroll-mt-28">
      <div className="mb-12 sm:mb-16 text-center">
        <p className="section-kicker justify-center">Contributions</p>
        <h2
          className="mt-4 text-3xl sm:text-5xl font-bold section-heading"
          style={{ color: "var(--text-primary)" }}
        >
          GitHub <span className="gradient-text">Activity</span>
        </h2>
        <p
          className="mt-3 text-sm sm:text-base"
          style={{ color: "var(--text-secondary)" }}
        >
          Contribution history and commit activity
        </p>
      </div>

      {loading ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center items-center py-12"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="mb-4 inline-block"
            >
              <FiGithub size={32} style={{ color: "var(--accent)" }} />
            </motion.div>
            <p style={{ color: "var(--text-secondary)" }}>
              Loading contribution calendar...
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="p-6 sm:p-8 overflow-x-auto">
            <div className="flex justify-center">
              <div style={{ minWidth: "fit-content" }}>
                <GitHubCalendar
                  username={GITHUB_USERNAME}
                  blockMargin={4}
                  blockSize={12}
                  colorScheme="dark"
                  hideColorLegend={false}
                  fontSize={14}
                  theme={{
                    light: ["var(--bg-secondary)", "rgba(197, 168, 128, 0.3)", "rgba(197, 168, 128, 0.5)", "rgba(197, 168, 128, 0.7)", "var(--accent)"],
                    dark: ["var(--bg-secondary)", "rgba(197, 168, 128, 0.3)", "rgba(197, 168, 128, 0.5)", "rgba(197, 168, 128, 0.7)", "var(--accent)"],
                  }}
                />
              </div>
            </div>
          </Card>
        </motion.div>
      )}
    </section>
  );
}

export default GitHubContributions;
