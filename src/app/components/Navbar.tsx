"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaStar, FaHome, FaBriefcase, FaTools, FaGraduationCap, FaDownload } from "react-icons/fa";
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
            <FaStar className={styles["nav-icon"]} />
            Skills
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link href="/projects">
            <FaHome className={styles["nav-icon"]} />
            Projects
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link href="/experience">
            <FaBriefcase className={styles["nav-icon"]} />
            Experience
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link href="/tools">
            <FaTools className={styles["nav-icon"]} />
            Tools
          </Link>
        </li>
        <li onClick={closeMenu}>
          <Link href="/education">
            <FaGraduationCap className={styles["nav-icon"]} />
            Education
          </Link>
        </li>
        <li onClick={closeMenu}>
          <a href="/JavedSaifi_Resume.pdf" download className={styles["cv-link"]}>
            <FaDownload className={styles["nav-icon"]} />
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;