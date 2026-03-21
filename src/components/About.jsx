// File: src/components/About.jsx — MATRIX THEME
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
    <section id="about" className="scroll-mt-24 py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-400 font-matrix neon-green-subtle">
        {"//"} ABOUT
      </h2>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="flex-1">
            <div className="text-left relative border-l-4 border-green-500 pl-6 space-y-10">
              {educations.map((edu, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[1.1rem] top-1 w-4 h-4 rounded-full bg-green-500 border-4 border-black shadow-[0_0_8px_rgba(0,255,65,0.6)]"></div>
                  <h3 className="text-xl font-bold text-green-400 font-matrix">
                    {edu.year}
                  </h3>
                  <h4 className="text-xl font-semibold mt-1 text-green-300">
                    {edu.institution}
                  </h4>
                  <p className="text-sm text-green-300/60">
                    {edu.degree}
                  </p>
                  <p className="text-sm text-green-300/60">
                    {edu.major}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Work Experience Card */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="flex-1">
            <div className="text-left relative border-l-4 border-green-400/60 pl-6 space-y-10">
              {jobs.map((job, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[1.1rem] top-1 w-4 h-4 rounded-full bg-green-400 border-4 border-black shadow-[0_0_8px_rgba(0,255,65,0.4)]"></div>
                  <p className="text-sm font-semibold text-green-500/80 font-matrix">
                    {job.period}
                  </p>
                  <h3 className="text-xl font-bold text-green-400">
                    {job.position}
                  </h3>
                  <p className="text-sm font-semibold text-green-300/70">
                    {job.company}
                  </p>
                  {job.descriptions
                    ? job.descriptions.map((desc, i) => (
                        <p
                          key={i}
                          className="text-sm text-green-300/60"
                        >
                          {">"} {desc}
                        </p>
                      ))
                    : job.description && (
                        Array.isArray(job.description)
                          ? job.description.map((desc, i) => (
                              <p key={i} className="text-sm text-green-300/60">
                                {">"} {desc}
                              </p>
                            ))
                          : <p className="text-sm text-green-300/60">
                              {">"} {job.description}
                            </p>
                      )}
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
