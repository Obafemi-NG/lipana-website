import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";
import location from "../../assets/location.svg";
import call from "../../assets/call.svg";
import mail from "../../assets/mail.svg";
import facebook from "../../assets/Facebook.svg";
import twitter from "../../assets/Twitter.svg";
import linkedin from "../../assets/Linkedin.svg";
import instagram from "../../assets/Instagram.svg";
import whatsapp from "../../assets/Whatsapp.svg";
import youtube from "../../assets/Youtube.svg";
import tiktok from "../../assets/Tiktok.svg";

const Footer = () => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.aboutSection}>
            <div className={styles.logoContainer}>
              <img src={logo} alt="lipanaLogo" />
              <p className={styles.lipana}> Lipana </p>
            </div>
            <p className={styles.aboutText}>
              Payments for the next generation of African Entrepreneurns
            </p>
            <div className={styles.contact}>
              <p className={styles.contactTitle}> CONTACT US </p>
              <div className={styles.iconDetailPair}>
                <img
                  src={location}
                  alt="location"
                  className={styles.locationIcon}
                />
                <p className={styles.locationDetail}>
                  {" "}
                  Pinetree Plaza, 7th Floor, Ngong road{" "}
                </p>
              </div>
              <div className={styles.iconDetailPair}>
                <img src={mail} alt="mail" className={styles.mailIcon} />
                <p className={styles.locationDetail}> support@lipana.app </p>
              </div>
              <div className={styles.iconDetailPair}>
                <img src={call} alt="call" className={styles.callIcon} />
                <p className={styles.locationDetail}> +254791814113 </p>
              </div>
            </div>
          </div>
          <div className={styles.productsSection}>
            <p className={styles.productsTitle}> PRODUCTS </p>
            <ul className={styles.productLinksContainer}>
              <li className={styles.productLink}> Invoices </li>
              <li className={styles.productLink}> Payment Links </li>
              <li className={styles.productLink}> QR Code Payments </li>
              <li className={styles.productLink}> Payouts </li>
              <li className={styles.productLink}> Subscriptions </li>
              <li className={styles.productLink}>Point Of Sale</li>
            </ul>
          </div>
          <div className={styles.companySection}>
            <p className={styles.companyTitle}> COMPANY </p>
            <ul className={styles.companyLinksContainer}>
              <li className={styles.companyLink}> Team </li>
              <li className={styles.companyLink}> Support </li>
              <li className={styles.companyLink}> Blog </li>
              <li className={styles.companyLink}> Pricing </li>
            </ul>
          </div>
          <div className={styles.resourcesSection}>
            <p className={styles.resourcesTitle}> RESOURCES </p>
            <ul className={styles.resourcesLinksContainer}>
              <li className={styles.resourcesLink}> Affiliates </li>
              <li className={styles.resourcesLink}> Updates </li>
              <li className={styles.productLink}> Status Page </li>
              <li className={styles.resourcesLink}> Developers </li>
              <li className={styles.resourcesLink}> API Documentation </li>
            </ul>
          </div>
          <div className={styles.projectSection}>
            <p className={styles.projectTitle}> PROJECT </p>
            <ul className={styles.projectLinksContainer}>
              <li className={styles.projectLink}> Aircart </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            {" "}
            © Lipana Technologies, Inc 2023. All Rights Reserved{" "}
          </p>
          <div className={styles.socialsIcons}>
            <img src={facebook} alt="facebook-icon" />
            <img src={twitter} alt="twitter-icon" />
            <img src={linkedin} alt="linkedin-icon" />
            <img src={instagram} alt="instagram-icon" />
            <img src={whatsapp} alt="whatsapp-icon" />
            <img
              src={youtube}
              alt="youtube-icon"
              className={styles.youtubeIcon}
            />
            <img src={tiktok} alt="tiktok-icon" />
          </div>
          <div className={styles.otherLinks}>
            <p className={styles.otherLink}> Privacy Policy </p>
            <p className={styles.otherLink}> Terms of service </p>
            <p className={styles.otherLink}> Merchant policy </p>
          </div>
        </div>
      </div>
      {/* <div className={styles.overlay} /> */}
    </div>
  );
};

export default Footer;
