/* eslint-disable no-unused-vars */
// Projects.jsx — DevOps/System Engineering Focus
import { motion } from "framer-motion";
import Card from "./Card";
import {
  FaServer,
  FaNetworkWired,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiKubernetes,
  SiGitlab,
  SiPrometheus,
  SiGrafana,
} from "react-icons/si";
import {
  MdMonitor,
  MdNotificationsActive,
  MdSpeed,
  MdSecurity,
  MdAutoFixHigh,
  MdOutlineStorage,
} from "react-icons/md";

function Projects() {
  const devopsSkills = [
    { name: "Docker", icon: <FaDocker size={24} />, desc: "Container Orchestration" },
    { name: "Kubernetes", icon: <SiKubernetes size={24} />, desc: "Container Management" },
    { name: "CI/CD Pipeline", icon: <SiGitlab size={24} />, desc: "Automated Deployment" },
    { name: "Monitoring", icon: <SiPrometheus size={24} />, desc: "System Observability" },
    { name: "Grafana", icon: <SiGrafana size={24} />, desc: "Visualization & Alerting" },
    { name: "GitOps", icon: <FaGitAlt size={24} />, desc: "Infrastructure as Code" },
  ];

  const features = [
    {
      icon: <MdMonitor size={24} />,
      title: "Real-time Monitoring",
      desc: "ตรวจสอบสถานะระบบและอุปกรณ์จากศูนย์กลางแบบเรียลไทม์ 24/7",
    },
    {
      icon: <MdNotificationsActive size={24} />,
      title: "Auto Alert System",
      desc: "แจ้งเตือนอัตโนมัติเมื่อระบบหรืออุปกรณ์มีปัญหา (Email, SMS, Webhook)",
    },
    {
      icon: <MdSpeed size={24} />,
      title: "Reduce Downtime",
      desc: "ลดโอกาสเกิด Downtime โดยตรวจจับปัญหาก่อนเกิดผลกระทบต่อบริการ",
    },
    {
      icon: <MdAutoFixHigh size={24} />,
      title: "Multi-Protocol Support",
      desc: "รองรับหลายโปรโตคอล (Modbus, SNMP, Ping) ในระบบเดียว",
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

  const lineFeatures = [
    {
      icon: <MdAutoFixHigh size={20} />,
      title: "AI-Powered Diagnosis",
      desc: "วินิจฉัยปัญหา IT อัจฉริยะโดยใช้ Google Gemini AI",
    },
    {
      icon: <MdSpeed size={20} />,
      title: "Step-by-Step Guidance",
      desc: "มอบคำแนะนำการแก้ไขปัญหาแบบเป็นขั้นตอนที่ชัดเจน",
    },
    {
      icon: <MdMonitor size={20} />,
      title: "Automated Ticketing",
      desc: "สร้าง Ticket อัตโนมัติเมื่อ AI ไม่สามารถแก้ไขได้",
    },
    {
      icon: <MdNotificationsActive size={20} />,
      title: "Asset Integration",
      desc: "เชื่อมต่อกับ API Asset ภายในองค์กรเพื่อดึงข้อมูลอุปกรณ์",
    },
    {
      icon: <MdSecurity size={20} />,
      title: "User Feedback Loop",
      desc: "ระบบให้คะแนน 1-5 เพื่อปรับปรุงความแม่นยำของ AI",
    },
  ];

  return (
    <section id="projects" className="scroll-mt-28">
      <div className="mb-12 sm:mb-16 text-center">
        <p className="section-kicker justify-center">Selected Work</p>
        <h2
          className="mt-4 text-3xl sm:text-5xl font-bold section-heading"
          style={{ color: "var(--text-primary)" }}
        >
          Infrastructure & <span className="gradient-text">DevOps</span> Projects
        </h2>
        <p
          className="mt-3 text-base sm:text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          โครงการที่เน้นด้าน System Engineering, Cloud Infrastructure, และ DevOps Practices
        </p>
      </div>

      {/* DevOps Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-10 sm:mb-12"
      >
        <Card className="p-6 sm:p-8">
          <h3
            className="text-lg sm:text-2xl font-bold mb-6 flex items-center gap-3 section-heading"
            style={{ color: "var(--text-primary)" }}
          >
            <MdOutlineStorage size={28} style={{ color: "var(--accent)" }} />
            DevOps & Infrastructure Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
            {devopsSkills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="fine-panel p-4 text-center hover:bg-[rgba(197,168,128,0.08)] transition-colors"
              >
                <div style={{ color: "var(--accent)" }} className="mb-2">
                  {skill.icon}
                </div>
                <h4
                  className="font-bold text-sm"
                  style={{ color: "var(--text-primary)" }}
                >
                  {skill.name}
                </h4>
                <p
                  className="text-xs mt-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {skill.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* CI/CD Best Practices Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-10 sm:mb-12"
      >
        <div className="fine-panel p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div
            className="icon-frame w-14 h-14 flex-shrink-0"
            style={{ background: "var(--accent-soft)" }}
          >
            <FaGitAlt size={24} style={{ color: "var(--accent)" }} />
          </div>
          <div>
            <h4
              className="text-base sm:text-lg font-bold mb-2 section-heading"
              style={{ color: "var(--text-primary)" }}
            >
              DevOps & CI/CD Best Practices
            </h4>
            <p
              className="text-sm sm:text-base"
              style={{ color: "var(--text-secondary)" }}
            >
              ทุกโปรเจคมี <strong>Automated CI/CD Pipeline</strong> เพื่อให้ Build, Test, Deploy ทำงานอัตโนมัติ
              ด้วย <strong style={{ color: "var(--accent)" }}>GitLab CI/Runner</strong>,{" "}
              <strong style={{ color: "var(--accent)" }}>Docker</strong> และ{" "}
              <strong style={{ color: "var(--accent)" }}>Infrastructure as Code</strong>{" "}
              เพื่อให้ระบบมีความเสถียรและปลอดภัยเสมอ
            </p>
          </div>
        </div>
      </motion.div>

      {/* Project 1: Centralized Monitoring System */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
        className="mb-8 sm:mb-10"
      >
        <Card className="w-full overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-3">
                <span
                  className="chip"
                  style={{
                    background: "var(--accent-soft)",
                    color: "var(--accent)",
                    border: "1px solid color-mix(in srgb, var(--accent) 24%, transparent)",
                  }}
                >
                  <FaNetworkWired size={14} />
                  Jastel Network
                </span>
                <span
                  className="chip"
                  style={{
                    background: "var(--success-soft)",
                    color: "var(--success)",
                    border: "1px solid color-mix(in srgb, var(--success) 24%, transparent)",
                  }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: "var(--success)" }} />
                  Production
                </span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold section-heading"
                style={{ color: "var(--text-primary)" }}
              >
                Centralized Monitoring Facility System
              </h3>
              <p className="text-sm sm:text-base mt-2" style={{ color: "var(--text-secondary)" }}>
                ระบบมอนิเตอร์เครือข่ายโทรคมนาคม (Telecom Network Monitoring) จากศูนย์กลาง
              </p>
            </div>
          </div>

          {/* Problem & Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
          >
            <div className="fine-panel p-4 sm:p-5">
              <h4
                className="font-bold mb-2 flex items-center gap-2"
                style={{ color: "var(--text-primary)" }}
              >
                <span className="icon-frame h-9 w-9">
                  <FaServer size={16} />
                </span>
                ปัญหาเดิม
              </h4>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                ต้องตรวจสอบสถานะอุปกรณ์จากหลายระบบแยกกัน ไม่สะดวก และเสี่ยงพลาดการมอนิเตอร์
              </p>
            </div>
            <div className="fine-panel p-4 sm:p-5">
              <h4
                className="font-bold mb-2 flex items-center gap-2"
                style={{ color: "var(--accent)" }}
              >
                <span
                  className="icon-frame h-9 w-9"
                  style={{ background: "var(--accent-soft)" }}
                >
                  <MdSpeed size={16} style={{ color: "var(--accent)" }} />
                </span>
                Solution
              </h4>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                Dashboard เดียวสำหรับมอนิเตอร์ทั้งหมด พร้อม Alert อัตโนมัติและสถิติเรียลไทม์
              </p>
            </div>
          </motion.div>

          {/* Key Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h4
              className="font-bold mb-4 flex items-center gap-2"
              style={{ color: "var(--text-primary)" }}
            >
              <span className="icon-frame h-9 w-9">
                <MdAutoFixHigh size={18} />
              </span>
              สิ่งที่ผมดำเนินการ (System Engineering)
            </h4>
            <div className="space-y-2 mb-6">
              {[
                "ออกแบบสถาปัตยกรรมระบบ (System Architecture) สำหรับมอนิเตอร์หลายโปรโตคอล",
                "พัฒนา Backend API ด้วย Node.js สำหรับการรับ-ส่งข้อมูลจากอุปกรณ์",
                "ตั้งค่า MongoDB Replication สำหรับความพร้อมใช้งานสูง (High Availability)",
                "สร้าง Web Dashboard ด้วย React สำหรับการแสดงผล Real-time Metrics",
                "ปรับแต่งระบบ Alert เพื่อลดปัญหา False Positive",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <span
                    className="text-sm mt-1 flex-shrink-0 font-bold"
                    style={{ color: "var(--accent)" }}
                  >
                    ◆
                  </span>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h4
              className="font-bold mb-4 flex items-center gap-2"
              style={{ color: "var(--text-primary)" }}
            >
              <span className="icon-frame h-9 w-9">
                <MdSpeed size={18} />
              </span>
              ฟีเจอร์ระบบ
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="fine-panel p-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="icon-frame w-10 h-10"
                      style={{ background: "var(--accent-soft)" }}
                    >
                      <span style={{ color: "var(--accent)" }}>{feature.icon}</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                        {feature.title}
                      </h5>
                      <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <h4
              className="font-bold mb-4 flex items-center gap-2"
              style={{ color: "var(--text-primary)" }}
            >
              <span className="icon-frame h-9 w-9">
                <FaDatabase size={18} />
              </span>
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "React",
                "MongoDB",
                "Modbus/SNMP",
                "Nginx",
                "GitLab CI",
                "Docker",
                "Linux Server",
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="fine-panel px-3 py-1.5 text-xs sm:text-sm font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </Card>
      </motion.div>

      {/* Project 2: LINE AI IT Support */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Card className="w-full overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-3">
                <span
                  className="chip"
                  style={{
                    background: "var(--accent-soft)",
                    color: "var(--accent)",
                    border: "1px solid color-mix(in srgb, var(--accent) 24%, transparent)",
                  }}
                >
                  <FaNetworkWired size={14} />
                  Jastel Network
                </span>
                <span
                  className="chip"
                  style={{
                    background: "var(--success-soft)",
                    color: "var(--success)",
                    border: "1px solid color-mix(in srgb, var(--success) 24%, transparent)",
                  }}
                >
                  <span className="h-2 w-2 rounded-full" style={{ background: "var(--success)" }} />
                  Production
                </span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-bold section-heading"
                style={{ color: "var(--text-primary)" }}
              >
                LINE AI IT Support System
              </h3>
              <p className="text-sm sm:text-base mt-2" style={{ color: "var(--text-secondary)" }}>
                ระบบซัพพอร์ต IT ด้วย AI ผ่าน LINE Bot พร้อม Ticketing Integration
              </p>
            </div>
          </div>

          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="fine-panel p-4 sm:p-5 mb-6"
          >
            <h4
              className="font-bold mb-3 flex items-center gap-3"
              style={{ color: "var(--text-primary)" }}
            >
              <span className="icon-frame h-9 w-9">
                <FaServer size={17} />
              </span>
              ภาพรวมระบบ
            </h4>
            <p className="text-sm sm:text-base" style={{ color: "var(--text-secondary)" }}>
              ระบบที่รวม LINE Bot + Google Gemini AI + MongoDB + Ticketing System
              ให้ผู้ใช้สามารถขอความช่วยเหลือด้าน IT ผ่าน LINE ได้ง่ายๆ
              โดยระบบจะวินิจฉัยปัญหาด้วย AI และสร้าง Ticket อัตโนมัติหากต้องการสนับสนุนเพิ่มเติม
            </p>
          </motion.div>

          {/* Responsibilities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h4
              className="font-bold mb-4 flex items-center gap-2"
              style={{ color: "var(--text-primary)" }}
            >
              <span className="icon-frame h-9 w-9">
                <MdAutoFixHigh size={18} />
              </span>
              สิ่งที่ผมดำเนินการ (Backend & Infrastructure)
            </h4>
            <div className="space-y-2">
              {[
                "พัฒนา Web Server ด้วย Bun.js + Express จัดการ LINE Webhook",
                "ทำ Integration กับ Google Gemini AI API สำหรับการวินิจฉัยปัญหา",
                "ออกแบบ Database Schema สำหรับจัดเก็บ Users, Conversations, Tickets",
                "สร้าง Internal API สำหรับดึงข้อมูล Asset และอุปกรณ์ของผู้ใช้",
                "ตั้งค่า Cloudflare Worker สำหรับ Rate Limiting และ Security",
                "จัดการ CI/CD Pipeline และ Error Logging ของระบบ",
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3">
                  <span
                    className="text-sm mt-1 flex-shrink-0 font-bold"
                    style={{ color: "var(--accent)" }}
                  >
                    ◆
                  </span>
                  <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <h4
              className="font-bold mb-4 flex items-center gap-2"
              style={{ color: "var(--text-primary)" }}
            >
              <span className="icon-frame h-9 w-9">
                <MdSpeed size={18} />
              </span>
              คุณสมบัติสำคัญ
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {lineFeatures.map((feature, idx) => (
                <div key={idx} className="fine-panel p-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="icon-frame w-10 h-10"
                      style={{ background: "var(--accent-soft)" }}
                    >
                      <span style={{ color: "var(--accent)" }}>{feature.icon}</span>
                    </div>
                    <div>
                      <h5 className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
                        {feature.title}
                      </h5>
                      <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <h4
              className="font-bold mb-4 flex items-center gap-2"
              style={{ color: "var(--text-primary)" }}
            >
              <span className="icon-frame h-9 w-9">
                <FaDatabase size={18} />
              </span>
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "LINE Bot API",
                "Bun.js",
                "Express.js",
                "Google Gemini AI",
                "MongoDB",
                "Cloudflare",
                "Webhook",
                "Docker",
                "Node.js",
              ].map((tech, idx) => (
                <span
                  key={idx}
                  className="fine-panel px-3 py-1.5 text-xs sm:text-sm font-medium"
                  style={{ color: "var(--text-secondary)" }}
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