/* eslint-disable no-unused-vars */
import Card from "./Card";
import { m, motion } from "framer-motion";
import bun from "../assets/icons/Bun.png";
import c from "../assets/icons/c-program-icon.png";
import elysia from "../assets/icons/ElysiaJS.png";
import googleCloud from "../assets/icons/google-cloud-icon.png";
import git from "../assets/icons/git-icon.png";
import html from "../assets/icons/icons8-html-48.png";
import javascript from "../assets/icons/icons8-javascript-48.png";
import linux from "../assets/icons/icons8-linux-48.png";
import mongodb from "../assets/icons/icons8-mongodb-48.png";
import mysql from "../assets/icons/icons8-mysql-48.png";
import nodejs from "../assets/icons/icons8-node-js-48.png";
import postman from "../assets/icons/postman-icon.png";
import python from "../assets/icons/icons8-python-48.png";
import react from "../assets/icons/icons8-react-48.png";
import typescript from "../assets/icons/icons8-typescript-48.png";
import ubuntu from "../assets/icons/ubuntu-color-icon.png";
import vue from "../assets/icons/vue-js-icon.png";
import aws from "../assets/icons/icons8-aws-48.png";
import docker from "../assets/icons/icons8-docker-48.png";
import k8s from "../assets/icons/icons8-kubernetes-48.png";
import vsCode from "../assets/icons/icons8-vs-code-48.png";
import arduino from "../assets/icons/icons8-arduino-48.png";
import css from "../assets/icons/icons8-css-48.png";


function Skills() {
  const categories = [  
    {
      title: "🧠 Computer Languages",
      side: "left", // 👈 เพิ่มตรงนี้
      skills: [
        { name: "JavaScript", img: javascript },
        { name: "HTML", img: html },
        { name: "CSS", img: css },
        { name: "TypeScript", img: typescript },
        { name: "Python", img: python },
        { name: "C", img: c },
      ],
    },
    {
      title: "⚙️ Frameworks & Runtime",
      side: "right",
      skills: [
        { name: "React", img: react },
        { name: "Vue", img: vue },
        { name: "Node.js", img: nodejs },
        { name: "Bun", img: bun},
        { name: "Arduino", img:  arduino },
        { name: "ElysiaJS", img: elysia },
      ],
    },
    {
      title: "🗄 Databases",
      side: "left", // 👈 เพิ่มตรงนี้
      skills: [
        { name: "MongoDB", img: mongodb },
        { name: "MySQL", img: mysql},
      ],
    },
    {
      title: "🧰 Tools & Platforms",
      side: "right",
      skills: [
        { name: "Docker", img: docker },
        { name: "Kubernetes", img: k8s },
        { name: "AWS Cloud", img: aws },
        { name: "Linux", img: linux },
        { name: "VS Code", img: vsCode },
        { name: "Post Man", img: postman },
        { name: "Ubuntu", img: ubuntu },
        { name: "Google Cloud", img: googleCloud },
        { name: "Git", img: git },

      ],
    },
  ];

  const whiteBgSkills = ["Linux", "AWS Cloud", "MySQL"];

  return (
    <section id="skills" className="scroll-mt-24 ">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        ทักษะของฉัน
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: category.side === "left" ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card key={idx} title={category.title}>
              <div className="grid grid-cols-4 gap-4 justify-items-center">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-sm text-gray-700 dark:text-gray-100"
                  >
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className={`w-10 h-10 object-contain mb-1 rounded ${
                        whiteBgSkills.includes(skill.name) ? "bg-white p-1" : ""
                      }`}
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
