import React from "react";
import styles from "./Payment.module.css";

import apple from "../../assets/apple.svg";
import andriod from "../../assets/andriod.svg";
import paymentImage from "../../assets/paymentImage.png";
import paymentBottomIcon from "../../assets/paymentBottomIcon.svg";
import paymentCenterIcon from "../../assets/paymentCenterIcon.svg";

const Payment = () => {
  return (
    <div className={styles.componentContainer}>
      <img src={paymentBottomIcon} alt="icon" className={styles.bottomIcon} />
      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.title}>
            Simplify payments in your business. Use Lipana.
          </p>
          <div className={styles.downloadBtnContainer}>
            <button className={styles.appleDownloadBtn}>
              <img src={apple} alt="apple" className={styles.appleIcon} />
              <div className={styles.download}>
                <p className={styles.upText}> Download on the </p>
                <p className={styles.downText}> App Store </p>
              </div>
            </button>
            <div className={styles.andriodDownloadBtn}>
              <img src={andriod} alt="andriod" className={styles.andriodIcon} />
              <div className={styles.download}>
                <p className={styles.upTextDark}> Download on the </p>
                <p className={styles.downTextDark}> Google Play </p>
              </div>
            </div>
          </div>
          <p className={styles.comingSoon}> Coming Soon... </p>
        </div>
        <div className={styles.right}>
          <img
            src={paymentCenterIcon}
            alt="icon"
            className={styles.centerIcon}
          />
          <img
            src={paymentImage}
            alt="payment"
            className={styles.paymentImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
