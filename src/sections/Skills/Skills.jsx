import React from 'react';
import styles from './SkillsStyles.module.css'; // Make sure this is the correct path

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.title}>Skills</h1>
      <div className={styles.skillsList}>
        <div className={styles.skill}>JavaScript</div>
        <div className={styles.skill}>React</div>
        <div className={styles.skill}>CSS</div>
        <div className={styles.skill}>HTML</div>
        {/* Add other skills here */}
      </div>
    </section>
  );
}

export default Skills;
