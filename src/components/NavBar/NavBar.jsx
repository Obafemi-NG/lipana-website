import React, { useState } from "react";
import styles from "./NavBar.module.css";

import logo from "../../assets/logo.svg";
import hamburger from "../../assets/Vectorhamburger.svg";

const NavBar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const toggleMenuDisplay = () => {
    setDisplayMenu(!displayMenu);
  };
  return (
    <div className={styles.componentContainer}>
      <div
        className={`${styles.content} ${displayMenu ? styles.responsive : ""} `}
      >
        <div className={styles.logoContainer}>
          <img src={logo} alt="lipanaLogo" />
          <p className={styles.lipana}> Lipana </p>
        </div>
        <div
          className={`${styles.links} ${
            displayMenu ? styles.responsiveLinks : ""
          }`}
        >
          <ul
            className={`${styles.navLinks} ${
              displayMenu ? styles.responsiveNavLinks : ""
            } `}
          >
            <li className={`${styles.navLink} ${styles.responsiveNavLink} `}>
              Products
            </li>
            <li className={`${styles.navLink} ${styles.responsiveNavLink} `}>
              Pricing
            </li>
            <li className={`${styles.navLink} ${styles.responsiveNavLink} `}>
              Developer
            </li>
            <li className={`${styles.navLink} ${styles.responsiveNavLink} `}>
              Company
            </li>
            <li className={`${styles.navLink} ${styles.responsiveNavLink} `}>
              Contact Us
            </li>
          </ul>
          <div
            className={`${styles.auth} ${
              displayMenu ? styles.responsiveAuth : ""
            } `}
          >
            <p className={styles.signIn}> Sign In </p>
            <button className={styles.createAccount}> Create Account </button>
          </div>
        </div>
        <img
          src={hamburger}
          alt="menu-icon"
          width={32}
          onClick={toggleMenuDisplay}
          className={styles.menuIcon}
        />
      </div>
    </div>
  );
};

export default NavBar;
