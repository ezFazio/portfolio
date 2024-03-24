'use client'
import { useEffect, useState } from 'react';
import styles from './scrollDownButton.module.css'

const ScrollDownButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollButton(scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (

    <button className={`${styles.scrollDown} ${showScrollButton ? styles.visible : styles.hidden}`} onClick={(e) => {
      e.preventDefault();
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    }}>
    </button>
  );
};

export default ScrollDownButton