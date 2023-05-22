import React from "react";
import styles from "./MeetTheTeam.module.css";
import star from "../../assets/longstar.svg";
import { teamData } from "../../Data/teamData";

import linkedinIcon from "../../assets/linkedin-icon.svg";
import twitterIcon from "../../assets/twitter-icon.svg";

const MeetTheTeam = () => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.content}>
        <div className={styles.titleContainer}>
          <img src={star} alt="star" className={styles.star} />
          <p className={styles.servicesText}> Meet The Team </p>
          <img src={star} alt="star" className={styles.star} />
        </div>
        <div className={styles.teamContainer}>
          {teamData.map((data) => (
            <div className={styles.memberContainer}>
              <div className={styles.imageContainer}>
                <img
                  src={data.imgUrl}
                  alt={`${data.name}_img`}
                  className={styles.image}
                />
              </div>
              <div className={styles.aboutContainer}>
                <p className={styles.position}> {data.position} </p>
                <p className={styles.name}> {data.name} </p>
                <p className={styles.jobDescription}> {data.jobDescription} </p>
                <div className={styles.socialsContainer}>
                  <img src={linkedinIcon} alt="linkedin_icon" />
                  <img src={twitterIcon} alt="twitter_icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetTheTeam;
