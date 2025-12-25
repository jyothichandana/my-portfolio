import React from "react";
import styles from "./Hero.module.css";
import HeroImg from "../../../assets/hero/HeroImage.png";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Bharathi</h1>

        <p className={styles.description}>
          I am a MERN Stack Developer with a strong interest in building
          responsive web applications and learning modern web technologies.
        </p>

        <a
          href="mailto:bharathichandana29@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>

      
      <img
        src={HeroImg}
        alt="Hero"
        className={styles.HeroImg}
      />
    </section>
  );
};

export default Hero;
