import React from "react";
import styles from "./ServicesCard.module.css";
import lightArrow from "../../assets/Arrow-light.svg";
import darkArrow from "../../assets/Arrow-dark.svg";

const ServicesCard = ({ dark, imgLink, title, description }) => {
  return (
    <div
      className={`${styles.cardContainer} ${
        dark ? styles.darkCardContainer : styles.lightCardContainer
      } `}
    >
      <img src={imgLink} alt={title} />
      <p className={styles.title}> {title} </p>
      <p className={styles.description}> {description} </p>
      <div className={styles.learnMoreContainer}>
        <p className={styles.learnMore}>Learn More </p>
        <img
          src={dark ? darkArrow : lightArrow}
          alt="arrow"
          className={styles.arrow}
        />
      </div>
    </div>
  );
};

export default ServicesCard;
