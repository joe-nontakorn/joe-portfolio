// File: src/components/About.jsx — Modern Theme (Responsive + Theme-aware)
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
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
      descriptions: [
        "พัฒนาและดูแลระบบภายในองค์กร รวมถึงงานเขียนสคริปต์/โค้ดที่เกี่ยวข้องกับการทำงานของระบบเครือข่ายและอุปกรณ์ (เช่น Modbus, ระบบ Monitoring)",
        "พัฒนา Web Application ตามที่ได้รับมอบหมาย ",
        "ติดตั้งและตั้งค่าระบบเครือข่ายและอุปกรณ์ต่าง ๆ เช่น CCTV, Switch, Modbus Gateway และอุปกรณ์ IoT อื่น ๆ",
        "ให้การสนับสนุนผู้ใช้งาน (User Support) และแก้ไขปัญหาด้าน IT ทั้ง Hardware และ Software",
        "มอนิเตอร์ระบบใน Node ต่าง ๆ ด้วย Grafana และ Zabbix",
      ],
    },
    {
      period: "พ.ค. 2565 - ก.พ. 2567",
      position: "IoT Developer and Programmer",
      company: "vansales application co. ltd",
      description: [
        "ออกแบบวงจรและเขียนโปรแกรมควบคุมอุปกรณ์ IoT",
        "พัฒนาระบบ web application ทั้ง Frontend และ Backend ตามที่ได้รับมอบหมาย",
        "Support Application และแก้ไขปัญหาที่เกิดขึ้น",
      ],
    },
    {
      period: "ม.ค. 2565 - ม.ย. 2565",
      position: "IT Support",
      company: "องค์การพิพิธภัณฑ์วิทยาศาสตร์แห่งชาติ",
      description:
        "สนับสนุนงานซ่อม จัดการ บำรุงดูแล และใช้งานอุปกรณ์คอมพิวเตอร์ ครอบคลุม Software และ Hardware",
    },
  ];

  return (
    <section id="about" className="scroll-mt-24 py-8 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 gradient-text section-heading">
        About
      </h2>

      <div className="flex flex-col md:flex-row gap-5 sm:gap-6 justify-center items-start">
        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full md:w-1/2"
        >
          <Card className="flex-1">
            <h3
              className="text-base sm:text-lg font-semibold mb-5 sm:mb-6 flex items-center gap-2"
              style={{ color: "var(--text-primary)" }}
            >
              🎓 Education
            </h3>
            <div className="text-left relative timeline-line pl-5 sm:pl-6 space-y-6 sm:space-y-8">
              {educations.map((edu, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[1.05rem] top-1 timeline-dot"></div>
                  <h3
                    className="text-sm sm:text-base font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {edu.year}
                  </h3>
                  <h4
                    className="text-sm sm:text-base font-medium mt-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {edu.institution}
                  </h4>
                  <p className="text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>
                    {edu.degree}
                  </p>
                  <p className="text-xs sm:text-sm" style={{ color: "var(--text-muted)" }}>
                    {edu.major}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Work Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full md:w-1/2"
        >
          <Card className="flex-1">
            <h3
              className="text-base sm:text-lg font-semibold mb-5 sm:mb-6 flex items-center gap-2"
              style={{ color: "var(--text-primary)" }}
            >
              💼 Work Experience
            </h3>
            <div className="text-left relative timeline-line pl-5 sm:pl-6 space-y-6 sm:space-y-8">
              {jobs.map((job, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[1.05rem] top-1 timeline-dot"></div>
                  <p
                    className="text-xs sm:text-sm font-medium"
                    style={{ color: "var(--accent)" }}
                  >
                    {job.period}
                  </p>
                  <h3
                    className="text-sm sm:text-base font-bold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {job.position}
                  </h3>
                  <p
                    className="text-xs sm:text-sm font-medium"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {job.company}
                  </p>
                  {job.descriptions
                    ? job.descriptions.map((desc, i) => (
                        <p
                          key={i}
                          className="text-xs sm:text-sm mt-1 pl-3"
                          style={{
                            color: "var(--text-muted)",
                            borderLeft: "2px solid var(--border-color)",
                          }}
                        >
                          {desc}
                        </p>
                      ))
                    : job.description &&
                      (Array.isArray(job.description)
                        ? job.description.map((desc, i) => (
                            <p
                              key={i}
                              className="text-xs sm:text-sm mt-1 pl-3"
                              style={{
                                color: "var(--text-muted)",
                                borderLeft: "2px solid var(--border-color)",
                              }}
                            >
                              {desc}
                            </p>
                          ))
                        : (
                            <p
                              className="text-xs sm:text-sm mt-1 pl-3"
                              style={{
                                color: "var(--text-muted)",
                                borderLeft: "2px solid var(--border-color)",
                              }}
                            >
                              {job.description}
                            </p>
                          ))}
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
