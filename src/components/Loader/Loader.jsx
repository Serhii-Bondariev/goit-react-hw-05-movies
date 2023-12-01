// import { Blocks } from 'react-loader-spinner';

import styles from './Loader.module.css';
import React from 'react';


const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.center}>
  <div className={styles.ring}></div>
  <span className={styles.loading}>Loading...</span>
</div>

      
    </div>
    
    
  );
}

export default Loader;