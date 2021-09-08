import React from 'react';
import Header from '@components/Header';
import { useWindowSize } from '@src/utils';
import ItemInfo from '@components/Hero/ItemInfo';

import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  const { innerWidth } = useWindowSize();
  return (
    <section className={styles.wrapper}>
      <div className={styles.logo_wrapper}>
        <img src="/masksnft.svg" className={styles.logo} alt="text-logo" />
      </div>
      <div className={styles.header_wrapper}>
        <Header />
      </div>

      <div className={styles.content}>
        <div className={styles.item} />
        <div className={styles.info}>
          <ItemInfo
            author="@cameron"
            name="Sometimes Typhoons Come"
            likes={24}
            minimumBid={5}
            till={new Date()}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
