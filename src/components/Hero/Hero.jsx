import React from "react";
import styles from "./Hero.module.css";

import arrowRight from "../../assets/arrow-right.svg";
import invoices from "../../assets/hero-image.png";
import topology from "../../assets/Topology-2.png";
import easyVector from "../../assets/easy-vector.svg";
import fingerPrint from "../../assets/fingerprint.png";
import play from "../../assets/hero-play.svg";

const Hero = () => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.topologyContainer}>
        <img src={topology} alt="topology" className={styles.topology} />
      </div>
      <img
        src={fingerPrint}
        alt="fingerPrint_image"
        className={styles.fingerPrintImage}
      />
      <div className={styles.content}>
        <img src={easyVector} alt="easy-vector" className={styles.easyVector} />
        <p className={styles.title}>
          {" "}
          Easy internet payments built for Developers by{" "}
          <span className={styles.developers}> Developers </span>{" "}
        </p>
        <p className={styles.subTitle}>
          Send and receive money to anyone, anywhere in the world.
        </p>
        <div className={styles.btnContainer}>
          <button className={styles.btn}>
            Get Started{" "}
            <img
              src={arrowRight}
              alt="arrow-right"
              className={styles.arrowRight}
            />
          </button>
          <button className={styles.outlineBtn}>
            How it works{" "}
            <img src={play} alt="arrow-right" className={styles.play} />
          </button>
        </div>
        <div className={styles.heroPngContainer}>
          <div className={styles.invoiceContainer}>
            <img
              src={invoices}
              alt="invoice_png"
              className={styles.invoicesPng}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
