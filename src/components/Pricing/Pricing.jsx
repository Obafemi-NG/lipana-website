import React from "react";
import styles from "./Pricing.module.css";
import { pricingData } from "../../Data/pricingData";

const Pricing = () => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.content}>
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
