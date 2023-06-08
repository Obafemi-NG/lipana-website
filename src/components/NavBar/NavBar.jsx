import React, { useState } from "react";
import styles from "./NavBar.module.css";

import logo from "../../assets/logo.svg";
import hamburger from "../../assets/Vectorhamburger.svg";
import { NavLink } from "react-router-dom";

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
        <NavLink to="/">
          <div className={styles.logoContainer}>
            <img src={logo} alt="lipanaLogo" />
            <p className={styles.lipana}> Lipana </p>
          </div>
        </NavLink>
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
            <NavLink to="/products">
              {({ isActive }) => (
                <li
                  className={` ${isActive ? styles.isActive : ""} ${
                    styles.navLink
                  } ${styles.responsiveNavLink} `}
                >
                  Products
                </li>
              )}
            </NavLink>
            <NavLink to="/pricing">
              {({ isActive }) => (
                <li
                  className={` ${isActive ? styles.isActive : ""} ${
                    styles.navLink
                  } ${styles.responsiveNavLink} `}
                >
                  Pricing
                </li>
              )}
            </NavLink>
            <NavLink to="/developer">
              {({ isActive }) => (
                <li
                  className={` ${isActive ? styles.isActive : ""} ${
                    styles.navLink
                  } ${styles.responsiveNavLink} `}
                >
                  Developer
                </li>
              )}
            </NavLink>
            <NavLink to="/about-us">
              {({ isActive }) => (
                <li
                  className={` ${isActive ? styles.isActive : ""} ${
                    styles.navLink
                  } ${styles.responsiveNavLink} `}
                >
                  Company
                </li>
              )}
            </NavLink>
            <NavLink to="/contact-us">
              {({ isActive }) => (
                <li
                  className={` ${isActive ? styles.isActive : ""} ${
                    styles.navLink
                  } ${styles.responsiveNavLink} `}
                >
                  Contact Us
                </li>
              )}
            </NavLink>
          </ul>
          <div
            className={`${styles.auth} ${
              displayMenu ? styles.responsiveAuth : ""
            } `}
          >
            <NavLink to="/signin">
              <p className={styles.signIn}> Sign In </p>
            </NavLink>
            <NavLink to="/signup">
              <button className={styles.createAccount}> Create Account </button>
            </NavLink>
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
