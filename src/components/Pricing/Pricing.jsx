import React from "react";
import styles from "./Pricing.module.css";
import { pricingData } from "../../Data/pricingData";

const Pricing = () => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.content}>
        <div className={styles.topSection}>
          <p className={styles.bottomTitle}>
            {" "}
            <span className={styles.business}> Simple Transparent </span>{" "}
            Pricing. No Monthly Fees.{" "}
          </p>
          <p className={styles.subTitle}>
            {" "}
            We only make money, when you make more.{" "}
          </p>
        </div>
        {pricingData.map((data) => (
          <div key={data.id} className={styles.pricing}>
            <p className={styles.title}> {data.title} </p>
            <p className={styles.percentage}> {data.percentage}% </p>
            <p className={styles.perTransaction}> Per Transaction </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
