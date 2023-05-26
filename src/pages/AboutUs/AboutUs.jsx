import React from "react";
import styles from "./AboutUs.module.css";

// images
import downloadIcon from "../../assets/get-icon.svg";
import topIcon from "../../assets/top-icon.svg";
// import containerIcon from "../../assets/container-icon.svg";
import aboutImage from "../../assets/about-image.png";
import missionImage from "../../assets/mission-image.png";
import missionIcon from "../../assets/mission-icon.svg";
import valueIcon from "../../assets/value-icon.svg";

// components
import Subscribe from "../../components/Subscribe/Subscribe";
import MeetTheTeam from "../../components/MeetTheTeam/MeetTheTeam";
import { valueData } from "../../Data/valueData";

const AboutUs = () => {
  return (
    <div className={styles.pageContainer}>
      <img src={topIcon} alt="top-icon" className={styles.topIcon} />
      <div className={styles.titleContainer}>
        <p className={styles.pageTitle}> About Lipana </p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.aboutContainer}>
          <div className={styles.leftContent}>
            <p className={styles.aboutTitle}>Why Lipana? </p>
            <p className={styles.aboutText}>
              Lipana is built for YOU by someone just like you. We are
              entrepreneurs, freelancers and business owners just like you. We
              too have experienced some problems when using popular payment
              services, which in many cases don’t really support African
              countries. We have lost business opportunities as a result and had
              our funds on hold when we need them the most. We understand. That
              is why we are building something better. It’s free to get started
              and there are no monthly fees.
            </p>
            <button className={styles.getBtn}>
              <p className={styles.btnText}> Get Lipana </p>
              <img src={downloadIcon} alt="get_lipana" />
            </button>
          </div>
          <div className={styles.rightContent}>
            <img
              src={aboutImage}
              alt="about_image"
              className={styles.aboutImage}
            />
          </div>
        </div>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.missionContainer}>
          <div className={styles.missionLeft}>
            <img
              src={missionImage}
              alt="mission_image"
              className={styles.missionImage}
            />
            <img
              src={missionIcon}
              alt="mission_icon"
              className={styles.missionIcon}
            />
          </div>
          <div className={styles.missionRight}>
            <p className={styles.missionTitle}>
              <span className={styles.our}> Our</span> Mission
            </p>
            <p className={styles.topMission}>
              We fundamentally believe that financial inclusion in the global
              economy, creates opportunities for economic growth and this
              reduces poverty. And poverty, as we say, is the enemy.
            </p>
            <p className={styles.bottomMission}>
              Our mission at Lipana is to empower businesses and individuals in
              Africa to take control of their financial lives, by providing easy
              to use, affordable and secure products and services.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.valuesContainer}>
        <div className={styles.valuesContent}>
          <p className={styles.valueTitle}>
            {" "}
            <span className={styles.our}> Our</span> Values{" "}
          </p>
          <div className={styles.values}>
            {valueData.map((data) => {
              return (
                <div className={styles.valueContainer} key={data.id}>
                  <img
                    src={data.iconUrl}
                    alt="icon_url"
                    className={styles.valueIcon}
                  />
                  <p className={styles.title}> {data.title} </p>
                  <p className={styles.message}> {data.message} </p>
                </div>
              );
            })}
          </div>
        </div>
        <img
          src={valueIcon}
          alt="value_icon"
          className={styles.valueAbsoluteIcon}
        />
      </div>
      <MeetTheTeam />
      <Subscribe />
    </div>
  );
};

export default AboutUs;
