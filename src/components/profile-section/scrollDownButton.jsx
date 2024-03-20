'use client'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './scrollDownButton.module.css'

const ScrollDownButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollButton(scrollY === 0);
    };

    // Agregar el evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento cuando el componente se desmonte
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