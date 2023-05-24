import React from "react";
import styles from "./Pricing.module.css";

const Pricing = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.titleContainer}>
        <p className={styles.pageTitle}>
          {" "}
          Simple pricing, No{" "}
          <span className={styles.titleSpan}> Monthly Fees </span>{" "}
        </p>
        <p className={styles.pageSubTitle}>
          {" "}
          We only make money when you make more.{" "}
        </p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.percentageContainer}>
          <div className={styles.pricing}>
            <p className={styles.title}> Mobile Money & Payouts </p>
            <p className={styles.percentage}> 1% </p>
            <p className={styles.perTransaction}> Per Transaction </p>
          </div>
          <div className={styles.pricing}>
            <p className={styles.title}> Crypto & Card Pricing </p>
            <p className={styles.percentage}> 3.5% </p>
            <p className={styles.perTransaction}> Per Transaction </p>
          </div>
        </div>
        {/* <div className={styles.contactsContainer}>
          <div className={styles.locationContainer}>
            <img
              src={contactLocation}
              alt=" location "
              className={styles.contactIcon}
            />
            <p className={styles.contactText}>
              {" "}
              Pinetree Plaza, 7th Floor, Ngong road
            </p>
          </div>
          <div className={styles.mailContainer}>
            <img src={contactMail} alt="mail" className={styles.contactIcon} />
            <p className={styles.contactText}> support@lipana.app </p>
          </div>
          <div className={styles.phoneContainer}>
            <img src={contactPhone} alt="call" className={styles.contactIcon} />
            <p className={styles.contactText}> +254791814113 </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Pricing;
