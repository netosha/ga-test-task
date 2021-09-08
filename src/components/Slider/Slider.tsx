import React from 'react';
import { motion } from 'framer-motion';
import cn from 'clsx';
import styles from './Slider.module.scss';
import { SliderProps } from './Slider.types';

const Slider: React.FC<SliderProps> = (props) => {
  const { mode, toggleMode } = props;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/interactive-supports-focus
    <div className={styles.wrapper} role="button" onClick={toggleMode}>
      <div className={cn(styles.content, mode === 'masks' && styles.masks)}>
        Masks
      </div>
      <div className={styles.content}>Video</div>
      <div
        className={cn(
          styles.knob_wrapper,
          mode === 'video' && styles.knob_toggled,
        )}
      >
        <motion.div layout="position" className={styles.knob} />
      </div>
    </div>
  );
};

export default Slider;
