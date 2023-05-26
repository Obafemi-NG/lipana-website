import React from "react";
import styles from "./Subscribe.module.css";

import notificationBell from "../../assets/notification-bing.svg";
import spiral from "../../assets/spiral.png";

const Subscribe = () => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.content}>
        <img src={spiral} alt="spiral_icon" className={styles.spiralIcon} />
        <div className={styles.left}>
          <img src={notificationBell} alt="notification" />
          <div className={styles.messages}>
            <p className={styles.title}> Get our latest post </p>
            <p className={styles.subTitle}>
              {" "}
              Enter your email address to subscribe to our blog.{" "}
            </p>
          </div>
        </div>
        <div className={styles.right}>
          <input
            type="text"
            placeholder="youremail@gmail.com"
            className={styles.input}
          />
          <button className={styles.subscribeBtn}> Sign Up </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
