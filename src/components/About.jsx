// File: src/components/About.jsx
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"; // อย่าลืม import
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
      description: "พัฒนาระบบตามที่ได้รับมอบหมาย ทั้ง Backend และ Frontend",
    },
    {
      period: "พ.ค. 2565 - ก.พ. 2567",
      position: "IoT Developer and Programmer",
      company: "vansales application co. ltd",
      description: "พัฒนาระบบตามที่ได้รับมอบหมาย ทั้ง Backend และ Frontend",
    },
    {
      period: "พ.ค. 2565 - พ.ย. 2565",
      position: "IT Support",
      company: "องค์การพิพิธภัณฑ์วิทยาศาสตร์แห่งชาติ",
      description:
        "สนับสนุนงานซ่อม จัดการ บำรุงดูแล และใช้งานอุปกรณ์คอมพิวเตอร์ ครอบคลุม Software และ Hardware",
    },
  ];

  return (
    <section id="about" className="scroll-mt-24 py-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        About
      </h2>

      <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
        {/* 👈 Card ซ้าย: การศึกษา */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="w-[450px] h-[520px]">
            <div className="relative border-l-4 border-orange-500 pl-6 space-y-10">
              {educations.map((edu, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[1.1rem] top-1 w-4 h-4 rounded-full bg-orange-500 border-4 border-white dark:border-gray-800"></div>
                  <h3 className="text-sm font-bold text-gray-700 dark:text-white">{edu.year}</h3>
                  <h4 className="text-md font-semibold mt-1 text-gray-800 dark:text-white">{edu.institution}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{edu.degree}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{edu.major}</p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* 👉 Card ขวา: การทำงาน */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Card className="w-[700px] h-[520px]">
            <div className="relative border-l-4 border-blue-600 pl-6 space-y-10">
              {jobs.map((job, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[1.1rem] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white dark:border-gray-800"></div>
                  <p className="text-sm font-semibold text-blue-900 dark:text-blue-300">{job.period}</p>
                  <h3 className="text-md font-bold text-gray-900 dark:text-white">{job.position}</h3>
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">{job.company}</p>
                  <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">{job.description}</p>
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
