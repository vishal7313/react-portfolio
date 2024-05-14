import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Developer</h3>
                            <p>
                                As a professional frontend developer, I possess the necessary skills and expertise to design and develop responsive and optimized websites.
                                My experience in this field has equipped me with a comprehensive understanding of what it takes to create a website
                                that is both user-friendly and aesthetically appealing.
                                I am confident that I can leverage my skills and knowledge to deliver a website that meets your expectations.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Developer</h3>
                            <p>
                                I possess extensive expertise in developing highly efficient and optimized back-end systems and APIs
                                that can significantly enhance the organization's technological capabilities.
                                With my skill set, I am confident that I can deliver exceptional results and help stay ahead of the curve.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>
                            I have vast experience designing landing pages and developing design systems.
                            Let me help you create an aesthetically pleasing and user-friendly landing page that aligns with your website goals.
                            I am confident that my attention to detail and design principles will exceed your expectations.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};