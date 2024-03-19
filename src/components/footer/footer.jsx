import Link from "next/link";
import Socials from "../shared/socials";
import styles from "./footer.module.css"


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={styles.footer}>
      <div className={[styles.column, styles.columnLeft].join(' ')}>
        <h2>Contact</h2>
        <Socials />
        <Link href="mailto:ezfazio@gmail.com?Subject=Hi%20I%27m%20contacting%20you%20from%20your%20Portfolio">ezfazio@gmail.com</Link>
      </div>
      <div className={[styles.column, styles.columnCenter].join(' ')}>
        Copyright {year}
      </div>
      <div className={[styles.column, styles.columnRight].join(' ')}>
        <img
          src="/img/brain.svg"
          className={styles.logoImage}
          alt="Brain icon"
          key="footer-brain"
        />
      </div>

    </div>
  )
}

export default Footer;