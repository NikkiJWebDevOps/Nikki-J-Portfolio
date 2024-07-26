import React from 'react';
import styles from './SkillsStyles.module.css'; // Make sure this is the correct path

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.title}>Skills</h1>
      <ul className={styles.skillsList}>
        <li className={styles.skill}>JavaScript</li>
        <li className={styles.skill}>React</li>
        <li className={styles.skill}>CSS</li>
        <li className={styles.skill}>HTML</li>
        {/* Add other skills here */}
      </ul>
    </section>
  );
}

export default Skills;
