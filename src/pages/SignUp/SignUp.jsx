import React from "react";
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.left}>
        <div className={styles.logoContainer}>
          <img src="" alt="" />
          <p> Lipana </p>
        </div>
        <p className={styles.title}> Create Account </p>
        <p className={styles.subTitle}>
          {" "}
          Enter your credentials to create your account.{" "}
        </p>
        <div className={styles.inputContainer}>
          <div className={styles.inputLableContainer}>
            <label htmlFor=""> Phone Number </label>
            <input type="text" className={styles.authInput} />
          </div>
          <div className={styles.inputLableContainer}>
            <label htmlFor=""> Choose password </label>
            <input type="text" className={styles.authInput} />
          </div>
        </div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
};

export default SignUp;
