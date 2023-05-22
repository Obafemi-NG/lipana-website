import React from "react";
import styles from "./Feature.module.css";

import star from "../../assets/longstar.svg";

const Feature = () => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <img src={star} alt="star" className={styles.star} />
          <p className={styles.title}>
            {" "}
            Features to grow your{" "}
            <span className={styles.business}> business </span>{" "}
          </p>
        </div>

        <p className={styles.bottomTitle}>
          {" "}
          <span className={styles.business}> Simple Transparent </span> Pricing.
          No Monthly Fees.{" "}
        </p>
        <p className={styles.subTitle}>
          {" "}
          We only make money, when you make more.{" "}
        </p>
      </div>
    </div>
  );
};

export default Feature;
