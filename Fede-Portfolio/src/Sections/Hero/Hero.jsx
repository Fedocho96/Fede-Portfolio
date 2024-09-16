import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import twitterLight from '../../assets/twitter-light.svg'
import githubLight from '../../assets/github-light.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'


const Hero = () => {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  
  return (
    <section id='hero'>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero}
         src={heroImg} 
         alt="profile picture"
         />
        <img className={styles.colorMode}
         src={themeIcon} 
         alt="Color mode icon"
         onClick={toggleTheme}
        />
        <div className={styles.info}>
          <h1>Federico <br/> Rosales</h1>
          <h2>Fullstack Developer</h2>
          <span>
            <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="" />
            </a>
            <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="" />
            </a>
            <a href="https://Linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="" />
            </a>
          </span>
          <p>With a passion for music, coffe and developing web apps.
             Get in touch
          </p>
          <a href={CV} download>
            <button className='hover'> Resume</button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero