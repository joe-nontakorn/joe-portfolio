/* eslint-disable no-unused-vars */
import Card from "./Card";
import { motion } from "framer-motion";

function Skills() {
  const categories = [
    {
      title: "🧠 Computer Languages",
      side: "left", // 👈 เพิ่มตรงนี้
      skills: [
        { name: "JavaScript", img: "/icon/icons8-javascript-48.png" },
        { name: "HTML", img: "/icon/icons8-html-48.png" },
        { name: "CSS", img: "/icon/icons8-css-48.png" },
        { name: "TypeScript", img: "/icon/icons8-typescript-48.png" },
        { name: "Python", img: "/icon/icons8-python-48.png" },
        { name: "C", img: "/icon/c-program-icon.png" },
      ],
    },
    {
      title: "⚙️ Frameworks & Runtime",
      side: "right",
      skills: [
        { name: "React", img: "/icon/icons8-react-48.png" },
        { name: "Vue", img: "/icon/vue-js-icon.png" },
        { name: "Node.js", img: "/icon/icons8-node-js-48.png" },
        { name: "Bun", img: "/icon/Bun.png" },
        { name: "Arduino", img: "/icon/icons8-arduino-48.png" },
        { name: "ElysiaJS", img: "/icon/ElysiaJS.png" },
      ],
    },
    {
      title: "🗄 Databases",
      side: "left", // 👈 เพิ่มตรงนี้
      skills: [
        { name: "MongoDB", img: "/icon/icons8-mongodb-48.png" },
        { name: "MySQL", img: "/icon/icons8-mysql-48.png" },
      ],
    },
    {
      title: "🧰 Tools & Platforms",
      side: "right",
      skills: [
        { name: "Docker", img: "/icon/icons8-docker-48.png" },
        { name: "Kubernetes", img: "/icon/icons8-kubernetes-48.png" },
        { name: "AWS Cloud", img: "/icon/icons8-aws-48.png" },
        { name: "Linux", img: "/icon/icons8-linux-48.png" },
        { name: "VS Code", img: "/icon/icons8-vs-code-48.png" },
        { name: "Post Man", img: "/icon/postman-icon.png" },
        { name: "Ubuntu", img: "/icon/ubuntu-color-icon.png" },
        { name: "Google Cloud", img: "/icon/google-cloud-icon.png" },
        { name: "Git", img: "/icon/git-icon.png" },

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
