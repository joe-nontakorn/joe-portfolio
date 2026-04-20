/* eslint-disable no-unused-vars */
// Projects.jsx — Modern Theme (Responsive + Theme-aware)
import { motion } from "framer-motion";
import Card from "./Card";
import {
  FaServer,
  FaNetworkWired,
  FaDatabase,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNginx,
  SiGitlab,
} from "react-icons/si";
import {
  MdMonitor,
  MdNotificationsActive,
  MdSpeed,
  MdSecurity,
  MdOutlineSensors,
} from "react-icons/md";

function Projects() {
  const techStack = [
    { name: "Node.js", icon: <FaNodeJs size={28} /> },
    { name: "React", icon: <FaReact size={28} /> },
    { name: "MongoDB", icon: <SiMongodb size={28} /> },
    { name: "Nginx", icon: <SiNginx size={28} /> },
    { name: "GitLab CI", icon: <SiGitlab size={28} /> },
  ];

  const features = [
    {
      icon: <MdMonitor size={24} />,
      title: "Real-time Monitoring",
      desc: "ตรวจสอบสถานะอุปกรณ์จากศูนย์กลางแบบเรียลไทม์",
    },
    {
      icon: <MdNotificationsActive size={24} />,
      title: "Auto Alert System",
      desc: "แจ้งเตือนอัตโนมัติเมื่ออุปกรณ์มีปัญหา",
    },
    {
      icon: <MdSpeed size={24} />,
      title: "Reduce Downtime",
      desc: "ลดโอกาสเกิด Downtime ของโครงข่าย",
    },
    {
      icon: <MdOutlineSensors size={24} />,
      title: "Multi-Protocol",
      desc: "รองรับ Modbus, SNMP, Ping ในระบบเดียว",
    },
  ];

  const monitoringDevices = [
    "CCTV",
    "Temperature & Humidity",
    "Rectifier",
    "Generator",
    "Battery",
    "Smoke Detector",
    "Door Sensor",
    "AC System",
  ];

  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 gradient-text section-heading">
        Projects
      </h2>

      {/* Global CI/CD Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto mb-10 sm:mb-12"
      >
        <div
          className="rounded-xl p-4 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
          style={{
            background: "var(--bg-secondary)",
            border: "1px solid var(--border-color)",
          }}
        >
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-xl"
            style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
          >
            🚀
          </div>
          <div>
            <h4
              className="text-base sm:text-lg font-semibold mb-1"
              style={{ color: "var(--text-primary)" }}
            >
              DevOps & CI/CD Standard
            </h4>
            <p className="text-sm sm:text-base" style={{ color: "var(--text-secondary)" }}>
              ทุกโปรเจคของผมมีขั้นตอนการ Deploy ผ่าน <strong>CI/CD Pipeline</strong> อัตโนมัติด้วย{" "}
              <strong style={{ color: "var(--accent)" }}>GitLab CI, GitLab Runner</strong> และ{" "}
              <strong style={{ color: "var(--accent)" }}>Docker</strong>{" "}
              รวมถึงการทำ Test และ Build ครบถ้วน เพื่อให้ระบบมีความเสถียรเสมอ
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main Project Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Card className="w-full overflow-hidden">
          {/* Project Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="chip">🏢 Jastel Network</span>
                <span className="chip" style={{ background: "rgba(34,197,94,0.1)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.2)" }}>
                  ✅ Production
                </span>
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold mt-3 section-heading"
                style={{ color: "var(--text-primary)" }}
              >
                Centralized Monitoring Facility System
              </h3>
              <p
                className="text-sm sm:text-base mt-1"
                style={{ color: "var(--text-secondary)" }}
              >
                ระบบมอนิเตอร์อุปกรณ์สำคัญในโครงข่ายโทรคมนาคมจากศูนย์กลาง
              </p>
            </div>
          </div>

          {/* Background & Problem */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className="rounded-xl p-4 sm:p-5 mb-5"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
              }}
            >
              <h4
                className="text-base sm:text-lg font-semibold mb-3 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                💡 ที่มาของโครงการ
              </h4>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                พัฒนาระบบ Centralized Monitoring เพื่อรวมการมอนิเตอร์อุปกรณ์โครงข่ายโทรคมนาคมหลายสิบ Node
                ซึ่งเดิมต้องเข้าดูสถานะจากหลายระบบแยกกัน ทำให้ไม่สะดวก
                จึงรวมข้อมูลทั้งหมดไว้ใน Dashboard เดียว
                เพื่อช่วยตรวจสอบสถานะได้รวดเร็วและมีประสิทธิภาพ
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4
              className="text-base sm:text-lg font-semibold mb-4 flex items-center gap-2"
              style={{ color: "var(--text-primary)" }}
            >
              ⚡ ฟีเจอร์หลัก
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-4 transition-all duration-200"
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--accent-soft)", color: "var(--accent)" }}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h5
                        className="font-semibold text-sm sm:text-base"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {feature.title}
                      </h5>
                      <p className="text-xs sm:text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* System Architecture Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div
              className="rounded-xl p-4 sm:p-5 mb-5"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
              }}
            >
              <h4
                className="text-base sm:text-lg font-semibold mb-3 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                🏗️ System Architecture
              </h4>
              <p
                className="text-sm sm:text-base leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                ระบบเชื่อมต่ออุปกรณ์ผ่านหลายโปรโตคอล (Modbus, SNMP, Ping)
                ส่งข้อมูลผ่าน Internet Gateway มายัง Backend (Node.js)
                จัดเก็บลง MongoDB แล้วแสดงผลบน Web Browser ผ่าน API
              </p>

              {/* Architecture Flow */}
              <div className="flex flex-wrap gap-2 items-center justify-center">
                {[
                  { label: "Sensors", sub: "Modbus" },
                  { label: "→" },
                  { label: "Gateway", sub: "XML/SNMP" },
                  { label: "→" },
                  { label: "Node.js", sub: "Backend" },
                  { label: "→" },
                  { label: "MongoDB", sub: "Database" },
                  { label: "→" },
                  { label: "React", sub: "Frontend" },
                ].map((item, idx) =>
                  item.sub ? (
                    <div
                      key={idx}
                      className="rounded-lg px-3 py-2 text-center text-xs sm:text-sm"
                      style={{
                        background: "var(--accent-soft)",
                        border: "1px solid rgba(129, 140, 248, 0.2)",
                        color: "var(--accent)",
                      }}
                    >
                      <div className="font-semibold">{item.label}</div>
                      <div className="text-[10px] sm:text-xs opacity-70">{item.sub}</div>
                    </div>
                  ) : (
                    <span
                      key={idx}
                      className="text-lg font-bold"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.label}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Monitored Devices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            viewport={{ once: true }}
          >
            <h4
              className="text-base sm:text-lg font-semibold mb-3 flex items-center gap-2"
              style={{ color: "var(--text-primary)" }}
            >
              📡 Monitored Devices
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {monitoringDevices.map((device, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium"
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {device}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4
              className="text-base sm:text-lg font-semibold mb-4 flex items-center gap-2"
              style={{ color: "var(--text-primary)" }}
            >
              🛠️ Technology Stack
            </h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-2 rounded-xl px-4 py-3 transition-all duration-200"
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <div style={{ color: "var(--accent)" }}>{tech.icon}</div>
                  <span className="text-xs sm:text-sm font-medium">{tech.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </Card>
      </motion.div>

      {/* Spacer between projects */}
      <div className="mt-6 sm:mt-8" />

      {/* Project 2: LINE AI IT Support */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Card className="w-full overflow-hidden">
          {/* Project Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="chip">🏢 Jastel Network</span>
                <span className="chip" style={{ background: "rgba(34,197,94,0.1)", color: "#22c55e", border: "1px solid rgba(34,197,94,0.2)" }}>
                  ✅ Production
                </span>
              </div>
              <h3
                className="text-xl sm:text-2xl font-bold mt-3 section-heading"
                style={{ color: "var(--text-primary)" }}
              >
                LINE AI IT Support
              </h3>
              <p
                className="text-sm sm:text-base mt-1"
                style={{ color: "var(--text-secondary)" }}
              >
                ระบบซัพพอร์ต IT อัจฉริยะผ่าน LINE Bot ร่วมกับ Google Gemini AI
              </p>
            </div>
          </div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div
              className="rounded-xl p-4 sm:p-5 mb-5"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
              }}
            >
              <h4
                className="text-base sm:text-lg font-semibold mb-3 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                💡 ภาพรวมระบบ
              </h4>
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                บริการซัพพอร์ต IT ด้วย AI โดยตรงภายในแอป LINE ซึ่งเป็นแพลตฟอร์มที่ผู้ใช้คุ้นเคยอยู่แล้ว
                ใช้ Google Gemini AI เพื่อทำความเข้าใจ วินิจฉัย
                และตอบสนองต่อปัญหา IT อย่างชาญฉลาด
                พร้อมเชื่อมต่อกับ API ข้อมูล Asset ภายในองค์กร
                ทำให้ผู้ใช้สามารถเช็คข้อมูลอุปกรณ์ของตัวเองได้ง่ายๆ แค่ถาม AI ใน LINE
                รวมถึงช่วยแก้ไขปัญหาด้วยตนเองผ่านคำแนะนำแบบเป็นขั้นตอน
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4
              className="text-base sm:text-lg font-semibold mb-4 flex items-center gap-2"
              style={{ color: "var(--text-primary)" }}
            >
              ⚡ คุณสมบัติหลัก
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
              {[
                {
                  icon: "🤖",
                  title: "การวินิจฉัยด้วย AI",
                  desc: "เข้าใจและวินิจฉัยปัญหา IT ด้วยภาษาธรรมชาติ",
                },
                {
                  icon: "📋",
                  title: "คำแนะนำแบบทีละขั้นตอน",
                  desc: "พาผู้ใช้ผ่านขั้นตอนการแก้ไขปัญหาที่ชัดเจนและเป็นระบบ",
                },
                {
                  icon: "⭐",
                  title: "ระบบให้คะแนน",
                  desc: "ผู้ใช้ให้คะแนนคุณภาพการสนับสนุนระดับ 1-5 เพื่อการปรับปรุงต่อเนื่อง",
                },
                {
                  icon: "🎫",
                  title: "สร้างทิกเก็ตอัตโนมัติ",
                  desc: "สร้าง Ticket (TIC-XXXX) อัตโนมัติเมื่อ AI ไม่สามารถแก้ไขปัญหาได้",
                },
                {
                  icon: "🔍",
                  title: "ตรวจสอบอุปกรณ์",
                  desc: "ดึงข้อมูลอุปกรณ์และทรัพย์สินแบบเรียลไทม์เพื่อช่วยในการวินิจฉัย",
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-4 transition-all duration-200"
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-lg"
                      style={{ background: "var(--accent-soft)" }}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h5
                        className="font-semibold text-sm sm:text-base"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {feature.title}
                      </h5>
                      <p className="text-xs sm:text-sm mt-1" style={{ color: "var(--text-muted)" }}>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* System Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div
              className="rounded-xl p-4 sm:p-5 mb-5"
              style={{
                background: "var(--bg-secondary)",
                border: "1px solid var(--border-color)",
              }}
            >
              <h4
                className="text-base sm:text-lg font-semibold mb-3 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                🏗️ System Architecture
              </h4>
              <p
                className="text-sm sm:text-base leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                ระบบมี 4 ชั้นทำงานร่วมกันเพื่อมอบประสบการณ์การซัพพอร์ตด้วย AI ที่ราบรื่น
              </p>

              {/* 4-Layer Architecture */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  {
                    layer: "1",
                    title: "LINE Bot",
                    desc: "LINE Messaging API รับ-ส่งข้อความกับผู้ใช้งาน",
                  },
                  {
                    layer: "2",
                    title: "Web Server",
                    desc: "Bun.js + Express รับ Webhook, จัดการ routing",
                  },
                  {
                    layer: "3",
                    title: "AI Service",
                    desc: "Google Gemini AI วิเคราะห์ปัญหาและตอบคำถาม",
                  },
                  {
                    layer: "4",
                    title: "Database",
                    desc: "MongoDB จัดเก็บ Users, Conversations, Tickets",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg p-3 text-center"
                    style={{
                      background: "var(--accent-soft)",
                      border: "1px solid rgba(129, 140, 248, 0.2)",
                    }}
                  >
                    <div
                      className="text-[10px] sm:text-xs font-bold mb-1"
                      style={{ color: "var(--accent)" }}
                    >
                      ชั้นที่ {item.layer}
                    </div>
                    <div
                      className="font-semibold text-xs sm:text-sm"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.title}
                    </div>
                    <p
                      className="text-[10px] sm:text-xs mt-1 leading-relaxed"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Technology Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4
              className="text-base sm:text-lg font-semibold mb-4 flex items-center gap-2"
              style={{ color: "var(--text-primary)" }}
            >
              🛠️ Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                "LINE Bot API",
                "Bun.js",
                "Express",
                "Google Gemini AI",
                "MongoDB",
                "Cloudflare",
                "Webhook",
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium"
                  style={{
                    background: "var(--bg-secondary)",
                    border: "1px solid var(--border-color)",
                    color: "var(--text-secondary)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </Card>
      </motion.div>
    </section>
  );
}

export default Projects;
