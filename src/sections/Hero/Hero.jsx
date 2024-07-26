import React from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import twitterLight from '../../assets/twitter-light.svg';
import githubLight from '../../assets/github-light.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import CV from '../../assets/CV.pdf';

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Nikki Johnson"
        />
      </div>
      <div className={styles.info}>
        <h1>
          Nikki 
          <br />
          Johnson
        </h1>
        <h2> Application Engineer / Frontend Developer </h2>
        <span>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src={twitterLight} alt="Twitter icon" />
          </a>
          <a href="https://github.com/NikkiJWebDevOps/Nikki-J-Portfolio" target="_blank" rel="noreferrer">
            <img src={githubLight} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/nikkijohnsonwebdev/" target="_blank" rel="noreferrer">
            <img src={linkedinLight} alt="Linkedin icon" />
          </a>
        </span>
        <p className={`${styles.description} ${styles.center}`}>
          With a passion for developing modern web applications for commercial businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Download Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
