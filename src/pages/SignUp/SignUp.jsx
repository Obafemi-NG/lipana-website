import React, { useState } from "react";
import styles from "./SignUp.module.css";
import logo from "../../assets/logo.svg";
import eyeSolid from "../../assets/eye-solid.svg";
import eyeSlash from "../../assets/eye-slash-solid.svg";
import google from "../../assets/google.svg";
import mail from "../../assets/auth_mail.svg";
import twitter from "../../assets/auth_twitter.svg";
import github from "../../assets/github_social.svg";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [passwordType, setPasswordType] = useState("password");
  const handleVisibility = () => {
    if (passwordType === "text") {
      setPasswordType("password");
    } else {
      setPasswordType("text");
    }
    console.log(passwordType);
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/login");
  };
  return (
    <div className={styles.pageContainer}>
      <div className={styles.left}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="" />
          <p className={styles.logoText}> Lipana </p>
        </div>
        <p className={styles.title}> Create Account </p>
        <p className={styles.subTitle}>
          {" "}
          Enter your credentials to create your account.{" "}
        </p>
        <form className={styles.inputContainer}>
          <div className={styles.inputLabelContainer}>
            <label htmlFor="" className={styles.label}>
              {" "}
              Phone Number{" "}
            </label>
            <input
              required
              type="text"
              className={`${styles.authInput} ${styles.phoneInput} `}
            />
          </div>
          <div
            className={`${styles.inputLabelContainer} ${styles.passwordInputContainer} `}
          >
            <label htmlFor="" className={styles.label}>
              {" "}
              Choose password{" "}
            </label>
            <input
              required
              type={passwordType}
              className={`${styles.authInput} ${styles.passwordInput} `}
            />
            <img
              src={passwordType === "text" ? eyeSlash : eyeSolid}
              alt=""
              className={styles.visibilityIcon}
              onClick={handleVisibility}
            />
          </div>
          <div className={styles.checkBoxContainer}>
            <input
              type="checkbox"
              id="remember_me"
              className={styles.checkBox}
            />
            <label htmlFor="remember_me"> Remember Information </label>
          </div>
          <button className={styles.signUpBtn}> Sign Up </button>
        </form>
        <div className={styles.leftBottom}>
          <p className={styles.or}> or </p>
          <div className={styles.iconsContainer}>
            <div className={styles.iconContainer}>
              <img
                src={google}
                alt="google_icon"
                className={styles.socialIcon}
              />
            </div>
            <div className={styles.iconContainer}>
              <img src={mail} alt="mail_icon" className={styles.socialIcon} />
            </div>
            <div className={styles.iconContainer}>
              <img
                src={twitter}
                alt="twitter_icon"
                className={styles.socialIcon}
              />
            </div>
            <div className={styles.iconContainer}>
              <img
                src={github}
                alt="github_icon"
                className={styles.socialIcon}
              />
            </div>
          </div>
          <p className={styles.haveAccount}>
            {" "}
            Already have an account?{" "}
            <span className={styles.signInBtn} onClick={handleNavigate}>
              Sign In
            </span>{" "}
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <p className={styles.rightText}> Fast Online Payment </p>
      </div>
    </div>
  );
};

export default SignUp;
