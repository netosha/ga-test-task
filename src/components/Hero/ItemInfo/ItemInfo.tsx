import React from 'react';
import { getTimeDifference } from '@src/utils';
import styles from './ItemInfo.module.scss';
import { ItemInfoProps } from './ItemInfo.types';

const ItemInfo: React.FC<ItemInfoProps> = (props) => {
  const { author, name, likes, bid } = props;
  const { amount, till, currency } = bid;

  const [time, setTime] = React.useState<{
    hours: number;
    minutes: number;
    seconds: number;
  }>({ hours: 0, minutes: 0, seconds: 0 });

  const updateTimer = () => {
    const diff = getTimeDifference(new Date(), till);

    setTime({ ...diff });
    setTimeout(updateTimer, 1000);
  };

  React.useEffect(() => {
    updateTimer();
    setTimeout(updateTimer, 1000);
  }, []);

  return (
    <div className={styles.wrapper}>
      <p className={styles.author}>{author}</p>
      <a className={styles.name}>{name}</a>
      <div className={styles.misc}>
        <button type="button" className={styles.like_button}>
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 13C2.38 8.69022 0 6.5 0 3.88587C0 1.69565 1.68 0 3.85 0C5.04 0 6.23 0.565217 7 1.4837C7.77 0.565217 8.96 0 10.15 0C12.32 0 14 1.69565 14 3.88587C14 6.57065 11.62 8.76087 7 13Z"
              fill="currentColor"
            />
          </svg>
          {likes}
        </button>
        <button type="button" className={styles.more_info_button}>
          More info
          <svg
            width="5"
            height="8"
            viewBox="0 0 5 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.174032 0.920905C-0.0580106 0.710235 -0.0580106 0.368672 0.174032 0.158002C0.406075 -0.0526674 0.782291 -0.0526674 1.01433 0.158002L4.82597 3.61855C5.05801 3.82922 5.05801 4.17078 4.82597 4.38145L1.01433 7.842C0.782291 8.05267 0.406075 8.05267 0.174032 7.842C-0.0580106 7.63133 -0.0580106 7.28976 0.174032 7.0791L3.56551 4L0.174032 0.920905Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      <button className={styles.place_button} type="button">
        Place a Bid
      </button>
      <div className={styles.additional_info}>
        <div className={styles.bid}>
          <span className={styles.bid_label}>Minimum bid</span>
          <span className={styles.bid_amount}>
            {amount} {currency}
          </span>
          <span className={styles.bid_fiat}>$ 420</span>
        </div>
        <div className={styles.divider} />
        <div className={styles.timer_wrapper}>
          <div className={styles.timer_label}>Auction ending in</div>
          <div className={styles.timer}>
            <div className={styles.timer_section}>
              {time.hours}
              <span className={styles.timer_mark}>Hours</span>
            </div>
            <div className={styles.timer_section}>:</div>
            <div className={styles.timer_section}>
              {time.minutes}
              <span className={styles.timer_mark}>Minutes</span>
            </div>
            <div className={styles.timer_section}>:</div>

            <div className={styles.timer_section}>
              {time.seconds}
              <span className={styles.timer_mark}>Seconds</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemInfo;
