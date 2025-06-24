/* eslint-disable no-unused-vars */
// Home.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import me from "../assets/me/65887.jpg";
import jastel from "../assets/logoCompany/jastel.png";
import vansales from "../assets/logoCompany/vansales.png";
import nsm from "../assets/logoCompany/nsm.png";
import jas from "../assets/logoCompany/logo-orange.svg"; 

// import "../assets/styles/Home.css";
import Card from "./Card";

function Home() {
  const fullText = "  hello world!";
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typing);
        // เคอร์เซอร์กระพริบ
        setInterval(() => {
          setShowCursor((prev) => !prev);
        }, 500);
      }
    }, 150); // ความเร็วพิมพ์

    return () => clearInterval(typing);
  }, []);

  return (
    <section id="home" className="home-section">
      <h1 className="text-orange-100 text-lg md:text-2xl lg:text-3xl font-bold font-8bit">
        {text}
        <span className={`ml-1 ${showCursor ? "opacity-100" : "opacity-0"}`}>
          _
        </span>
      </h1>{" "}
      {/* <p className="dev-p">Dev / IT Engineer</p> */}
      <br />
      <br />
      {/* 🔧 Container กำหนด layout แนวนอน */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-start">
        {/* 🟠 Card ซ้าย: รูปโปรไฟล์ */}
        {/* 👈 Card ซ้าย: รูป */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-auto" // ✅ เพิ่ม class นี้ให้ container ของ Card
        >
          <Card className=" md:h-[520px] text-center text-gray-800 dark:text-white">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              className="flex flex-col items-center justify-start h-full pt-4"
            >
              <div className="w-44 h-44 mb-4 rounded-full overflow-hidden border-4 border-orange-500">
                <img
                  src={me}
                  alt="รูปโปรไฟล์"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Nontakorn Khanaphol
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mt-1 text-center break-words">
                Age : 28 years old <br />
                Nationality : Thai <br />
                Tel : 090-9319022 <br />
                Email : nontakorn.joe01@gmail.com
              </p>
            </motion.div>
          </Card>
        </motion.div>

        {/* 👈 Card ขวา: เนื้อหา */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-auto"
        >
          <Card className="w-full max-w-[840px] h-auto md:h-[300px] flex flex-col justify-start items-start p-6">
            <div className="text-gray-800 dark:text-gray-200 space-y-2 w-full">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                <p className="mb-1">Hello There!</p> <br />
                <h1 className="text-2xl md:text-4xl font-semibold">
                  I'm Nontakorn Khanaphol, an IT engineer specializing in
                  infrastructure systems.
                </h1>
                <br />
                <p>
                  I am highly interested in pursuing a career in roles such as Cloud Engineer, DevOps Engineer, System Engineer, IT Infrastructure Specialist, and Backend Developer.
                </p>
              </motion.div>
            </div>
          </Card>

          <br />

          {/* 👇 Card แสดงโลโก้ */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full md:w-auto"
          >
            <Card className="w-full max-w-[840px] h-auto md:h-[200px] flex flex-col items-start p-6 overflow-hidden">
              <div className="text-gray-800 dark:text-gray-200 space-y-2 w-full">
                <p className="mb-1 text-xl font-semibold">
                  Company I Worked With
                </p>

                <div className="relative w-full overflow-hidden mt-4">
                  <motion.div
                    className="flex gap-16 w-max"
                    animate={{ x: ["100%", "-100%"] }}
                    transition={{
                      repeat: Infinity,
                      duration: 18,
                      ease: "linear",
                    }}
                  >
                    <div className="flex gap-16">
                      <img
                        src={nsm}
                        alt="NSM"
                        className="w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
                      />
                      <img
                        src={vansales}
                        alt="Vansales"
                        className="w-[200px] h-[80px] md:w-[300px] md:h-[100px]"
                      />
                      <img
                        src={jastel}
                        alt="Jastel"
                        className="w-[180px] h-[80px] md:w-[280px] md:h-[100px]"
                      />
                       <img
                        src={jas}
                        alt="JAS"
                        className="w-[180px] h-[80px] md:w-[280px] md:h-[100px]"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
