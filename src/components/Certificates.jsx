/* eslint-disable no-unused-vars */

import Card from "./view/Card-certi";
import { motion } from "framer-motion";
import GenAI_in_Business_Discover_the_Possibilities from "../assets/certificates/GenAI_in_Business_Discover_the_Possibilities.pdf";
import Fundamentals_of_Generative_AI_for_Beginners from "../assets/certificates/Fundamentals_of_Generative_AI_for_Beginners.pdf";
import Introduction_to_Microsoft_365_Copilot from "../assets/certificates/Introduction_to_Microsoft_365_Copilot.pdf";
import Generative_AI_Impact_Considerations_and_Ethical_Issues from "../assets/certificates/Generative_AI_Impact,_Considerations,_and_Ethical_Issues.pdf";
import Migrating_to_the_AWS_Cloud from "../assets/certificates/Migrating_to_the_AWS_Cloud.pdf";
import AWS_Cloud_Technical_Essentials from "../assets/certificates/AWS_Cloud_Technical_Essentials.pdf";
import User_Awareness_and_Education_for_Generative_AI from "../assets/certificates/User_Awareness_and_Education_for_Generative_AI.pdf";


function Certificates() {
  const certificates = [
    {
      title: "AI for Business",
      file: GenAI_in_Business_Discover_the_Possibilities,
    },
    {
      title: "AWS Cloud Essentials",
      file: AWS_Cloud_Technical_Essentials,
    },
    {
      title: "AI Fundamentals",
      file:   Fundamentals_of_Generative_AI_for_Beginners,
    },
    {
      title: "Microsoft 365 Copilot",
      file:  Introduction_to_Microsoft_365_Copilot,
    },
    {
      title: "Generative AI Impact",
      file: Generative_AI_Impact_Considerations_and_Ethical_Issues,
    },
    {
      title: "Migrate to AWS Cloud",
      file: Migrating_to_the_AWS_Cloud,
    },
    {
      title: "AI User Awareness",
      file: User_Awareness_and_Education_for_Generative_AI,
    },
  ];

  return (
    <section id="certificates" className="scroll-mt-24">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Certificate 
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
