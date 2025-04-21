/* eslint-disable no-unused-vars */

import Card from "./view/Card-certi";
import { motion } from "framer-motion";

function Certificates() {
  const certificates = [
    {
      title: "AI for Business",
      file: "/Certificates/GenAI_in_Business_Discover_the_Possibilities.pdf",
    },
    {
      title: "AWS Cloud Essentials",
      file: "/Certificates/AWS_Cloud_Technical_Essentials.pdf",
    },
    {
      title: "AI Fundamentals",
      file: "/Certificates/Fundamentals_of_Generative_AI_for_Beginners.pdf",
    },
    {
      title: "Microsoft 365 Copilot",
      file: "/Certificates/Introduction_to_Microsoft_365_Copilot.pdf",
    },
    {
      title: "Generative AI Impact",
      file: "/Certificates/Generative_AI_Impact,_Considerations,_and_Ethical_Issues.pdf",
    },
    {
      title: "Migrate to AWS Cloud",
      file: "/Certificates/Migrating_to_the_AWS_Cloud.pdf",
    },
    {
      title: "AI User Awareness",
      file: "/Certificates/User_Awareness_and_Education_for_Generative_AI.pdf",
    },
  ];

  return (
    <section id="certificates" className="scroll-mt-24">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        ใบ Certificate ของฉัน
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
  {certificates.map((cert, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <Card title={cert.title} link={cert.file} />
    </motion.div>
  ))}
</div>

    </section>
  );
}

export default Certificates;
