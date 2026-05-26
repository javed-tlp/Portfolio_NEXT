"use client"; // Mark this file as a Client Component

import React, { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faStar, faBriefcase, faGraduationCap, faTools, faDownload, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import styles from "./navbar.module.css";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={styles.nav}>
      {/* Menu toggle for mobile */}
      <div className={`${styles["menu-toggle"]} ${menuOpen ? styles["active"] : ""}`} onClick={toggleMenu}>
        <div></div>
      </div>

      {/* Logo on the left linking to the home page */}
      <div className={styles.logo}>
        <Link href="/">
          <span className={styles["logo-text"]}>J</span>
        </Link>
      </div>

      {/* Navigation items */}
      <ul className={`${styles["nav-links"]} ${menuOpen ? styles["show"] : styles["hide"]}`}>
        <li onClick={closeMenu}>
          <Link href="/skills">
            <FontAwesomeIcon icon={faStar} className={styles["nav-icon"]} />
            Skills
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link href="/projects">
            <FontAwesomeIcon icon={faHome} className={styles["nav-icon"]} />
            Projects
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link href="/experience">
            <FontAwesomeIcon icon={faBriefcase} className={styles["nav-icon"]} />
            Experience
          </Link>
        </li>
        
        
        <li onClick={closeMenu}>
          <Link href="/tools">
            <FontAwesomeIcon icon={faTools} className={styles["nav-icon"]} />
            Tools
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link href="/education">
            <FontAwesomeIcon icon={faGraduationCap} className={styles["nav-icon"]} />
            Education
          </Link>
        </li>
        <li onClick={closeMenu}>
          <a href="/JavedSaifi_Resume.pdf" download className={styles["cv-link"]}>
            <FontAwesomeIcon icon={faDownload} className={styles["nav-icon"]} />
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
