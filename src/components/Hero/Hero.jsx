import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I'm Vishal Ranjan</h1>
            <p className={styles.description}>
                I am a confident full-stack developer with extensive expertise of five years in PHP, MySQL, and JavaScript.
                I am currently mastering the MERN stack to elevate my skills in both frontend and backend development. <br /><br />
                If you want to learn more, I am more than happy to share my knowledge and experience with you.
                Feel free to reach out to me.
            </p>
            <a href='mailto:vishalranjanrv@gmail.com' className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img
            src={getImageUrl('hero/hero-portfolio.png')}
            alt="Hero image of me"
            className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
};