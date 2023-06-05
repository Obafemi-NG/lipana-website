import React, { useEffect, useState } from "react";
import styles from "./FeedbackCarousel.module.css";

const FeedbackCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [items.length]);
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.commentContainer}>
        <p className={styles.comment}> {items[currentIndex].comment} </p>
      </div>
      <div className={styles.pagination}>
        {items.map((_, index) => (
          <span
            key={index}
            className={`${styles.paginationDot} ${
              index === currentIndex ? styles.active : ""
            } `}
          />
        ))}
      </div>
      <div className={styles.carouselContent}>
        {items.map((item, index) => (
          <div className={styles.customerDetails}>
            <p className={styles.name}> {item.name} </p>
            <p className={styles.position}> {item.position} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackCarousel;
