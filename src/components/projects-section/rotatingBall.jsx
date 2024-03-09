'use client'
import styles from "./projects.module.css"
import { useEffect, useRef, useState } from "react"

const RotatingBall = () => {
  const ballRef = useRef(null)

  const handleScroll = () => {
    const scroll = window.scrollY;
    const ball = ballRef.current;

    if (ball) {
      const rotation = -scroll ;
      const easeFactor = easeInOutQuad(Math.min(scroll / window.innerHeight, 1))
      const translateX = easeFactor * window.innerWidth
      ball.style.transform = `translateX(-${translateX}px) rotate(${rotation}deg)`
    }
  };

  const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

  useEffect(() => {
    if (window) {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
    }
  }, []);


  return (
    <div className={styles.rotatingBall}>
      <img ref={ballRef} src="/img/ball.svg" className={styles.ball}></img>
    </div>
  )
}

export default RotatingBall;