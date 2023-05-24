import React from "react";
import styles from "./ContactUs.module.css";

import contactVector from "../../assets/contact-vector.svg";
import contactLocation from "../../assets/location-contact.svg";
import contactMail from "../../assets/mail-contact.svg";
import contactPhone from "../../assets/call-contact.svg";

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
        <div className={styles.contactsContainer}>
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
        </div>
      </div>
      {/* </div> */}

      <img
        src={contactVector}
        alt="contact-vector"
        className={styles.contactVector}
      />
    </div>
  );
};

export default ContactUs;
