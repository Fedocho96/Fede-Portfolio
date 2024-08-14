import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeIcon from '../../assets/sun.svg'
import twitterIcon from '../../assets/twitter-light.svg'

const Hero = () => {
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
        />
        <div className={styles.info}>
          <h1>Federico <br/> Rosales</h1>
          <h2>Fullstack Developer</h2>
          <span>
            <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="" />
            </a>
          </span>
        </div>
      </div>
    </section>
  )
}

export default Hero