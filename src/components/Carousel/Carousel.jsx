import React, { useState, useEffect } from "react";
import styles from "./Carousel.module.css";
import arrowRight from "../../assets/arrow-square-right.svg";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [items.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.pagination}>
        {items.map((_, index) => (
          <span
            key={index}
            className={`${styles.paginationDot} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
      <div className={styles.carouselContent}>
        <div className={styles.carousel}>
          {items.map((item, index) => (
            <div
              className={`${styles.carouselItem} ${
                index === currentIndex ? styles.active : ""
              }`}
              key={index}
            >
              {/* <div className={styles.itemDetails}> */}
              <h3 className={styles.featureTitle}> {item.title} </h3>
              <p className={styles.featureContent}> {item.content} </p>
              <button className={styles.learnMoreBtn}>
                Learn More <img src={arrowRight} alt="arrow" />{" "}
              </button>
              {/* </div> */}
            </div>
          ))}
        </div>

        <div className={styles.imageContainer}>
          <img
            src={items[currentIndex].imgUrl}
            alt="item_image"
            className={styles.featureImage}
          />
        </div>
      </div>
      {/* <button className="prev-button" onClick={goToPrevSlide}>&lt;</button>
      <button className="next-button" onClick={goToNextSlide}>&gt;</button> */}
    </div>
  );
};

export default Carousel;
