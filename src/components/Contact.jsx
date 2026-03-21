/* eslint-disable no-unused-vars */
// Contact.jsx — MATRIX THEME
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Card from "./Card";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l4qrhcj",
        "template_wqf05yc",
        form.current,
        "_h91faZIPzhNjdv6i"
      )
      .then(
        (result) => {
          console.log("✅ Email sent:", result.text);
          alert("ส่งข้อความเรียบร้อยแล้ว ขอบคุณที่ติดต่อ!");
          form.current.reset();
        },
        (error) => {
          console.log("❌ ส่งไม่สำเร็จ:", error.text);
          alert("เกิดข้อผิดพลาดในการส่ง กรุณาลองใหม่อีกครั้ง");
        }
      );
  };

  return (
    <section id="contact" className="scroll-mt-24 text-green-300">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-400 font-matrix neon-green-subtle">
        {"//"} GET_IN_TOUCH
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full lg:w-1/3"
        >
          <Card className="w-full px-6 py-8 text-center">
            <div className="space-y-6 text-green-300/80">
              <div>
                <p className="text-green-400 text-2xl">📍</p>
                <h3 className="font-semibold text-lg text-green-400 font-matrix">location:</h3>
                <p className="font-matrix">Bangkok, Thailand</p>
              </div>
              <div>
                <p className="text-green-400 text-2xl">📞</p>
                <h3 className="font-semibold text-lg text-green-400 font-matrix">phone:</h3>
                <p className="font-matrix">090-9319022</p>
              </div>
              <div>
                <p className="text-green-400 text-2xl">✉️</p>
                <h3 className="font-semibold text-lg text-green-400 font-matrix">email:</h3>
                <p className="font-matrix">nontakorn.joe91@gmail.com</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full lg:w-2/3"
        >
          <Card className="w-full px-6 py-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="hidden"
                name="time"
                value={new Date().toLocaleString("th-TH", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              />

              {/* Full Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium text-green-400 font-matrix text-sm">
                    full_name:
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Neo Anderson"
                    className="w-full p-3 rounded matrix-input"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-green-400 font-matrix text-sm">
                    email_address:
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="neo@matrix.io"
                    className="w-full p-3 rounded matrix-input"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-1 font-medium text-green-400 font-matrix text-sm">
                  message:
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Follow the white rabbit..."
                  className="w-full p-3 rounded matrix-input"
                  required
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-green-500/20 hover:bg-green-500/40 text-green-400 font-semibold py-3 px-6 rounded border border-green-500/40 transition-all duration-300 font-matrix hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] neon-green-subtle"
              >
                {">"} send_message.exe
              </button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
