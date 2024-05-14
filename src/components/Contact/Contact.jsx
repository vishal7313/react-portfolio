import React from 'react'
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
            <br />
            <br />
            <p>
                <a href='https://vishal7313.github.io/react-portfolio/assets/resume/vishal-resume.pdf' className={styles.contactBtn} download="vishal-resume.pdf">Resume</a>
            </p>
        </div>

        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                <a href="mailto:vishalranjanrv@gmail.com">vishalranjanrv@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img
                    src={getImageUrl("contact/linkedinIcon.png")}
                    alt="LinkedIn icon"
                />
                <a href="https://www.linkedin.com/in/vishal-ranjan-5948aa152/">LinkedIn Profile</a>
            </li>

            <li className={styles.link}> 
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                <a href="https://github.com/vishal7313">Github Profile</a>
            </li>
            <li className={styles.link}> 
                
            </li>
        </ul>
    </footer>
  )
}
