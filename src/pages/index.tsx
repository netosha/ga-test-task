import React from 'react';
import type { NextPage } from 'next';
import Hero from '@components/Hero';

import styles from '../styles/Index.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
};

export default Home;
