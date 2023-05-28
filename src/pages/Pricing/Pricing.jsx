import React from "react";
import styles from "./Pricing.module.css";
import { whatIsIncludedData } from "../../Data/whatIsIncludedData";

import largePV from "../../assets/large-PV.png";
import highVT from "../../assets/high-VT.png";
import uniqueBM from "../../assets/unique-BM.png";
import topIcon from "../../assets/pricing-page-svg.svg";
import absolutImage from "../../assets/blend-Image.svg";

const Pricing = () => {
  return (
    <div className={styles.pageContainer}>
      <img
        src={topIcon}
        alt="pricing_top_icon"
        className={styles.pricingTopIcon}
      />
      <img src={absolutImage} alt="blend_image" className={styles.blendImage} />
      <div className={styles.titleContainer}>
        <p className={styles.pageTitle}>
          {" "}
          Simple pricing, No{" "}
          <span className={styles.titleSpan}> Monthly Fees </span>{" "}
        </p>
        <p className={styles.pageSubTitle}>
          {" "}
          We only make money when you make more.{" "}
        </p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.percentageContainer}>
          <div className={styles.pricing}>
            <p className={styles.title}> Mobile Money & Payouts </p>
            <p className={styles.percentage}> 1% </p>
            <p className={styles.perTransaction}> Per Transaction </p>
          </div>
          <div className={styles.pricing}>
            <p className={styles.title}> Crypto & Card Pricing </p>
            <p className={styles.percentage}> 3.5% </p>
            <p className={styles.perTransaction}> Per Transaction </p>
          </div>
        </div>
        <div className={styles.infoContainer}>
          <p className={styles.infoTitle}> What's Included </p>
          <div className={styles.mapContainer}>
            {whatIsIncludedData.map((data) => {
              return (
                <div className={styles.data} key={data.id}>
                  <img
                    src={data.icon}
                    alt={`${data.title}_icon`}
                    className={styles.iconContainer}
                  />
                  <p className={styles.mapTitle}> {data.title} </p>
                  <ul>
                    {data.listItem.map((list) => (
                      <li className={styles.mapList}> {list} </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
          <button className={styles.createAccountBtn}>
            Create a free account
          </button>
          <div className={styles.getCustomPriceContainer}>
            <p className={styles.customPriceTitle}> Get a Custom Price </p>
            <p className={styles.customPriceSubTitle}>
              {" "}
              Get volume discount and country specific rates. Available for
              business with:{" "}
            </p>
            <div className={styles.imagesContainer}>
              <div className={styles.imageContainer}>
                <img
                  src={largePV}
                  alt="Large_PV"
                  className={styles.priceImage}
                />
                <p className={styles.imageText}> Large Payment Volume </p>
              </div>
              <div className={styles.imageContainer}>
                <img src={highVT} alt="High_VT" className={styles.priceImage} />
                <p className={styles.imageText}> High Volume Transactions </p>
              </div>
              <div className={styles.imageContainer}>
                <img
                  src={uniqueBM}
                  alt="unique_BM"
                  className={styles.priceImage}
                />
                <p className={styles.imageText}> Unique Business Models </p>
              </div>
            </div>
            <button className={styles.contactBtn}>Contact Sales</button>
          </div>
        </div>
        {/* <div className={styles.contactsContainer}>
          <div className={styles.locationContainer}>
            <img
              src={contactLocation}
              alt=" location "
              className={styles.contactIcon}
            />
            <p className={styles.contactText}>
              {" "}
              Pinetree Plaza, 7th Floor, Ngong road
            </p>
          </div>
          <div className={styles.mailContainer}>
            <img src={contactMail} alt="mail" className={styles.contactIcon} />
            <p className={styles.contactText}> support@lipana.app </p>
          </div>
          <div className={styles.phoneContainer}>
            <img src={contactPhone} alt="call" className={styles.contactIcon} />
            <p className={styles.contactText}> +254791814113 </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Pricing;
