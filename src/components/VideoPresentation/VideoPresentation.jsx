import React from "react";
import styles from "./VideoPresentation.module.css";
import arrow from "../../assets/Arrow-dark.svg";
import video from "../../assets/invoice.png";
import play from "../../assets/play.svg";

const VideoPresentation = () => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.videoContainer}>
        <img src={video} alt="video" className={styles.videoPlayer} />
        <div className={styles.playBtnContainer}>
          <img src={play} alt="play" className={styles.playBtn} />
        </div>
      </div>
      <p className={styles.videoText}>
        A visual guide could be a wireframe, creative composition,
        or information architecture. A device that enables collaboration will
        lessen the chance of work having to be completely redone. A manager
        could create a visual guide for the team to complete the build-out.
      </p>
      <div className={styles.learnMoreContainer}>
        <p className={styles.learnMore}>Learn More </p>
        <img src={arrow} alt="arrow" className={styles.arrow} />
      </div>
    </div>
  );
};

export default VideoPresentation;
