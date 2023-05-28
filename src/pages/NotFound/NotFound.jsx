import React from "react";
import styles from "./NotFound.module.css";
import file from "../../assets/file.svg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.pageContainer}>
      <img src={file} alt="file" className={styles.fileIcon} />
      <p className={styles.message}> Whoops! we can’t find that page... </p>
      <button className={styles.homeBtn} onClick={() => navigate("/")}>
        Let's take you home
      </button>
    </div>
  );
};

export default NotFound;
