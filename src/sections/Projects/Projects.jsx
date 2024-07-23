import React from 'react';
import styles from './ProjectsStyles.module.css';
import thezenpupabq from '../../assets/thezenpupabq.jpg';
import lasVegas from '../../assets/LV ACES.jpg';
import gitHub from '../../assets/github.jpg';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={thezenpupabq}
          link="https://thezenpupabq.wordpress.com/"
          h3="The ZenPup Abq"
          p="For all your grooming needs"
        />
        <ProjectCard
          src={lasVegas}
          link="https://aces.wnba.com/"
          h3="Las Vegas Aces"
          p="CHAMPS Las Vegas Aces"
        />
        <ProjectCard
          src={gitHub}
          link="https://github.com/NikkiJWebDevOps"
          h3="GitHub"
          p="Repository of all my projects"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/adrianhajdin/project_fitness_app"
          h3="Project Fitness App in GitHub"
          p="Fitness App not my work, using for display"
        />
      </div>
    </section>
  );
}

export default Projects;
