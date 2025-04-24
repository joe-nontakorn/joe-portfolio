/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"; // อย่าลืม import
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
    <section id="contact" className="scroll-mt-24 text-white">
  <h2 className="text-3xl font-bold text-center mb-10">
    Get in Touch with Me!
  </h2>

  <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">
    {/* 📍 Card ซ้าย */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full lg:w-1/3"
    >
      <Card className="w-full px-6 py-8 text-center text-gray-800 dark:text-white">
        <div className="space-y-6 text-white">
          <div>
            <p className="text-orange-500 text-2xl">📍</p>
            <h3 className="font-semibold text-lg">Our Office:</h3>
            <p>Bangkok, Thailand</p>
          </div>
          <div>
            <p className="text-orange-500 text-2xl">📞</p>
            <h3 className="font-semibold text-lg">Contact Number:</h3>
            <p>090-9319022</p>
          </div>
          <div>
            <p className="text-orange-500 text-2xl">✉️</p>
            <h3 className="font-semibold text-lg">Email Us:</h3>
            <p>nontakorn.joe91@gmail.com</p>
          </div>
        </div>
      </Card>
    </motion.div>

    {/* 📬 Card ขวา */}
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full lg:w-2/3"
    >
      <Card className="w-full px-6 py-8 text-gray-800 dark:text-white">
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
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="Steve Milner"
                className="w-full p-3 rounded bg-white text-black"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email Address</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="hello@websitename.com"
                className="w-full p-3 rounded bg-white text-black"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1 font-medium">Your Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write Your message"
              className="w-full p-3 rounded bg-white text-black"
              required
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded transition"
          >
            Send Me Message ✉️
          </button>
        </form>
      </Card>
    </motion.div>
  </div>
</section>

  );
}

export default Contact;
