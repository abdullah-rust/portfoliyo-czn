import React from "react";
import { motion } from "framer-motion";
import "./App.css";
import imgIcon from "./assets/img.jpeg";
export default function App() {
  return (
    <div className="container">
      <motion.div
        className="card"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="image-placeholder">
          {/* Add image here */}
          <img src={imgIcon} alt="Salman Raza" className="profile-img" />
        </div>
        <h1 className="name">Salman Raza</h1>
        <p className="role">Sales Associate</p>
        <section className="about">
          <h2>About Me</h2>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
          >
            Dedicated and professional sales associate with 10 years of
            experience in footwear retail. Skilled in customer service, product
            management, and building strong relationships that drive repeat
            business.
          </motion.p>
        </section>

        <motion.section className="experience">
          <h2>Work Experience</h2>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
          >
            <strong>Sales Associate – Shoes & Footwear Shop</strong>
            <br />
            Alipur Chatha, Wazirabad
            <br />
            2015 – 2025 (10 years)
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
          >
            <li>
              Sold ladies and gents shoes with excellent customer satisfaction.
            </li>
            <li>
              Managed inventory and organized attractive product displays.
            </li>
            <li>Built strong relationships with repeat customers.</li>
            <li>
              Improved overall sales through personalized recommendations.
            </li>
          </motion.ul>
        </motion.section>

        <motion.section className="contact">
          <h2>Contact</h2>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
          >
            <strong>Phone:</strong> +92 344 6212064
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
          >
            <strong>Email:</strong> hello@reallygreatsite.com
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3 }}
          >
            <strong>Address:</strong> Alipur Chatha, Wazirabad, Pakistan
          </motion.p>
        </motion.section>
      </motion.div>
    </div>
  );
}
