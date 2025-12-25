
import React from "react";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>

      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:bharathichandana29@email.com">
            bharathichandana29@email.com
          </a>
        </li>

        <li className={styles.link}>
          <img src="/contact/linkedinIcon.png" alt="LinkedIn icon" />
          <a
            href="https://www.linkedin.com/in/bharathi-chandana-992587312"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/BharathiChandana
          </a>
        </li>

        <li className={styles.link}>
          <img src="/contact/githubIcon.png" alt="Github icon" />
          <a
            href="https://github.com/jyothichandana"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/jyothichandana
          </a>
        </li>
      </ul>
    </footer>
  );
};
