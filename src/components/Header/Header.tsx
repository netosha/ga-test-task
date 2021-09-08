import React from 'react';
import Slider from '@components/Slider';
import { useMode } from '@contexts/heroMode';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  const { mode, toggleMode } = useMode();

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src="/mssft.svg" alt="short-logo" />
      </div>
      <div className={styles.slider_container}>
        <Slider mode={mode} toggleMode={toggleMode} />
      </div>
      <button type="button" className={styles.plus_button}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 6.53333H14V7.46666H0V6.53333Z"
            fill="currentColor"
          />
          <rect
            x="7.46667"
            width="14"
            height="0.933333"
            transform="rotate(90 7.46667 0)"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
};

export default Header;
