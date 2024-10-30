import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Federico Rosales. <br />
        Please hire me.
      </p>
    </section>
  );
}

export default Footer;