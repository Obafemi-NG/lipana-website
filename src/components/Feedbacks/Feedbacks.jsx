import React from "react";
import styles from "./Feedbacks.module.css";
import star from "../../assets/longstar.svg";

const Feedbacks = () => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <img src={star} alt="star" className={styles.star} />
          <p className={styles.servicesText}> What Customer Say </p>
          <img src={star} alt="star" className={styles.star} />
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
