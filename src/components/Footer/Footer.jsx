import React from 'react';
import styles from './Footer.module.css';




const Footer = () => {
    return (
        <div>
 <footer className={styles.footer}>
<div className={styles.container}>
  <p className={styles.titleAndLink}>Follow my social media</p>
  <ul className={styles.socialList}>
    <li className={styles.socialList}><a className={styles.titleAndLink} href="https://www.facebook.com/" target="_blank" rel="noreferrer">
        <i  className={styles.fab} tabindex="0"></i>
      </a></li>
    <li className={styles.socialList}><a className={styles.titleAndLink} href="https://codepen.io/" target="_blank" rel="noreferrer">
        <i className="fab fa-codepen" tabindex="0"></i>
      </a></li>
    <li className={styles.socialList}><a className={styles.titleAndLink} href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <i className="fab fa-instagram" tabindex="0"></i>
      </a></li>
    <li className={styles.socialList}><a className={styles.titleAndLink} href="https://github.com/" target="_blank" rel="noreferrer">
        <i className="fab fa-github" tabindex="0"></i>
      </a></li>
    <li className={styles.socialList}><a className={styles.titleLink} href="www.youtube.com" rel="noreferrer noopener">
        <i className="fab fa-youtube" tabindex="0" target="_blank" rel="noreferrer"></i>
      </a></li>
    <li className={styles.socialList}><a className={styles.titleAndLink} href="www.pinterest.com" rel="noreferrer noopener">
        <i className="fab fa-pinterest" tabindex="0" target="_blank" rel="noreferrer"></i>
      </a></li>
  </ul>
</div>
   

  </footer>
        </div>
    );
}

export default Footer;



