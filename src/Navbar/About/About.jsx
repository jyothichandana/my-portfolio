import React, { useState } from "react";
import styles from "./About.module.css";

import AboutImg from "@/assets/AboutImage.png";

import serverIcon from "@/assets/serverIcon.png";
import cursorIcon from "@/assets/cursorIcon.png";


const About = () => {

  const [activeItem, setActiveItem] = useState(null);

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>ABOUT</h2>

      <div className={styles.content}>
        <img src={AboutImg} alt="about" className={styles.AboutImage} />

        <ul className={styles.aboutItems}>
          
          <li
            className={`${styles.aboutItem} ${
              activeItem === "frontend" ? styles.active : ""
            }`}
            onClick={() => setActiveItem("frontend")}
          >
            <img src={cursorIcon} alt="frontend" />
            <div>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites.
              </p>
            </div>
          </li>

          
          <li
            className={`${styles.aboutItem} ${
              activeItem === "backend" ? styles.active : ""
            }`}
            onClick={() => setActiveItem("backend")}
          >
            <img src={serverIcon} alt="backend" />
            <div>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs.
              </p>
            </div>
          </li>

          
          <li
            className={`${styles.aboutItem} ${
              activeItem === "ui" ? styles.active : ""
            }`}
            onClick={() => setActiveItem("ui")}
          >
            <img src={cursorIcon} alt="ui" />
            <div>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and created design
                systems as well.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
