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
        <img src={iAndM} alt="i&m" />
        <img src={visa} alt="visa" />
        <img src={masterCard} alt="masterCard" />
        <img src={unionPay} alt="unionPay" />
        <img src={mPesa} alt="mPesa" />
        <img src={bitcoin} alt="bitcoin" />
        <img src={ethereum} alt="ethereum" />
      </div>
    </div>
  );
};

export default Partners;
