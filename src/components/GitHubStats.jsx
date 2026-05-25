/* eslint-disable no-unused-vars */
// GitHubStats.jsx — Live GitHub Statistics & Contribution Calendar with Dark Luxury Gold Theme
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiGithub, FiStar, FiUsers, FiCode } from "react-icons/fi";
import { GitHubCalendar } from "react-github-calendar";
import Card from "./Card";

function GitHubStats() {
  const GITHUB_USERNAME = "joe-nontakorn";
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);

        // Fetch user profile
        const userRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`,
        );
        if (!userRes.ok) throw new Error("Failed to fetch user profile");
        const userData = await userRes.json();

        // Fetch repositories
        const reposRes = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=pushed&type=owner`,
        );
        if (!reposRes.ok) throw new Error("Failed to fetch repositories");
        const reposData = await reposRes.json();

        // Aggregate languages
        const langStats = {};
        for (const repo of reposData) {
          if (repo.language) {
            langStats[repo.language] =
              (langStats[repo.language] || 0) + repo.size;
          }
        }

        setStats({
          repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          name: userData.name,
          avatar: userData.avatar_url,
          bio: userData.bio,
          location: userData.location,
        });

        // Get top 4 repos by stars
        const topRepos = reposData
          .filter((r) => !r.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 4);

        setRepos(topRepos);
        setLanguages(langStats);
        setError(null);
      } catch (err) {
        console.error("GitHub API Error:", err.message);
        setError(err.message);
        // Fallback data
        setStats({
          repos: 12,
          followers: 8,
          following: 15,
          name: "Nontakorn Khanapol",
          avatar: "",
          bio: "DevOps Engineer • Cloud Infrastructure",
          location: "Bangkok, Thailand",
        });
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  // Calculate total stars
  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);

  // Get top languages
  const topLanguages = Object.entries(languages)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([lang]) => lang);

  // Format date to relative time
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const days = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    if (days === 0) return "today";
    if (days === 1) return "yesterday";
    if (days < 7) return `${days}d ago`;
    if (days < 30) return `${Math.floor(days / 7)}w ago`;
    if (days < 365) return `${Math.floor(days / 30)}mo ago`;
    return `${Math.floor(days / 365)}y ago`;
  };

  return (
    <section id="github" className="scroll-mt-28">
      <div className="mb-12 sm:mb-16 text-center">
        <p className="section-kicker justify-center">Open Source</p>
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
          Public repositories and contributions
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
              Fetching GitHub data...
            </p>
          </div>
        </motion.div>
      ) : (
        <>
          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-10 sm:mb-12"
          >
            <Card className="p-6 sm:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                {/* Repos Stat */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div
                    className="inline-block mb-3 p-3 rounded-lg"
                    style={{
                      background: "rgba(197, 168, 128, 0.1)",
                      color: "var(--accent)",
                    }}
                  >
                    <FiCode size={24} />
                  </div>
                  <p
                    className="text-2xl sm:text-3xl font-bold section-heading"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {stats?.repos || 0}
                  </p>
                  <p
                    className="text-xs sm:text-sm font-semibold mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Repositories
                  </p>
                </motion.div>

                {/* Stars Stat */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div
                    className="inline-block mb-3 p-3 rounded-lg"
                    style={{
                      background: "rgba(197, 168, 128, 0.1)",
                      color: "var(--accent)",
                    }}
                  >
                    <FiStar size={24} />
                  </div>
                  <p
                    className="text-2xl sm:text-3xl font-bold section-heading"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {totalStars}
                  </p>
                  <p
                    className="text-xs sm:text-sm font-semibold mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Total Stars
                  </p>
                </motion.div>

                {/* Followers Stat */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div
                    className="inline-block mb-3 p-3 rounded-lg"
                    style={{
                      background: "rgba(197, 168, 128, 0.1)",
                      color: "var(--accent)",
                    }}
                  >
                    <FiUsers size={24} />
                  </div>
                  <p
                    className="text-2xl sm:text-3xl font-bold section-heading"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {stats?.followers || 0}
                  </p>
                  <p
                    className="text-xs sm:text-sm font-semibold mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Followers
                  </p>
                </motion.div>

                {/* Languages Stat */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div
                    className="inline-block mb-3 p-3 rounded-lg"
                    style={{
                      background: "rgba(197, 168, 128, 0.1)",
                      color: "var(--accent)",
                    }}
                  >
                    <FiCode size={24} />
                  </div>
                  <p
                    className="text-2xl sm:text-3xl font-bold section-heading"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {Object.keys(languages).length}
                  </p>
                  <p
                    className="text-xs sm:text-sm font-semibold mt-1"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Languages
                  </p>
                </motion.div>
              </div>

              {/* Top Languages */}
              {topLanguages.length > 0 && (
                <div
                  className="mt-8 pt-8 border-t"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-wide mb-4"
                    style={{ color: "var(--accent)" }}
                  >
                    Top Languages
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {topLanguages.map((lang, idx) => (
                      <motion.span
                        key={lang}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                        className="chip"
                        style={{
                          background: "rgba(197, 168, 128, 0.1)",
                          color: "var(--accent)",
                          border: "1px solid rgba(197, 168, 128, 0.3)",
                        }}
                      >
                        {lang}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          </motion.div>

          {/* Top Repositories */}
          {repos.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3
                className="text-lg sm:text-xl font-bold mb-6 section-heading"
                style={{ color: "var(--text-primary)" }}
              >
                Top Repositories
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {repos.map((repo, idx) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4 }}
                    className="group"
                  >
                    <Card className="h-full p-5 sm:p-6 flex flex-col hover:bg-[rgba(197,168,128,0.08)] transition-colors">
                      {/* Repo Name */}
                      <h4
                        className="text-base sm:text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors section-heading"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {repo.name}
                      </h4>

                      {/* Description */}
                      {repo.description && (
                        <p
                          className="text-xs sm:text-sm mb-4 flex-grow line-clamp-2"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {repo.description}
                        </p>
                      )}

                      {/* Repo Meta */}
                      <div className="flex flex-wrap gap-3 items-center text-xs">
                        {/* Language */}
                        {repo.language && (
                          <div className="flex items-center gap-1">
                            <span
                              className="w-2 h-2 rounded-full"
                              style={{ background: "var(--accent)" }}
                            />
                            <span style={{ color: "var(--text-muted)" }}>
                              {repo.language}
                            </span>
                          </div>
                        )}

                        {/* Stars */}
                        <div
                          className="flex items-center gap-1"
                          style={{ color: "var(--text-muted)" }}
                        >
                          <FiStar
                            size={14}
                            style={{ color: "var(--accent)" }}
                          />
                          <span>{repo.stargazers_count}</span>
                        </div>

                        {/* Updated */}
                        <span
                          className="ml-auto"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {formatDate(repo.pushed_at)}
                        </span>
                      </div>
                    </Card>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}

          {/* Contribution Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12"
          >
            <h3
              className="text-lg sm:text-xl font-bold mb-6 section-heading"
              style={{ color: "var(--text-primary)" }}
            >
              Contribution History
            </h3>
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
                      light: [
                        "var(--bg-secondary)",
                        "rgba(197, 168, 128, 0.3)",
                        "rgba(197, 168, 128, 0.5)",
                        "rgba(197, 168, 128, 0.7)",
                        "var(--accent)",
                      ],
                      dark: [
                        "var(--bg-secondary)",
                        "rgba(197, 168, 128, 0.3)",
                        "rgba(197, 168, 128, 0.5)",
                        "rgba(197, 168, 128, 0.7)",
                        "var(--accent)",
                      ],
                    }}
                  />
                </div>
              </div>
            </Card>
            {/* View More Link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 text-center"
            >
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <FiGithub size={18} />
                View All on GitHub
              </a>
            </motion.div>
          </motion.div>
        </>
      )}
    </section>
  );
}

export default GitHubStats;
