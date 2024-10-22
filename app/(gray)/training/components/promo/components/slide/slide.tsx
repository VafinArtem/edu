import React, {ReactElement} from "react";
import {getImageProps} from "next/image";
import {SlideProps} from "./slide.props";
import styles from "./slide.module.css";

const Slide = ({}: SlideProps): ReactElement | null => {
  const common = {alt: "", quality: 95};
  const {
    props: {srcSet: desktop, ...rest},
  } = getImageProps({
    ...common,
    width: 645,
    height: 660,
    priority: true,
    src: "/img/components/promo/author-desktop.jpg",
  });
  const {
    props: {srcSet: laptop},
  } = getImageProps({
    ...common,
    width: 440,
    height: 510,
    src: "/img/components/promo/author-laptop.jpg",
  });
  const {
    props: {srcSet: tablet},
  } = getImageProps({
    ...common,
    width: 708,
    height: 200,
    src: "/img/components/promo/author-tablet.jpg",
  });
  const {
    props: {srcSet: mobile},
  } = getImageProps({
    ...common,
    width: 310,
    height: 150,
    src: "/img/components/promo/author-mobile.jpg",
  });

  return (
    <div className={styles.slide}>
      <picture className={styles.picture}>
        <source media="(min-width: 1500px)" srcSet={desktop} />
        <source media="(max-width: 530px)" srcSet={mobile} />
        <source media="(max-width: 1099px)" srcSet={tablet} />
        <source media="(max-width: 1499px)" srcSet={laptop} />
        <img {...rest} width={440} height={510} alt={``} className={styles.image} />
      </picture>
      <p className={styles.speaker}>
        <span className={styles.name}>Волкова Юлия Валерьевна</span>
        <span className={styles.position}>Стоматолог-хирург, пародонтолог</span>
      </p>
    </div>
  );
};

export default Slide;
