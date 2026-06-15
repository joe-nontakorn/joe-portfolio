/* eslint-disable no-unused-vars */
// Skills.jsx — Modern Theme (Responsive + Theme-aware)
import Card from "./Card";
import { motion } from "framer-motion";
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
import n8n from "../assets/icons/n8n.png";
import virtualbox from "../assets/icons/virtualbox_icon.png";
import ansible from "../assets/icons/icons8-ansible-48.png";
import jenkins from "../assets/icons/icons8-jenkins-48.png";
import nginx from "../assets/icons/icons8-nginx-48.png";
import postgresql from "../assets/icons/icons8-postgresql-48.png";
import tcpip from "../assets/icons/tcp.png";
import snmp from "../assets/icons/snmp-icon.svg";
import mqtt from "../assets/icons/Mqtt--Streamline-Simple-Icons.png";
import modbus from "../assets/icons/modbus-icon.svg";
import grafana from "../assets/icons/icons8-grafana-48.png";
import zabbix from "../assets/icons/Zabbix--Streamline-Svg-Logos.png";
import gitlab from "../assets/icons/gitlab.png";
import terraform from "../assets/icons/icons8-terraform-48.png";
import gpt from "../assets/icons/chatgpt.png";
import claude from "../assets/icons/claudecode-color.svg";
import gemini from "../assets/icons/icons8-gemini-ai-94.png";
import nextjs from "../assets/icons/icons8-nextjs-48.png";
import nestjs from "../assets/icons/icons8-nestjs-48.png";

function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", img: javascript },
        { name: "TypeScript", img: typescript },
        { name: "Python", img: python },
        { name: "C", img: c },
      ],
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML", img: html },
        { name: "CSS", img: css },
        { name: "React", img: react },
        { name: "Vue", img: vue },
        { name: "Next.js", img: nextjs },
      ],
    },
    {
      title: "Backend & Runtimes",
      skills: [
        { name: "Node.js", img: nodejs },
        { name: "Bun", img: bun },
        { name: "ElysiaJS", img: elysia },
        { name: "NestJS", img: nestjs },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", img: mongodb },
        { name: "MySQL", img: mysql },
        { name: "PostgreSQL", img: postgresql },
      ],
    },
    {
      title: "OS & Web Servers",
      skills: [
        { name: "Linux", img: linux },
        { name: "Ubuntu", img: ubuntu },
        { name: "VirtualBox", img: virtualbox },
        { name: "Nginx", img: nginx },
      ],
    },
    {
      title: "Cloud Platforms",
      skills: [
        { name: "AWS Cloud", img: aws },
        { name: "Google Cloud", img: googleCloud },
      ],
    },
    {
      title: "DevOps & Containers",
      skills: [
        { name: "Docker", img: docker },
        { name: "Kubernetes", img: k8s },
        { name: "Ansible", img: ansible },
      ],
    },
    {
      title: "CI/CD & IaC",
      skills: [
        { name: "Jenkins", img: jenkins },
        { name: "GitLab CI", img: gitlab },
        { name: "Terraform", img: terraform },
      ],
    },
    {
      title: "Networking & Protocols",
      skills: [
        { name: "TCP/IP", img: tcpip },
        { name: "SNMP", img: snmp },
        { name: "MQTT", img: mqtt },
        { name: "Modbus", img: modbus },
      ],
    },
    {
      title: "Monitoring & Observability",
      skills: [
        { name: "Grafana", img: grafana },
        { name: "Zabbix", img: zabbix },
      ],
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git", img: git },
        { name: "VS Code", img: vsCode },
        { name: "Post Man", img: postman },
        { name: "ChatGPT", img: gpt },
        { name: "Claude Code", img: claude },
        { name: "Gemini", img: gemini },
      ],
    },
    {
      title: "IoT & Automation",
      skills: [
        { name: "Arduino", img: arduino },
        { name: "n8n", img: n8n },
      ],
    },
  ];

  const whiteBgSkills = ["Linux", "AWS Cloud", "MySQL"];

  return (
    <section id="skills" className="scroll-mt-28">
      <div className="mb-8 sm:mb-11 text-center">
        <p className="section-kicker justify-center">Capabilities</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold gradient-text section-heading">
          Skills
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {categories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.05 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card key={idx}>
              <div className="mb-5 flex items-start justify-between gap-3">
                <h3 className="text-base sm:text-lg font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>
                  {category.title}
                </h3>
                <span className="chip">{category.skills.length}</span>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4 justify-start">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="group flex min-w-[64px] flex-col items-center text-xs sm:text-sm transition"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <div
                      className="icon-frame w-11 h-11 sm:w-12 sm:h-12 mb-1 transition-all group-hover:-translate-y-0.5"
                    >
                      <img
                        src={skill.img}
                        alt={skill.name}
                        className={`w-6 h-6 sm:w-8 sm:h-8 object-contain ${
                          whiteBgSkills.includes(skill.name)
                            ? "bg-white rounded p-0.5"
                            : ""
                        }`}
                      />
                    </div>
                    <span className="text-[10px] sm:text-xs mt-1 text-center">
                      {skill.name}
                    </span>
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
