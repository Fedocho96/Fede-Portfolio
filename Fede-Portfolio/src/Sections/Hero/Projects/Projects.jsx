import React from 'react'
import styles from './Projects.Styles.module.css'
import fedelogo from '../../../public/logo-fede.jpg'
import ProjectCard from '../../../common/ProjectCard'

const Projects = () => {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTitle'>projects</h1>
        <div className={styles.projectsContainer}>

            <ProjectCard src={fedelogo} link={'https://github.com/Fedocho96/Fede-Portfolio'}
            h3='Portfolio'
            p='Portfolio app'
            />

            
        </div>
        
    </section>
  )
}

export default Projects