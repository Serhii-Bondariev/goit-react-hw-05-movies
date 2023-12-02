import React from 'react';
import styles from './Footer.module.css';




const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
   
   


<div className={styles.footerSocial}>
  <p className={styles.footerText}>Follow me:</p>
</div >
    <ul className={styles.footerList}>
      <li className={styles.footerItem}><a className='footerSocLink' href="www.facebook.com" rel='noreferrer noopener' target='_blank'>Facebook</a></li>
      <li className={styles.footerItem}><a className='footerSocLink' href="www.twitter.com" rel='noreferrer noopener' target='_blank'>Twitter</a></li>
      <li className={styles.footerItem}><a className='footerSocLink' href="www.instagram.com" rel='noreferrer noopener' target='_blank'>Instagram</a></li>
      <li className={styles.footerItem}><a className='footerSocLink' href="www.linkedin.com" rel='noreferrer noopener' target='_blank'>LinkedIn</a></li>
      <li className={styles.footerItem}><a className='footerSocLink' href="https://github.com/Serhii-Bondariev" rel='noreferrer noopener' target='_blank'>GitHub</a></li>
    </ul>
    <div>
    <p className={styles.footerText}>Developed and designed  &copy;<a href="https://github.com/Serhii-Bondariev" rel='noreferrer noopener' target='_blank' >Serhii Bondariev</a></p>
    </div>
  </footer>
        </div>
    );
}

export default Footer;