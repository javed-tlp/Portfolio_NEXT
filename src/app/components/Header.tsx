import Image from "next/image";
import styles from "../components/Header.module.css";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaInfoCircle, FaHandshake } from 'react-icons/fa'; // Font Awesome icons

const Header: React.FC = () => (
  <div className={styles.wrapper}>
    <header className={styles.header}>
      <div className={styles.content}>
        <div className={styles.imageSection}>
          <Image
            src="/javed.png"
            alt="Javed Saifi"
            width={300}
            height={200}
            className={styles.profilePic}
          />
        </div>
        <div className={styles.textSection}>
          <h1 className={styles.title}>JAVED SAIFI</h1>
          <p className={styles.subtitle}>Node.js | Angular | Next.js</p>
          <p className={styles.description}>
            I engineer high-performance web applications leveraging Node.js and cutting-edge frameworks such as Angular and Next.js, dedicated to delivering exceptional user experiences and scalable solutions.
          </p>
          <p className={styles.location}>Based in Faridabad, Haryana, India</p>
          <p className={styles.contact}>+91-8527019853 | saifijaved616@gmail.com</p>
          
          <div className={styles.socialLinks}>
            <a href="https://x.com/javedsaifi2808" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/javed-saifi-b9660418a/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaLinkedin /></a>
            <a href="https://github.com/javed-tlp" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaGithub /></a>
            <a href="https://www.instagram.com/javed_saifi_0786/" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaInstagram /></a>
            <a href="/about" className={styles.aboutButton}>
              <FaInfoCircle className={styles.icon} /> {/* Updated About button icon */}
              <span>About Me</span>
            </a>
            <a href="/contact" className={styles.aboutButton}>
              <FaHandshake className={styles.icon} /> {/* Updated About button icon */}
              <span>Connect Me</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
