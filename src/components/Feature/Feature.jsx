import React from "react";
import styles from "./Feature.module.css";

import star from "../../assets/longstar.svg";
import Carousel from "../Carousel/Carousel";
import { featureData } from "../../Data/featureData";
import featureImage from "../../assets/feature-image.png";

const Feature = () => {
  return (
    <div className={styles.componentContainer}>
      <img src={featureImage} alt="feature" className={styles.featureImage} />
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <img src={star} alt="star" className={styles.star} />
          <p className={styles.title}>
            {" "}
            Features to grow your{" "}
            <span className={styles.business}> business </span>{" "}
          </p>
        </div>

        <Carousel items={featureData} />
      </div>
    </div>
  );
};

export default Feature;
