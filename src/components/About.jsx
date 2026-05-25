// File: src/components/About.jsx — Dark Luxury Gold Theme
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FiBookOpen, FiBriefcase } from "react-icons/fi";
import Card from "./Card";

function About() {
  const educations = [
    {
      year: "2562 - 2565",
      institution: "มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี",
      degree: "ปริญญาตรี คณะวิศวกรรมศาสตร์",
      major: "สาขา วิศวกรรมคอมพิวเตอร์",
    },
    {
      year: "2557 - 2561",
      institution: "วิทยาลัยเทคนิคชัยนาท",
      degree: "ปวส., ปวช. ช่างไฟฟ้ากำลัง",
      major: "สาขา ติดตั้งไฟฟ้า",
    },
  ];

  const jobs = [
    {
      period: "ก.พ. 2567 - ปัจจุบัน",
      position: "IT Engineer",
      company: "Jastel Network co. ltd",
      categories: [
        {
          title: "ระบบเครือข่าย & IoT",
          items: [
            "พัฒนาและดูแลระบบเครือข่าย (Network Systems)",
            "ติดตั้งและตั้งค่า CCTV, Switch, Modbus Gateway และอุปกรณ์ IoT",
            "ควบคุมและตรวจสอบระบบผ่าน Modbus และระบบ Monitoring",
          ],
        },
        {
          title: "การพัฒนาซอฟต์แวร์",
          items: [
            "เขียนสคริปต์/โค้ด (Scripts/Code) สำหรับระบบเครือข่าย",
            "พัฒนา Web Application ตามความต้องการ",
            "มอนิเตอร์ระบบด้วย Grafana และ Zabbix",
          ],
        },
        {
          title: "การสนับสนุนและบำรุงรักษา",
          items: [
            "ให้การสนับสนุนผู้ใช้งาน (User Support) และแก้ไขปัญหา IT",
            "บำรุงรักษา Hardware และ Software",
          ],
        },
      ],
    },
    {
      period: "พ.ค. 2565 - ก.พ. 2567",
      position: "IoT Developer and Programmer",
      company: "vansales application co. ltd",
      categories: [
        {
          title: "พัฒนาอุปกรณ์ IoT",
          items: [
            "ออกแบบและพัฒนาวงจรอิเล็กทรอนิกส์",
            "เขียนโปรแกรมควบคุมอุปกรณ์ IoT",
          ],
        },
        {
          title: "พัฒนา Web Application",
          items: [
            "พัฒนา Frontend สำหรับแอปพลิเคชัน",
            "พัฒนา Backend สำหรับระบบ",
            "Support Application และแก้ไขปัญหาที่เกิดขึ้น",
          ],
        },
      ],
    },
    {
      period: "ม.ค. 2565 - ม.ย. 2565",
      position: "IT Support",
      company: "องค์การพิพิธภัณฑ์วิทยาศาสตร์แห่งชาติ",
      categories: [
        {
          title: "บำรุงรักษาระบบ IT",
          items: [
            "ซ่อมแซมอุปกรณ์คอมพิวเตอร์ (Hardware)",
            "บำรุงรักษาและจัดการระบบซอฟต์แวร์ (Software)",
            "ให้การสนับสนุนผู้ใช้งานด้าน IT",
          ],
        },
      ],
    },
  ];

  return (
    <section id="about" className="scroll-mt-28 py-8 sm:py-16">
      <div className="mb-12 sm:mb-16 text-center">
        <p className="section-kicker justify-center">Profile</p>
        <h2
          className="mt-4 text-3xl sm:text-5xl font-bold section-heading"
          style={{ color: "var(--text-primary)" }}
        >
          About <span className="gradient-text">Me</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="h-full p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div
                className="h-12 w-12 rounded-lg flex items-center justify-center"
                style={{
                  background: "var(--accent-soft)",
                  borderColor: "var(--border-color)",
                  borderWidth: "1px",
                }}
              >
                <FiBookOpen size={20} style={{ color: "var(--accent)" }} />
              </div>
              <h3
                className="text-lg sm:text-2xl font-bold section-heading"
                style={{ color: "var(--text-primary)" }}
              >
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {educations.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="fine-panel p-4 sm:p-5 hover:bg-[rgba(197,168,128,0.08)] transition-colors"
                >
                  <p
                    className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2"
                    style={{ color: "var(--accent)" }}
                  >
                    {edu.year}
                  </p>
                  <h4
                    className="text-sm sm:text-base font-bold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {edu.institution}
                  </h4>
                  <p
                    className="text-xs sm:text-sm font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {edu.degree}
                  </p>
                  <p
                    className="text-xs sm:text-sm mt-2"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {edu.major}
                  </p>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Work Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="h-full p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div
                className="h-12 w-12 rounded-lg flex items-center justify-center"
                style={{
                  background: "var(--accent-soft)",
                  borderColor: "var(--border-color)",
                  borderWidth: "1px",
                }}
              >
                <FiBriefcase size={20} style={{ color: "var(--accent)" }} />
              </div>
              <h3
                className="text-lg sm:text-2xl font-bold section-heading"
                style={{ color: "var(--text-primary)" }}
              >
                Work Experience
              </h3>
            </div>

            <div className="space-y-4">
              {jobs.map((job, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="fine-panel p-4 sm:p-5 hover:bg-[rgba(197,168,128,0.08)] transition-colors"
                >
                  <p
                    className="text-xs sm:text-sm font-semibold uppercase tracking-wide mb-2"
                    style={{ color: "var(--accent)" }}
                  >
                    {job.period}
                  </p>
                  <h4
                    className="text-sm sm:text-base font-bold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {job.position}
                  </h4>
                  <p
                    className="text-xs sm:text-sm font-medium mb-3"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {job.company}
                  </p>

                  {job.categories ? (
                    <div className="space-y-3">
                      {job.categories.map((cat, catIdx) => (
                        <div key={catIdx}>
                          <p
                            className="text-xs font-semibold mb-2 px-2 py-1 rounded"
                            style={{
                              color: "var(--accent)",
                              background: "var(--accent-soft)",
                            }}
                          >
                            {cat.title}
                          </p>
                          <div className="space-y-1.5 ml-1">
                            {cat.items.map((item, itemIdx) => (
                              <div key={itemIdx} className="flex gap-2">
                                <span
                                  className="text-[5px] sm:text-xs mt-1.5 flex-shrink-0 font-bold"
                                  style={{ color: "var(--accent)" }}
                                >
                                  ◆
                                </span>
                                <p
                                  className="text-xs sm:text-sm leading-relaxed"
                                  style={{ color: "var(--text-muted)" }}
                                >
                                  {item}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : job.descriptions ? (
                    job.descriptions.map((desc, i) => (
                      <div key={i} className="flex gap-2 mb-2">
                        <span
                          className="text-[6px] sm:text-xs mt-1.5 flex-shrink-0"
                          style={{ color: "var(--accent)" }}
                        >
                          ●
                        </span>
                        <p
                          className="text-xs sm:text-sm leading-relaxed"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {desc}
                        </p>
                      </div>
                    ))
                  ) : job.description && Array.isArray(job.description) ? (
                    job.description.map((desc, i) => (
                      <div key={i} className="flex gap-2 mb-2">
                        <span
                          className="text-[6px] sm:text-xs mt-1.5 flex-shrink-0"
                          style={{ color: "var(--accent)" }}
                        >
                          ●
                        </span>
                        <p
                          className="text-xs sm:text-sm leading-relaxed"
                          style={{ color: "var(--text-muted)" }}
                        >
                          {desc}
                        </p>
                      </div>
                    ))
                  ) : job.description ? (
                    <div className="flex gap-2">
                      <span
                        className="text-[6px] sm:text-xs mt-1.5 flex-shrink-0"
                        style={{ color: "var(--accent)" }}
                      >
                        ●
                      </span>
                      <p
                        className="text-xs sm:text-sm leading-relaxed"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {job.description}
                      </p>
                    </div>
                  ) : null}
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default About;