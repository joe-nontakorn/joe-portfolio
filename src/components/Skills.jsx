/* eslint-disable no-unused-vars */
// Skills.jsx — MATRIX THEME
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

function Skills() {
  const categories = [
    {
      title: "Programming Languages",
      side: "left",
      skills: [
        { name: "JavaScript", img: javascript },
        { name: "TypeScript", img: typescript },
        { name: "Python", img: python },
        { name: "C", img: c },
      ],
    },
    {
      title: "Frontend Development",
      side: "right",
      skills: [
        { name: "HTML", img: html },
        { name: "CSS", img: css },
        { name: "React", img: react },
        { name: "Vue", img: vue },
      ],
    },
    {
      title: "Backend & Runtimes",
      side: "left",
      skills: [
        { name: "Node.js", img: nodejs },
        { name: "Bun", img: bun },
        { name: "ElysiaJS", img: elysia },
      ],
    },
    {
      title: "Databases",
      side: "right",
      skills: [
        { name: "MongoDB", img: mongodb },
        { name: "MySQL", img: mysql },
        { name: "PostgreSQL", img: postgresql },
      ],
    },
    {
      title: "OS & Web Servers",
      side: "left",
      skills: [
        { name: "Linux", img: linux },
        { name: "Ubuntu", img: ubuntu },
        { name: "VirtualBox", img: virtualbox },
        { name: "Nginx", img: nginx },
      ],
    },
    {
      title: "Cloud Platforms",
      side: "right",
      skills: [
        { name: "AWS Cloud", img: aws },
        { name: "Google Cloud", img: googleCloud },
      ],
    },
    {
      title: "DevOps & Containers",
      side: "left",
      skills: [
        { name: "Docker", img: docker },
        { name: "Kubernetes", img: k8s },
        { name: "Ansible", img: ansible },
      ],
    },
    {
      title: "CI/CD & IaC",
      side: "right",
      skills: [
        { name: "Jenkins", img: jenkins },
        { name: "GitLab CI", img: gitlab },
        { name: "Terraform", img: terraform },
      ],
    },
    {
      title: "Networking & Protocols",
      side: "left",
      skills: [
        { name: "TCP/IP", img: tcpip },
        { name: "SNMP", img: snmp },
        { name: "MQTT", img: mqtt },
        { name: "Modbus", img: modbus },
      ],
    },
    {
      title: "Monitoring & Observability",
      side: "right",
      skills: [
        { name: "Grafana", img: grafana },
        { name: "Zabbix", img: zabbix },
      ],
    },
    {
      title: "Developer Tools",
      side: "left",
      skills: [
        { name: "Git", img: git },
        { name: "VS Code", img: vsCode },
        { name: "Post Man", img: postman },
      ],
    },
    {
      title: "IoT & Automation",
      side: "right",
      skills: [
        { name: "Arduino", img: arduino },
        { name: "n8n", img: n8n },
      ],
    },
  ];

  const whiteBgSkills = ["Linux", "AWS Cloud", "MySQL"];

  return (
    <section id="skills" className="scroll-mt-24 ">
      <h1 className="text-3xl font-bold text-center text-green-400 font-matrix neon-green-subtle">
        {"//"} SKILLS
      </h1>
      <br />

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
              <div className="grid grid-cols-5 gap-5 justify-items-center">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-sm text-green-300/80 hover:text-green-400 transition group"
                  >
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className={`w-10 h-10 object-contain mb-1 rounded group-hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.5)] transition ${
                        whiteBgSkills.includes(skill.name) ? "bg-white p-1" : ""
                      }`}
                    />
                    <span className="font-matrix text-xs">{skill.name}</span>
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
