import React from "react";
import styles from "./Partners.module.css";
import iAndM from "../../assets/i&m.svg";
import visa from "../../assets/visa.svg";
import masterCard from "../../assets/mastercard.svg";
import unionPay from "../../assets/unionPay.svg";
import mPesa from "../../assets/mPesa.svg";
import bitcoin from "../../assets/bitcoin.svg";
import ethereum from "../../assets/ethereum.svg";

const Partners = () => {
  return (
    <div className={styles.componentContainer}>
      <p className={styles.title}>Our Partners</p>
      <div className={styles.iconsContainer}>
        <img src={iAndM} alt="i&m" className={styles.iandm} />
        <img src={visa} alt="visa" className={styles.visa} />
        <img src={masterCard} alt="masterCard" className={styles.masterCard} />
        <img src={unionPay} alt="unionPay" className={styles.unionPay} />
        <img src={mPesa} alt="mPesa" className={styles.mPesa} />
        <img src={bitcoin} alt="bitcoin" className={styles.bitcoin} />
        <img src={ethereum} alt="ethereum" className={styles.ethereum} />
      </div>
    </div>
  );
};

export default Partners;
