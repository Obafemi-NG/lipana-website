import React from "react";
import styles from "./Services.module.css";
import star from "../../assets/longstar.svg";
// import CarouselScroll from "../CarouselScroll";
import { serviceData } from "../../Data/serviceData";
import ServicesCard from "../ServicesCard/ServicesCard";

const Services = () => {
  return (
    <div className={styles.componentContainer}>
      <div className={styles.titleContainer}>
        <img src={star} alt="star" className={styles.star} />
        <p className={styles.servicesText}> Services </p>
        <img src={star} alt="star" className={styles.star} />
      </div>
      <div className={styles.content}>
        <div className={styles.servicesContainer}>
          {serviceData.map((data) => {
            return (
              <ServicesCard
                title={data.title}
                id={data.id}
                description={data.description}
                imgLink={data.cardIcon}
                dark={data.dark}
              />
            );
          })}
        </div>
      </div>
      {/* <div className={styles.carouselContainer}>
        <CarouselScroll>
          {serviceData.map((data) => (
            <ServicesCard
              title={data.title}
              id={data.id}
              description={data.description}
              imgLink={data.cardIcon}
              dark={data.dark}
            />
          ))}
        </CarouselScroll>
      </div> */}
    </div>
  );
};

export default Services;
