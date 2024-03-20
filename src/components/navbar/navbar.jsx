'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import styles from './navbar.module.css'

const Navbar = ({ sections }) => {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      sections.forEach(section => {
        const sectionRef = document.getElementById(section.id);
        if (sectionRef) {
          const { offsetTop } = sectionRef;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
          }
        }
      });
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <nav className={styles.navbar}>
      <div className={styles.background}></div>
      <ul className={styles.navList}>
        {sections.map(section => (
          <li key={section.id}>
            <Link href={`#${section.id}`} passHref>
              <div className={activeSection === section.id ? styles.active : ''}>
                {section.title}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;