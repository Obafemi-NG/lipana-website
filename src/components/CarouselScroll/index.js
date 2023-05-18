import { useRef } from "react";
import leftSolid from "../../assets/left-solid.svg";
import rightSolid from "../../assets/right-solid.svg";

// imported CSS
import styles from "./CarouselScroll.module.css";

// imported utils
import { usePosition } from "./usePosition";

const CarouselScroll = ({ children }) => {
  const ref = useRef();
  const { hasItemsOnLeft, hasItemsOnRight, scrollLeft, scrollRight } =
    usePosition(ref);

  return (
    <div className={styles["carouselContainer"]}>
      <div className={styles["carouselContainerInner"]} ref={ref}>
        {children}
      </div>
      <div className={styles["control-container"]}>
        <div
          onClick={scrollLeft}
          className={
            hasItemsOnLeft ? `${styles["non-opaque"]}` : `${styles["opaque"]}`
          }
        >
          <img
            src={leftSolid}
            alt="scroll_icon"
            className={styles.solidArrow}
          />
        </div>
        <div
          onClick={scrollRight}
          className={
            hasItemsOnRight ? `${styles["non-opaque"]}` : `${styles["opaque"]}`
          }
        >
          <div className={styles["scroll-right"]}>
            <img
              src={rightSolid}
              alt="scroll_icon"
              className={styles.solidArrow}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselScroll;
