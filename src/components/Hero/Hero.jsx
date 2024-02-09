import React from 'react'
import { getImageUrl } from '../../utils'

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi I'm Vishal Ranjan</h1>
            <p className={styles.description}>
                I'm a full stack developer with 5 years of experience with PHP, MySQL, JavaScript.
                Currently learning MERN stack to enhance my frontend as well as backend skills.<br /><br />
                Reach out if you'd like to learn more!
            </p>
            <a href='mailto:vishalranjanrv@gmail.com' className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img
            src={getImageUrl('hero/heroImage.png')}
            alt="Hero image of me"
            className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  );
};