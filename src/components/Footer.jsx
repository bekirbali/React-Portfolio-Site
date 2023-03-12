import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["social-icons"]}>
        <NavLink
          className={styles.linkedIn}
          to="https://www.linkedin.com/in/bekirbali/"
          target="_blank"
        >
          <BsLinkedin />
        </NavLink>
        <NavLink
          className={styles.gitHub}
          to="https://github.com/bekirbali"
          target="_blank"
        >
          <BsGithub />
        </NavLink>
        <NavLink
          className={styles.instagram}
          to="https://www.instagram.com/bekirfurkan43/"
          target="_blank"
        >
          <BsInstagram />
        </NavLink>
      </div>
      <div className={styles.copyright}>&copy; Copyright 2023</div>
    </footer>
  );
};

export default Footer;
