import React from "react";
import styles from "./Hero.module.css";

import arrowRight from "../../assets/arrow-right.svg";
import invoices from "../../assets/invoices.png";
import dashboard from "../../assets/dashboard.png";

const Hero = () => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.content}>
        <p className={styles.title}>
          {" "}
          Easy internet payments built for Developers by{" "}
          <span className={styles.developers}> Developers </span>{" "}
        </p>
        <p className={styles.subTitle}>
          Send and receive money to anyone, anywhere in the world.
        </p>
        <button className={styles.btn}>
          Get Started{" "}
          <img
            src={arrowRight}
            alt="arrow-right"
            className={styles.arrowRight}
          />
        </button>
        <div className={styles.heroPngContainer}>
          <div className={styles.invoiceContainer}>
            <img
              src={invoices}
              alt="invoice_png"
              className={styles.invoicesPng}
            />
          </div>
          <img
            src={dashboard}
            alt="invoice_png"
            className={styles.dashboardPng}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
