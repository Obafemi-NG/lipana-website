import React from "react";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.pageContainer}>
      {/* <div className={styles.pageContent}> */}
      <div className={styles.titleContainer}>
        <p className={styles.pageTitle}> Contact Us </p>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.formContainer}>
          <p className={styles.formTitle}> Get in touch with us </p>
          <p className={styles.formSubTitle}>
            {" "}
            Got a question? Make your enquiries below and a member of the team
            will contact you shortly.{" "}
          </p>
          <form action="" className={styles.inputFormContainer}>
            <div className={styles.namePhoneContainer}>
              <input
                type="text"
                className={`${styles.input} ${styles.nameInput} `}
                placeholder="Name:"
              />
              <input
                type="text"
                className={`${styles.input} ${styles.nameInput} `}
                placeholder="Phone No:"
              />
            </div>
            <input
              type="text"
              className={`${styles.input}`}
              placeholder="Email:"
            />
            <textarea
              name=""
              id=""
              rows="7"
              placeholder="message"
              className={`${styles.input}`}
            ></textarea>
            <button className={styles.submitBtn}>Submit</button>
          </form>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ContactUs;
