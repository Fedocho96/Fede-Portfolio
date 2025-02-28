import React from "react";
import styles from "./Projects.Styles.module.css";
import fedelogo from "../../public/logo-fede.jpg";
import movieapplogo from "../../public/movieapplogo.jpg";
import ecommercelogo from "../../public/E-commercelogo.jpg";
import Onionlogo from "../../public/Onionlogo.jpg";
import mililogo from "../../public/mililogo.jpg";
import ProjectCard from "../../common/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={mililogo}
          link={"https://mrgimnasia.vercel.app/"}
          h3="MR Gimnasia"
          p="Artistic Gymnastics Club"
        />

        <ProjectCard
          src={fedelogo}
          link={"https://github.com/Fedocho96/Fede-Portfolio"}
          h3="Portfolio"
          p="Portfolio mobile"
        />

        <ProjectCard
          src={movieapplogo}
          link={"https://the-alley-movie-app.vercel.app/"}
          h3="Movie billboard "
          p="Movies app"
        />

        <ProjectCard
          src={ecommercelogo}
          link={"https://github.com/Fedocho96/CoderHouse-Bootcamp"}
          h3="E-commerce"
          p="Tech E-commerce"
        />

        <ProjectCard
          src={Onionlogo}
          link={
            "https://drive.google.com/file/d/1KQLRnwOdTvz8cLdle_av-5pFPr3LkI7V/view?usp=drive_link"
          }
          h3="E-commerce"
          p="Onion E-commerce"
        />
      </div>
    </section>
  );
};

export default Projects;
