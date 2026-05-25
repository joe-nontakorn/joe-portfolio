/* eslint-disable no-unused-vars */
// Contact.jsx — Modern Theme (Responsive + Theme-aware)
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
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
    <section id="contact" className="scroll-mt-28">
      <div className="mb-8 sm:mb-11 text-center">
        <p className="section-kicker justify-center">Contact</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold gradient-text section-heading">
          Get In Touch
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-5 sm:gap-6 justify-center items-start">
        {/* Contact Info Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full lg:w-1/3"
        >
          <Card className="w-full px-4 sm:px-6 py-6 sm:py-8">
            <div className="space-y-3">
              <div className="contact-row">
                <span className="icon-frame h-10 w-10">
                  <FiMapPin size={18} />
                </span>
                <div>
                  <h3 className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>
                    Location
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>Bangkok, Thailand</p>
                </div>
              </div>
              <a href="tel:0909319022" className="contact-row">
                <span className="icon-frame h-10 w-10">
                  <FiPhone size={18} />
                </span>
                <div>
                  <h3 className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>
                    Phone
                  </h3>
                  <p style={{ color: "var(--text-secondary)" }}>090-9319022</p>
                </div>
              </a>
              <a href="mailto:nontakorn.joe91@gmail.com" className="contact-row">
                <span className="icon-frame h-10 w-10">
                  <FiMail size={18} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-semibold text-base" style={{ color: "var(--text-primary)" }}>
                    Email
                  </h3>
                  <p className="text-sm sm:text-base break-all" style={{ color: "var(--text-secondary)" }}>
                    nontakorn.joe91@gmail.com
                  </p>
                </div>
              </a>
            </div>
          </Card>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full lg:w-2/3"
        >
          <Card className="w-full px-4 sm:px-6 py-6 sm:py-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-5">
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
                  <label
                    className="block mb-2 font-medium text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your name"
                    className="w-full p-3 modern-input"
                  />
                </div>
                <div>
                  <label
                    className="block mb-2 font-medium text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="your@email.com"
                    className="w-full p-3 modern-input"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  className="block mb-2 font-medium text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full p-3 modern-input"
                  required
                ></textarea>
              </div>

              {/* Submit */}
              <button type="submit" className="btn-primary w-full sm:w-auto">
                Send Message
                <FiSend size={17} />
              </button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
