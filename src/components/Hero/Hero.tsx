import React from 'react';
import cn from 'clsx';
import Header from '@components/Header';
import ItemInfo from '@components/Hero/ItemInfo';

import Slider from '@components/Slider';
import { useMode } from '@src/contexts/heroMode';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  const { mode, toggleMode } = useMode();
  return (
    <section
      className={cn(
        styles.wrapper,
        mode === 'video' && styles.video_background,
      )}
    >
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
            bid={{
              currency: 'ETH',
              amount: 3.22,
              till: new Date(new Date().setDate(new Date().getDate() + 1)),
            }}
          />
        </div>
      </div>
      <div className={styles.slider}>
        <Slider mode={mode} toggleMode={toggleMode} />
      </div>
      <div className={styles.other_actions}>
        <button type="button" className={styles.connect_wallet_button}>
          Connect Wallet
        </button>
        <button type="button" className={styles.add_mask_button}>
          Add Mask
        </button>
      </div>
    </section>
  );
};

export default Hero;
